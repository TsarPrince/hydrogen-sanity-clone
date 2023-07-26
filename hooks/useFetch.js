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
  })

  return { data, error, isLoading }
}

export default useFetch
