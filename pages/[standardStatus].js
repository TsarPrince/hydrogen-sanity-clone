import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import Card from '../components/Card'
import ErrorComponent from '../components/ErrorComponent'
import LoadingState from '../components/LoadingState'
import Navbar from '../components/Navbar'
import Pagination from '../components/Pagination'
import useFetch from '../hooks/useFetch'

const StandardStatus = () => {
  const router = useRouter()
  const { page, pageSize } = router.query
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
