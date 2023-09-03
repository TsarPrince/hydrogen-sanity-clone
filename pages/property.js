import { useRouter } from 'next/router'
import React from 'react'

import ErrorComponent from '../components/ErrorComponent'
import Gallery from '../components/Gallery'
import LoadingState from '../components/LoadingState'
import Navbar from '../components/Navbar'
import useFetch from '../hooks/useFetch'
import { prettifyNumber } from '../utils'

const IndivdualProperty = () => {
  const { query } = useRouter()

  const { id, page, pageSize, standardStatus, q } = query

  const { data, error, isLoading } = useFetch({
    page,
    pageSize,
    standardStatus: decodeURI(standardStatus),
    q,
  })

  const property = data?.data.filter(
    (properties) => properties.attributes.ListingId == id
  )[0]

  // terminate the property function if property is not found
  // no matter loading or error
  if (!property) {
    if (isLoading) {
      return (
        <>
          <Navbar />
          <LoadingState />
        </>
      )
    }
    // If error occurs during fetch
    // or if property is not found
    else {
      return (
        <>
          <Navbar />
          <ErrorComponent />
        </>
      )
    }
  }
  const {
    ListingId,
    City,
    HighSchoolDistrict,
    ListOfficeName,
    StreetNumber,
    StreetName,
    StreetSuffix,
    StateOrProvince,
    PostalCode,
    ListPrice,
    LotSizeDimensions,
    LotSizeArea,
    LotSizeUnits,
    Photos,
    PhotosCount,
    PropertyType,
    StandardStatus,
    PublicRemarks,
    ZoningDescription,
    Contingency,
    DaysOnMarket,
    Basement,
    LotSizeSquareFeet,
    NST_SqFtTotal,
    GarageSpaces,
    TaxAnnualAmount,
    NST_LakeAcres,
    BedroomsTotal,
    BathroomsTotalInteger,
  } = property.attributes

  return (
    <div className="mt-[70px] lg:mt-[100px]">
      <Navbar />
      <>
        <Gallery media={Photos?.data?.map((media) => media.attributes.url)} />
        <div className="w-full lg:w-[calc(100%-315px)]">
          <div className="portableText max-w-[660px] px-4 pb-24 pt-8 md:px-8">
            <div className="first:mt-0 last:mb-0 relative my-12 w-screen px-6 md:px-8 -ml-6 md:-ml-8">
              <div className="">
                <div
                  className="mr-auto flex flex-col items-start"
                  style={{ color: '#3d7544' }}
                >
                  <div className="max-w-[60rem] text-2xl md:text-4xl">
                    ${prettifyNumber(ListPrice)}
                  </div>
                  {/* <div className="mt-4">
                    <a
                      className="flex h-[2.5rem] items-center justify-center overflow-hidden rounded-full p-4 text-sm font-bold duration-200 ease-out disabled:opacity-20 disabled:bg-opacity-100 bg-offBlack hover:opacity-80 text-white"
                      style={{ background: '#3d7544' }}
                      href="/pages/process"
                    >
                      Quick Add
                    </a>
                  </div> */}
                </div>
              </div>
            </div>

            <ul className="first:mt-0 last:mb-0 my-8 space-y-0.5 leading-paragraph list-outside ml-8">
              <li className="font-bold uppercase">
                {StandardStatus} {Contingency !== 'None' && Contingency}
              </li>
              <li className="font-bold uppercase">
                {StreetNumber} {StreetName} {StreetSuffix}, {City}{' '}
                {StateOrProvince} {PostalCode}
              </li>
              <li className="font-bold uppercase">{PropertyType}</li>
              <li>
                {(DaysOnMarket && prettifyNumber(DaysOnMarket)) || '—'} Days on
                Market
              </li>
              <li>{BedroomsTotal} Bedrooms</li>
              <li>{BathroomsTotalInteger} Bathrooms</li>
              <li>
                {prettifyNumber(Math.round(LotSizeSquareFeet)) ||
                  prettifyNumber(Math.round(NST_SqFtTotal)) ||
                  '—'}{' '}
                Total Finished SqFt
              </li>
              <li>{Basement?.join(', ') || '—'} Basement</li>
              <li>
                {LotSizeArea} {LotSizeUnits}
              </li>
              <li>{GarageSpaces || '—'} Garage Stalls</li>
              <li>
                {HighSchoolDistrict}{' '}
                <span className=""> High School District</span>
              </li>
              <li>${prettifyNumber(TaxAnnualAmount)} Annual Taxes</li>
              <li>{NST_LakeAcres ? 'Lakefront available' : 'No Lakefront'}</li>
              <li>{ListOfficeName}</li>
            </ul>

            <h2 className="first:mt-0 last:mb-0 mb-4 mt-16 text-xl font-bold">
              Description
            </h2>
            <p className="first:mt-0 last:mb-0 relative my-4 leading-paragraph">
              {PublicRemarks}
            </p>
          </div>
        </div>
      </>
    </div>
  )
}

export default IndivdualProperty
