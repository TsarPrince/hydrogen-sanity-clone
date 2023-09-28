import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { prettifyNumber } from '../utils'

const Card = ({
  ListingId,
  City,
  StreetName,
  StreetNumber,
  StreetSuffix,
  ListPrice,
  LotSizeArea,
  LotSizeUnits,
  Photos,
  PhotosCount,
  PropertyType,
  StandardStatus,
  StateOrProvince,
  PostalCode,
  BedroomsTotal,
  BathroomsFull,
  BathroomsHalf,
  BathroomsOneQuarter,
  BathroomsThreeQuarter,
  BathroomsTotalInteger,
  page,
  pageSize,
}) => {
  const [loaded, setLoaded] = useState(false)

  const formattedListPrice = prettifyNumber(ListPrice)

  return (
    <div className="group relative">
      <div className="aspect-square border border-[lightGray] relative flex items-center justify-center overflow-hidden rounded bg-lightGray object-cover transition-[border-radius] duration-500 ease-out hover:rounded-xl">
        <Link
          className="absolute left-0 top-0 h-full w-full"
          href={{
            pathname: '/property',
            query: {
              id: ListingId,
            },
          }}
        >
          <>
            <div
              className={`w-full h-full bg-cover bg-center  ${
                loaded ? 'blur-0 animate-none' : 'blur-md animate-pulse'
              }`}
              style={{
                backgroundImage: `url(${Photos?.data?.[0]?.attributes.formats?.thumbnail.url})`,
              }}
            >
              <img
                alt={Photos?.data?.[0]?.attributes.alternativeText}
                decoding="async"
                loading="lazy"
                src={
                  Photos?.data?.[0]?.attributes.url || '/PhotosComingSoon.webp'
                }
                className={`h-full w-full object-cover object-center transition-opacity ${
                  loaded ? 'opacity-100' : 'opacity-0'
                }}`}
                onLoad={() => {
                  setLoaded(true)
                }}
                onError={() => setLoaded(true)}
                // style="width: 100%; aspect-ratio: 3169 / 3169;"
              />
            </div>
            {/* Quick Add */}
            {/* <div className="absolute bottom-0 right-4 translate-y-full pb-4 duration-200 ease-in-out group-hover:block group-hover:translate-y-0">
              <button className="flex h-[2.5rem] items-center justify-center overflow-hidden rounded-full p-4 text-sm font-bold duration-200 ease-out disabled:opacity-20 disabled:bg-opacity-100 bg-offBlack hover:opacity-80 text-white">
                Quick add
              </button>
            </div> */}
          </>

          <div className="absolute left-4 top-4">
            <div className="flex place-content-center rounded-sm bg-white px-1.5 py-1 leading-none text-sm border-red text-red">
              {StandardStatus}
            </div>
          </div>
        </Link>
        <div className="absolute bottom-0 right-4 translate-y-full pb-4 duration-200 ease-in-out group-hover:block group-hover:translate-y-0"></div>
      </div>
      <div className="mt-3 text-md">
        <div className="space-y-1">
          <Link
            className="font-bold hover:underline"
            href={{
              pathname: '/property',
              query: {
                standardStatus: StandardStatus,
                id: ListingId,
                page,
                pageSize,
              },
            }}
          >
            {StreetNumber} {StreetName} {StreetSuffix}, {City} {StateOrProvince}{' '}
            {PostalCode}
          </Link>
          <div className="text-darkGray flex items-center space-x-2 divide-x divide-black">
            {/* 1/3 - Address */}
            <div>{`${PropertyType} — ${LotSizeArea} ${LotSizeUnits}`}</div>
            {/* 2/3 - Beds */}
            {BedroomsTotal && (
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 flex-shrink-0 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5C7.5 5 7 5.21 6.61 5.6S6 6.45 6 7V10C5.47 10 5 10.19 4.59 10.59S4 11.47 4 12V17H5.34L6 19H7L7.69 17H16.36L17 19H18L18.66 17H20V12C20 11.47 19.81 11 19.41 10.59S18.53 10 18 10V7C18 6.45 17.8 6 17.39 5.6S16.5 5 16 5M8 7H11V10H8M13 7H16V10H13M6 12H18V15H6Z" />
                </svg>
                {BedroomsTotal}
                <p className="hidden md:block pl-1">
                  {BedroomsTotal > 1 ? 'Beds' : 'Bed'}
                </p>
              </div>
            )}
            {/* 3/3 - Baths */}
            {BathroomsTotalInteger && (
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 flex-shrink-0 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,14V15C21,16.91 19.93,18.57 18.35,19.41L19,22H17L16.5,20C16.33,20 16.17,20 16,20H8C7.83,20 7.67,20 7.5,20L7,22H5L5.65,19.41C4.07,18.57 3,16.91 3,15V14H2V12H20V5A1,1 0 0,0 19,4C18.5,4 18.12,4.34 18,4.79C18.63,5.33 19,6.13 19,7H13A3,3 0 0,1 16,4C16.06,4 16.11,4 16.17,4C16.58,2.84 17.69,2 19,2A3,3 0 0,1 22,5V14H21V14M19,14H5V15A3,3 0 0,0 8,18H16A3,3 0 0,0 19,15V14Z" />
                </svg>
                {BathroomsTotalInteger}
                <p className="hidden md:block px-1">
                  {BathroomsTotalInteger > 1 ? ' Baths ' : ' Bath '}
                </p>
                <p className="hidden lg:block">
                  {'(' +
                    [
                      BathroomsFull + ' F',
                      BathroomsHalf + ' H',
                      BathroomsOneQuarter + ' one quarter',
                      BathroomsThreeQuarter + ' three quarter',
                    ]
                      .filter((bath) => Number(bath.split(' ')[0]))
                      .join(' + ') +
                    ')'}
                </p>
              </div>
            )}
          </div>
          {/* <div className="text-darkGray">{`${PhotosCount} ${
            PhotosCount > 1 ? 'Photos' : 'Photo'
          }`}</div> */}
        </div>
        <div className="mt-3 flex font-bold">
          {/* <span className="text-darkGray">
            <div className="mr-2.5 line-through decoration-red">$35.00</div>
          </span> */}
          <div>${formattedListPrice}</div>
        </div>
      </div>
    </div>
  )
}

export default Card
