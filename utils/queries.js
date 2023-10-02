import qs from 'qs'

const getPropertiesByStandardStatus = (
  page,
  pageSize,
  standardStatus,
  sortByArray
) =>
  qs.stringify(
    {
      sort: sortByArray,
      pagination: {
        page,
        pageSize,
      },
      populate: 'Photos',
      filters: {
        StandardStatus: {
          $eq: standardStatus?.replace(/\+/g, '%20'),
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  )

const getPropertiesByListingId = (ListingId, sortByArray) =>
  qs.stringify(
    {
      sort: sortByArray,
      populate: 'Photos',
      filters: {
        $and: [
          /*
          COMMENT OFF TO SHOW LISINGS WHICH ARE CANCELED, PENDING, OR HOLD
          */
          {
            StandardStatus: {
              $in: ['Active', 'Coming Soon'],
            },
          },
          {
            ListingId: {
              $eq: ListingId,
            },
          },
        ],
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  )

const getPropertiesByQueryParams = (page, pageSize, q, sortByArray) =>
  qs.stringify(
    {
      sort: sortByArray,
      pagination: {
        page,
        pageSize,
      },
      populate: 'Photos',
      filters: {
        $and: [
          {
            StandardStatus: {
              $in: ['Active', 'Coming Soon'],
            },
          },
        ],
        $or: [
          {
            City: {
              $containsi: q,
            },
          },
          {
            StreetName: {
              $containsi: q,
            },
          },
          {
            PropertyType: {
              $containsi: q,
            },
          },
          {
            HighSchoolDistrict: {
              $containsi: q,
            },
          },
          {
            PostalCode: {
              $containsi: q,
            },
          },
          {
            ListingId: {
              $eq: q,
            },
          },
          // search on Numerical fields starts here
          Number(q)
            ? ({
                ListPrice: {
                  $eq: q,
                },
              },
              {
                StreetNumber: {
                  $eq: q,
                },
              })
            : {},
        ],
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  )

const getPropertiesByListPrice = (page, pageSize, sortByArray) =>
  qs.stringify(
    {
      sort: sortByArray,
      pagination: {
        page,
        pageSize,
      },
      populate: 'Photos',
      filters: {
        $or: [
          {
            StandardStatus: {
              $in: ['Active', 'Coming Soon'],
            },
          },
        ],
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  )

const getPropertiesForHeader = () =>
  qs.stringify({
    pagination: {
      limit: 6,
    },
    populate: 'Photos',
    filters: {
      $and: [
        {
          StreetName: {
            $in: ['Hennepin', 'Dakota', 'Scott', 'Carver'],
          },
        },
        {
          ListPrice: {
            $gte: 700000,
          },
        },
        {
          StandardStatus: {
            $in: ['Active', 'Coming Soon'],
          },
        },
      ],
    },
  })

export {
  getPropertiesByStandardStatus,
  getPropertiesByListingId,
  getPropertiesByQueryParams,
  getPropertiesByListPrice,
  getPropertiesForHeader,
}
