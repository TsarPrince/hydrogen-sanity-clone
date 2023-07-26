import { useRouter } from 'next/router'
import qs from 'qs'
import React from 'react'
import useSWR from 'swr'

import Card from '../components/Card'
import ErrorComponent from '../components/ErrorComponent'
import LoadingState from '../components/LoadingState'
import Navbar from '../components/Navbar'
import PaginationSearch from '../components/PaginationSearch'
import axios from '../lib/axios'
import { getPropertiesByListPrice } from '../utils/queries'

const fetcher = (...args) => axios.get(...args).then((data) => data.data)

const StandardStatus = () => {
  const router = useRouter()
  let { page, pageSize } = router.query
  if (!page) page = 1
  if (!pageSize) pageSize = 10

  const jsonToUrlEncodedQuery = getPropertiesByListPrice(page, pageSize)

  let query = `/api/properties?${jsonToUrlEncodedQuery}`

  const { data, error, isLoading } = useSWR(query, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
  })
  console.log(data)

  const properties = data?.data
  const pagination = data?.meta?.pagination

  if (error) return <ErrorComponent />

  return (
    <div className="mt-[100px]">
      <Navbar />
      <div className="mx-8 mb-24">
        {/* Property Grid */}
        {isLoading ? (
          <LoadingState />
        ) : (
          <>
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
          </>
        )}

        {/* Pagination */}
        <PaginationSearch pagination={pagination} />
      </div>
    </div>
  )
}

export default StandardStatus
