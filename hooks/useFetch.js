import useSWR from 'swr'

import axios from '../lib/axios'
import { getPropertiesByStandardStatus } from '../utils/queries'

const fetcher = (...args) => axios.get(...args).then((data) => data.data)

const useFetch = ({ page, pageSize, standardStatus }) => {
  if (!page) page = 1
  if (!pageSize) pageSize = 10
  if (!standardStatus) standardStatus = 'Active'

  const jsonToUrlEncodedQuery = getPropertiesByStandardStatus(
    page,
    pageSize,
    standardStatus
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
