import React, { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

import { AppContext } from '../context/appContext'
import useSWR from 'swr'
import axios from '../lib/axios'
import Spinner from './Spinner'
import ErrorComponent from './ErrorComponent'

const fetcher = (...args) => axios.get(...args).then((data) => data.data)

const StrapiLoader = ({ children }) => {
  const { setData } = useContext(AppContext)
  const { query } = useRouter()
  let { page, pageSize } = query

  if (!page) page = '1'
  if (!pageSize) pageSize = '10'

  const {
    data: hold,
    error: errorHold,
    isLoading: isLoadingHold,
  } = useSWR(
    `/api/properties?pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=id&populate=Photos&filters[StandardStatus][$eq]=Hold`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
    }
  )
  const {
    data: active,
    error: errorActive,
    isLoading: isLoadingActive,
  } = useSWR(
    `/api/properties?pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=id&populate=Photos&filters[StandardStatus][$eq]=Active`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
    }
  )
  const {
    data: comingSoon,
    error: errorComingSoon,
    isLoading: isLoadingComingSoon,
  } = useSWR(
    `/api/properties?pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=id&populate=Photos&filters[StandardStatus][$eq]=Coming%20Soon`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
    }
  )
  const {
    data: pending,
    error: errorPending,
    isLoading: isLoadingPending,
  } = useSWR(
    `/api/properties?pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=id&populate=Photos&filters[StandardStatus][$eq]=Pending`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
    }
  )
  console.log('StrapiLoader')

  useEffect(() => {
    const data = {
      Active: active,
      'Coming Soon': comingSoon,
      Pending: pending,
      Hold: hold,
    }
    console.log(data)
    setData(data)
  }, [active, comingSoon, pending, hold])

  if (errorActive || errorComingSoon || errorHold || errorPending)
    return <ErrorComponent />
  return (
    <div>
      {isLoadingActive ||
      isLoadingComingSoon ||
      isLoadingHold ||
      isLoadingPending ? (
        <div className="min-h-screen flex items-center justify-center w-full">
          <Spinner />
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  )
}

export default StrapiLoader
