import useSWR from 'swr'

import axios from '../lib/axios'
import {
  getPropertiesByListPrice,
  getPropertiesByQueryParams,
  getPropertiesByStandardStatus,
} from '../utils/queries'

const fetcher = (...args) => axios.get(...args).then((data) => data.data)

const useFetch = ({ page, pageSize, standardStatus, q }) => {
  if (!page) page = 1
  if (!pageSize) pageSize = 10

  let jsonToUrlEncodedQuery
  if (q) {
    jsonToUrlEncodedQuery = getPropertiesByQueryParams(page, pageSize, q)
  } else if (standardStatus) {
    jsonToUrlEncodedQuery = getPropertiesByStandardStatus(
      page,
      pageSize,
      standardStatus
    )
  } else {
    jsonToUrlEncodedQuery = getPropertiesByListPrice(page, pageSize)
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
        d.attributes.Media.forEach((m) => (media[m.MediaKey] = m.Order))
        d.attributes.Photos.data?.sort(
          (a, b) => media[a.attributes.caption] - media[b.attributes.caption]
        )
      })
    },
  })

  return { data, error, isLoading }
}

export default useFetch
