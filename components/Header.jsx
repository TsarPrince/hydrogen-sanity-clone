import { useRouter } from 'next/router'
import React from 'react'

import useFetch from '../hooks/useFetch'
import Card from './Card'
import GoogleMap from './GoogleMapComponent'
import LoadingState from './LoadingState'

const Header = () => {
  const { data, error, isLoading } = useFetch({ type: 'header' })

  return (
    <>
      <div className="flex flex-col items-center rounded-b-xl bg-peach px-4 pb-4 pt-24 md:px-8 md:pb-8 md:pt-20">
        {/* <Link
          href="/Active"
          className="flex h-[2.5rem] items-center justify-center overflow-hidden rounded-full p-4 text-sm font-bold duration-200 ease-out disabled:opacity-20 disabled:bg-opacity-100 bg-offBlack hover:opacity-80 text-white"
        >
          Buy properties NOW!
        </Link> */}
        <div className="mt-6 w-full md:mt-12">
          <div className="relative flex w-full place-content-center overflow-hidden rounded-md bg-lightGray">
            <div className="relative w-full">
              <video
                className="w-full"
                muted
                playsInline
                autoPlay
                src="/video/wilenhomevidoe.webm"
                poster="/header_poster_image.png"
              >
                Sorry, your browser doesn&apos;t support embedded videos, but
                don&apos;t worry, you can
                <a href="/video/wilenhomevidoe.webm">download it</a>
                and watch it with your favorite video player!
              </video>
              {/* <img
                className="w-full"
                decoding="async"
                sizes="100vw"
                src="/header.jpg"
              /> */}
            </div>
          </div>

          {/* Custom grid of properties */}
          <div className="rounded-md mt-8">
            <p className="text-xl md:text-2xl font-bold py-4">
              New & Updated Listings
            </p>
            {isLoading ? (
              <LoadingState />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {data?.data?.map((property, key) => (
                  <Card key={key} {...property.attributes} />
                ))}
              </div>
            )}
          </div>

          {/* Google MAPS */}
          {/* <GoogleMap /> */}
        </div>
      </div>
    </>
  )
}

export default Header
