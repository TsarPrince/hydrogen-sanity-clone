import Head from 'next/head'
import React from 'react'
import {
  BiBed,
  BiDollarCircle,
  BiSolidCarGarage,
  BiTimeFive,
  BiWater,
} from 'react-icons/bi'
import { GrStatusGood } from 'react-icons/gr'
import { LuBath, LuRuler, LuSchool, LuWarehouse } from 'react-icons/lu'
import { PiHouseBold } from 'react-icons/pi'
import { SlSizeFullscreen } from 'react-icons/sl'

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
            <div className="portableText px-4 pb-24 pt-8 md:px-8">
              <div className="first:mt-0 last:mb-0 relative my-12 w-screen px-6 md:px-8 -ml-6 md:-ml-8">
                <div className="">
                  <div
                    className="mr-auto flex flex-col items-start"
                    style={{ color: '#3d7544' }}
                  >
                    <div className="text-2xl md:text-4xl">
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
                  <div>
                    <p className="pt-3 text-xl md:text-2xl font-semibold text-offBlack">
                      {ListingAddressCombined}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Status',
                    value: StandardStatus,
                    icon: <GrStatusGood />,
                  },
                  {
                    title: 'Property Type',
                    value: PropertyType,
                    icon: <PiHouseBold />,
                  },
                  {
                    title: 'Days On Market',
                    value:
                      (DaysOnMarket && prettifyNumber(DaysOnMarket)) || '—',
                    icon: <BiTimeFive />,
                  },
                  {
                    title: 'Beds',
                    value: BedroomsTotal,
                    icon: <BiBed />,
                  },
                  {
                    title: 'Baths',
                    value: BathroomsTotalInteger,
                    icon: <LuBath />,
                  },
                  {
                    title: 'Total Finished SqFt',
                    value:
                      prettifyNumber(Math.round(LotSizeSquareFeet)) ||
                      prettifyNumber(Math.round(NST_SqFtTotal)) ||
                      '—',
                    icon: <SlSizeFullscreen />,
                  },
                  {
                    title: 'Basement',
                    value: Basement?.join(', ') || '—',
                    icon: <LuWarehouse />,
                  },
                  {
                    title: 'Area',
                    value: LotSizeArea + ' ' + LotSizeUnits,
                    icon: <LuRuler />,
                  },
                  {
                    title: 'Garage Stalls',
                    value: GarageSpaces || '—',
                    icon: <BiSolidCarGarage />,
                  },
                  {
                    title: 'Lakefront',
                    value: NST_LakeAcres ? 'Available' : 'Not available',
                    icon: <BiWater />,
                  },
                  {
                    title: 'School District',
                    value: HighSchoolDistrict,
                    icon: <LuSchool />,
                  },
                  {
                    title: 'Annual Taxes',
                    value: '$' + prettifyNumber(TaxAnnualAmount),
                    icon: <BiDollarCircle />,
                  },
                ].map((cell, key) => (
                  <div key={key}>
                    <div className="flex">
                      <div className="w-6 h-6 hidden md:block">{cell.icon}</div>
                      <p className="font-bold md:text-lg">{cell.title}</p>
                    </div>
                    <p>{cell.value}</p>
                  </div>
                ))}
              </div>

              <h2 className="first:mt-0 last:mb-0 mb-4 mt-16 text-xl font-bold">
                Description
              </h2>
              <p className="first:mt-0 last:mb-0 relative my-4 leading-paragraph max-w-[660px] ">
                {PublicRemarks}
              </p>
              <p>
                <span className="font-semibold">Listed by:</span>{' '}
                {ListOfficeName}
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
