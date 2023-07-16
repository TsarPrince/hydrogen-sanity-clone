import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import useSWR from 'swr'

import Card from '../components/Card'
import ErrorComponent from '../components/ErrorComponent'
import LoadingState from '../components/LoadingState'
import Navbar from '../components/Navbar'
import Pagination from '../components/Pagination'
import { AppContext } from '../context/appContext'
import axios from '../lib/axios'

const fetcher = (...args) => axios.get(...args).then((data) => data.data)

const StandardStatus = () => {
  console.log('StandardStatus')
  const router = useRouter()
  const standardStatus = router.query.standardStatus?.replace(/\+/g, ' ')
  let { page, pageSize } = router.query
  if (!page) page = 1
  if (!pageSize) pageSize = 10

  const { data, setData } = useContext(AppContext)

  const {
    data: fetchedData,
    error,
    isLoading,
  } = useSWR(
    `/api/properties?pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=id&populate=Photos&filters[StandardStatus][$eq]=${standardStatus?.replace(
      / /g,
      '%20'
    )}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
    }
  )

  useEffect(() => {
    setData({ ...data, [standardStatus]: fetchedData })
  }, [fetchedData])

  const properties = data?.[standardStatus]?.data
  const pagination = data?.[standardStatus]?.meta?.pagination

  if (error) return <ErrorComponent />

  return (
    <div className="mt-[100px]">
      <Navbar />
      <div className="mx-8 mb-24">
        {/* Property Grid */}
        {isLoading ? (
          <LoadingState />
        ) : (
          <div
            className={`mx-auto max-w-[96rem] grid md:grid-cols-2 md:gap-x-[2rem] xl:gap-x-[12rem] gap-y-8`}
          >
            {properties?.map((property) => (
              <Card
                key={property.id}
                {...property.attributes}
                page={page}
                pageSize={pageSize}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        <Pagination pagination={pagination} standardStatus={standardStatus} />
      </div>
    </div>
  )
}

export default StandardStatus
