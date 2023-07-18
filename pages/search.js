import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr'

import Card from '../components/Card'
import ErrorComponent from '../components/ErrorComponent'
import LoadingState from '../components/LoadingState'
import Navbar from '../components/Navbar'
import PaginationSearch from '../components/PaginationSearch'
import axios from '../lib/axios'

const fetcher = (...args) => axios.get(...args).then((data) => data.data)

const StandardStatus = () => {
  const router = useRouter()
  let { q, page, pageSize } = router.query
  if (!page) page = 1
  if (!pageSize) pageSize = 10

  let query = ''
  if (Number(q)) {
    query = `/api/properties?pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=id&populate=Photos&filters[$or][0][City][$containsi]=${q}&filters[$or][1][StreetName][$containsi]=${q}&filters[$or][2][ListPrice][$eq]=${q}`
  } else {
    query = `/api/properties?pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=id&populate=Photos&filters[$or][0][City][$containsi]=${q}&filters[$or][1][StreetName][$containsi]=${q}`
  }

  const { data, error, isLoading } = useSWR(query, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
  })

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
            <div className="text-darkGray text-2xl pt-6 pb-12 text-center">
              {properties?.length ? (
                <p>
                  Search result(s) for{' '}
                  <span className=" text-offBlack">{q}</span>
                </p>
              ) : (
                <>
                  <p>
                    No results found for{' '}
                    <span className=" text-offBlack">{q}</span>
                  </p>
                  <p className="text-lg text-offBlack pt-4">
                    Try refining your query.
                  </p>
                </>
              )}
            </div>
            <div
              className={`mx-auto max-w-[96rem] grid md:grid-cols-2 md:gap-x-[2rem] xl:gap-x-[12rem] gap-y-8`}
            >
              {properties?.map((property) => (
                <Card
                  key={property.id}
                  {...property.attributes}
                  page={page}
                  pageSize={pageSize}
                  q={q}
                />
              ))}
            </div>
          </>
        )}

        {/* Pagination */}
        <PaginationSearch pagination={pagination} q={q} />
      </div>
    </div>
  )
}

export default StandardStatus
