import useSWR from 'swr'

import axios from '../lib/axios'

const fetcher = (...args) => axios.get(...args).then((data) => data.data)

const useFetch = ({ page, pageSize, standardStatus, customQuery }) => {
  if (!page) page = 1
  if (!pageSize) pageSize = 10
  if (!standardStatus) standardStatus = 'Active'

  const query =
    customQuery ??
    `/api/properties?pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=id&populate=Photos&filters[StandardStatus][$eq]=${standardStatus?.replace(
      / /g,
      '%20'
    )}`

  const { data, error, isLoading } = useSWR(query, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
  })

  return { data, error, isLoading }
}

export default useFetch
