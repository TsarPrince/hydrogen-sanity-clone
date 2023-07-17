import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Card = ({
  ListingId,
  City,
  StreetName,
  StreetNumber,
  ListPrice,
  LotSizeArea,
  LotSizeUnits,
  Photos,
  PhotosCount,
  PropertyType,
  StandardStatus,
  page,
  pageSize,
}) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="group relative">
      <div className="aspect-square border border-[lightGray] relative flex items-center justify-center overflow-hidden rounded bg-lightGray object-cover transition-[border-radius] duration-500 ease-out hover:rounded-xl">
        <Link
          className="absolute left-0 top-0 h-full w-full"
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
          <div
            className={`w-full h-full bg-cover bg-center  ${
              loaded ? 'blur-0 animate-none' : 'blur-md animate-pulse'
            }`}
            style={{
              backgroundImage: `url(${Photos?.data?.[0]?.attributes.formats.thumbnail.url})`,
            }}
          >
            <img
              alt={Photos?.data?.[0]?.attributes.alternativeText}
              decoding="async"
              loading="lazy"
              src={Photos?.data?.[0]?.attributes.url}
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
              query: { status: StandardStatus, id: ListingId },
            }}
          >
            {`${StreetName}, ${StreetNumber}, ${City}`}
          </Link>
          <div className="text-darkGray">{`${PropertyType} — ${LotSizeArea} ${LotSizeUnits}`}</div>
          <div className="text-darkGray">{`${PhotosCount} ${
            PhotosCount > 1 ? 'Photos' : 'Photo'
          }`}</div>
        </div>
        <div className="mt-3 flex font-bold">
          {/* <span className="text-darkGray">
            <div className="mr-2.5 line-through decoration-red">$35.00</div>
          </span> */}
          <div>${ListPrice}</div>
        </div>
      </div>
    </div>
  )
}

export default Card
