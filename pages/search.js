import { useRouter } from 'next/router'
import React from 'react'

import Card from '../components/Card'
import ErrorComponent from '../components/ErrorComponent'
import InputNumber from '../components/forms/InputNumber'
import LoadingState from '../components/LoadingState'
import Navbar from '../components/Navbar'
import Pagination from '../components/Pagination'
import useFetch from '../hooks/useFetch'

const StandardStatus = () => {
  const router = useRouter()
  let { q, page, pageSize } = router.query
  if (!page) page = 1
  if (!pageSize) pageSize = 10

  const { data, error, isLoading } = useFetch({
    page,
    pageSize,
    q,
  })

  const properties = data?.data
  const pagination = data?.meta?.pagination
  const onSubmit = (e) => {
    // e.preventDefault()
  }

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
              {/* <form onSubmit={onSubmit}>
                <input type="text" placeholder="Search query" />
                <select id="PropertyType">
                  <option value={''}>Select property type</option>
                  <option value={'Land'}>Land</option>
                  <option value={'Farm'}>Farm</option>
                  <option value={'Residential'}>Residential</option>
                  <option value={'Residential Income'}>
                    Residential Income
                  </option>
                  <option value={'Commercial Sale'}>Commercial Sale</option>
                  <option value={'Residential Lease'}>Residential Lease</option>
                </select>
                <InputNumber min={0} max={12} deafultValue={4} />
                <input id="BedroomsTotal" type="range" max={12} />
                <input id="BathroomsTotalInteger" type="range" max={12} />
                <input
                  id="BathroomsTotalInteger"
                  type="range"
                  max={60000000}
                  step={1}
                />
              </form> */}
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
        <Pagination pagination={pagination} q={q} />
      </div>
    </div>
  )
}

export default StandardStatus
