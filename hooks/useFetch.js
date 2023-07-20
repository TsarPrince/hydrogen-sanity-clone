import qs from 'qs'
import useSWR from 'swr'

import axios from '../lib/axios'

const fetcher = (...args) => axios.get(...args).then((data) => data.data)

const useFetch = ({ page, pageSize, standardStatus }) => {
  if (!page) page = 1
  if (!pageSize) pageSize = 10
  if (!standardStatus) standardStatus = 'Active'

  const jsonToUrlEncodedQuery = qs.stringify(
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

  const query = `/api/properties?${jsonToUrlEncodedQuery}`
  const { data, error, isLoading } = useSWR(query, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
  })
  console.log(data)

  return { data, error, isLoading }
}

export default useFetch
