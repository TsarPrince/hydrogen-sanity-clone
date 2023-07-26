import qs from 'qs'
import useSWR from 'swr'

import axios from '../lib/axios'
import { getPropertiesByQueryParams } from '../utils/queries'

const fetcher = (...args) => axios.get(...args).then((data) => data.data)

const useFetch = ({ page, pageSize, q }) => {
  if (!page) page = 1
  if (!pageSize) pageSize = 10

  const jsonToUrlEncodedQuery = getPropertiesByQueryParams(page, pageSize, q)

  let query = `/api/properties?${jsonToUrlEncodedQuery}`

  const { data, error, isLoading } = useSWR(query, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
  })

  return { data, error, isLoading }
}

export default useFetch
