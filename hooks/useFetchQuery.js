import qs from 'qs'
import useSWR from 'swr'

import axios from '../lib/axios'

const fetcher = (...args) => axios.get(...args).then((data) => data.data)

const useFetch = ({ page, pageSize, q }) => {
  if (!page) page = 1
  if (!pageSize) pageSize = 10

  const jsonToUrlEncodedQuery = qs.stringify(
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
              $containsi: q,
            },
          },
          // search on Numerical fields startshere
          Number(q)
            ? {
                ListPrice: {
                  $eq: q,
                },
              }
            : {},
        ],
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  )

  let query = `/api/properties?${jsonToUrlEncodedQuery}`

  const { data, error, isLoading } = useSWR(query, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
  })

  return { data, error, isLoading }
}

export default useFetch
