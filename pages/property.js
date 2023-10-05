import Head from 'next/head'
import React from 'react'

import ErrorComponent from '../components/ErrorComponent'
import Gallery from '../components/Gallery'
import Navbar from '../components/Navbar'
import axiosInstance from '../lib/axios'
import { prettifyNumber } from '../utils'
import { getPropertiesByListingId } from '../utils/queries'

const IndivdualProperty = ({ property }) => {
  if (!property) {
    return (
      <>
        <Navbar />
        <ErrorComponent />
      </>
    )
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

  const ListingAddressCombined = `${StreetNumber ?? ''} ${StreetName ?? ''} ${
    StreetSuffix ?? ''
  }, ${City ?? ''} ${StateOrProvince ?? ''} ${PostalCode ?? ''}`

  return (
    <>
      <Head>
        <title>
          {`${ListingAddressCombined} | ${ListingId} | Mike Wilen Realty`}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content={`${ListingAddressCombined} | ${ListingId} | Mike Wilen Realty`}
        />
        <meta property="og:description" content={PublicRemarks} />
        <meta
          property="og:image"
          content={Photos?.data?.[0]?.attributes?.formats?.thumbnail?.url}
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:image:width"
          content={Photos?.data?.[0]?.attributes?.formats?.thumbnail?.width}
        />
        <meta
          property="og:image:height"
          content={Photos?.data?.[0]?.attributes?.formats?.thumbnail?.height}
        />
        {/* Twitter will read the og:title, og:image and og:description tags for their card */}
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta
          name="twitter:title"
          content={`${ListingAddressCombined} | ${ListingId} | Mike Wilen Realty`}
        />
        <meta name="twitter:description" content={PublicRemarks} />
        <meta
          name="twitter:image"
          content={Photos?.data?.[0]?.attributes?.url}
        />
        <meta property="twitter:image:type" content="image/jpeg" />
      </Head>

      <div className="mt-[70px] lg:mt-[100px]">
        <Navbar />
        <>
          <Gallery
            media={Photos?.data?.map((media) => ({
              src: media.attributes.url,
              alt: media.attributes.alternativeText,
              backgroundImage: media.attributes.formats?.thumbnail.url,
            }))}
          />
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
                <li className="font-bold">
                  {StandardStatus} {Contingency !== 'None' && Contingency}
                </li>
                <li className="font-bold">{ListingAddressCombined}</li>
                <li className="font-bold">{PropertyType}</li>
                <li>
                  {(DaysOnMarket && prettifyNumber(DaysOnMarket)) || '—'} Days
                  on Market
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
                <li>
                  {NST_LakeAcres ? 'Lakefront available' : 'No Lakefront'}
                </li>
                <li>Listed by: {ListOfficeName}</li>
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
    </>
  )
}

export default IndivdualProperty

export const getServerSideProps = async (context) => {
  const { id } = context.query

  const jsonToUrlEncodedQuery = getPropertiesByListingId(id)
  const query = `/api/properties?${jsonToUrlEncodedQuery}`
  const res = await axiosInstance.get(query)

  // // sort d.attributes.Photos.data based on the Order in d.attributes.Media
  res.data?.data.forEach((d) => {
    const media = {}
    d.attributes.Media?.forEach((m) => (media[m.MediaKey] = m.Order))
    d.attributes.Photos.data?.sort(
      (a, b) => media[a.attributes.caption] - media[b.attributes.caption]
    )
  })

  return {
    props: {
      property: res.data?.data?.[0] || null,
    },
  }
}
