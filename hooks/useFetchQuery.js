import useSWR from 'swr'

import axios from '../lib/axios'

const fetcher = (...args) => axios.get(...args).then((data) => data.data)

const useFetch = ({ page, pageSize, q }) => {
  if (!page) page = 1
  if (!pageSize) pageSize = 10

  let query = ''
  if (Number(q)) {
    query = `/api/properties?pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[$or][0][City][$containsi]=${q}&filters[$or][1][StreetName][$containsi]=${q}&filters[$or][2][ListPrice][$eq]=${q}`
  } else {
    query = `/api/properties?pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[$or][0][City][$containsi]=${q}&filters[$or][1][StreetName][$containsi]=${q}`
  }

  const { data, error, isLoading } = useSWR(query, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
  })

  return { data, error, isLoading }
}

export default useFetch
