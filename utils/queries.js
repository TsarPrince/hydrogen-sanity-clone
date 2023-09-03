import qs from 'qs'

const getPropertiesByStandardStatus = (page, pageSize, standardStatus) =>
  qs.stringify(
    {
      // sort: ['ListPrice:DESC', 'id:ASC'],
      sort: ['id:ASC'],
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

const getPropertiesByQueryParams = (page, pageSize, q) =>
  qs.stringify(
    {
      sort: ['ListPrice:DESC', 'id:ASC'],
      pagination: {
        page,
        pageSize,
      },
      populate: 'Photos',
      filters: {
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

const getPropertiesByListPrice = (page, pageSize) =>
  qs.stringify(
    {
      sort: ['ModificationTimestamp:DESC', 'id:ASC'],
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

export {
  getPropertiesByStandardStatus,
  getPropertiesByQueryParams,
  getPropertiesByListPrice,
}
