import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import Card from '../components/Card'
import ErrorComponent from '../components/ErrorComponent'
import LoadingState from '../components/LoadingState'
import Navbar from '../components/Navbar'
import Pagination from '../components/Pagination'
import TabFilters from '../components/TabFilters'
import useFetch from '../hooks/useFetch'

const StandardStatus = () => {
  const router = useRouter()
  const { page, pageSize, sort } = router.query
  const standardStatus = router.query.standardStatus?.replace(/\+/g, ' ')

  const { data, error, isLoading } = useFetch({
    page,
    pageSize,
    standardStatus,
  })

  const properties = data?.data
  const pagination = data?.meta?.pagination

  if (error)
    return (
      <>
        <Navbar />
        <ErrorComponent />
      </>
    )

  return (
    <div className="mt-[100px]">
      <Navbar />
      <div className="mx-8 mb-24">
        {/* Property Grid */}
        {isLoading ? (
          <LoadingState />
        ) : (
          <>
            <div className="py-4">{/* <TabFilters /> */}</div>
            <div
              className={`mx-auto max-w-[96rem] grid md:grid-cols-2 md:gap-x-[2rem] xl:gap-x-[12rem] gap-y-8`}
            >
              {properties?.map((property) => (
                <Card
                  key={property.id}
                  {...property.attributes}
                  page={page}
                  pageSize={pageSize}
                  standardStatus={standardStatus}
                />
              ))}
            </div>
          </>
        )}

        {/* Pagination */}
        <Pagination
          pagination={pagination}
          standardStatus={standardStatus}
          sort={sort}
        />
      </div>
    </div>
  )
}

export default StandardStatus
