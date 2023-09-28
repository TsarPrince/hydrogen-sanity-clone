import useSWR from 'swr'

import axios from '../lib/axios'
import {
  getPropertiesByListPrice,
  getPropertiesByQueryParams,
  getPropertiesByStandardStatus,
} from '../utils/queries'

const fetcher = (...args) => axios.get(...args).then((data) => data.data)

const useFetch = ({ page, pageSize, standardStatus, q, sort }) => {
  if (!page) page = 1
  if (!pageSize) pageSize = 10

  let sortByArray = []
  switch (sort) {
    case 'ListPrice:DESC':
      sortByArray = ['ListPrice:DESC', 'id:ASC']
      break
    case 'ListPrice:ASC':
      sortByArray = ['ListPrice:ASC', 'id:ASC']
      break
    case 'DaysOnMarket:ASC':
      sortByArray = ['DaysOnMarket:ASC', 'id:ASC']
      break
    case 'DaysOnMarket:DESC':
      sortByArray = ['DaysOnMarket:DESC', 'id:ASC']
      break
    default:
      sortByArray = ['id:ASC']
  }

  let jsonToUrlEncodedQuery
  if (q) {
    jsonToUrlEncodedQuery = getPropertiesByQueryParams(
      page,
      pageSize,
      q,
      sortByArray
    )
  } else if (standardStatus) {
    jsonToUrlEncodedQuery = getPropertiesByStandardStatus(
      page,
      pageSize,
      standardStatus,
      sortByArray
    )
  } else {
    jsonToUrlEncodedQuery = getPropertiesByListPrice(
      page,
      pageSize,
      sortByArray
    )
  }

  const query = `/api/properties?${jsonToUrlEncodedQuery}`
  const { data, error, isLoading } = useSWR(query, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    onSuccess: (data) => {
      // Media is an array of objects with MediaKey and Order (from MLSGrid)
      // Photos is an array of objects with caption === MediaKey (from Strapi)
      // sort d.attributes.Photos.data based on the Order in d.attributes.Media
      data.data.forEach((d) => {
        const media = {}
        d.attributes.Media?.forEach((m) => (media[m.MediaKey] = m.Order))
        d.attributes.Photos.data?.sort(
          (a, b) => media[a.attributes.caption] - media[b.attributes.caption]
        )
      })
    },
  })

  return { data, error, isLoading }
}

export default useFetch
