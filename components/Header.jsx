import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <div className="flex flex-col items-center rounded-b-xl bg-peach px-4 pb-4 pt-24 md:px-8 md:pb-8 md:pt-34">
        <h1 className="mb-7 max-w-[60rem] whitespace-pre-line text-center text-3xl md:text-5xl">
          Minnesota
          <br /> Real Estate
        </h1>
        <div className="mt-4 leading-paragraph max-w-4xl text-center">
          We take pride in presenting an extensive and diverse collection of
          real estate listings, catering to every taste and preference. Whether
          you&apos;re seeking a cozy apartment, a luxurious mansion, a serene
          countryside retreat, or a bustling commercial space, we have it all
          under one roof. Whether you&apos;re seeking a cozy apartment, a
          luxurious mansion, a serene countryside retreat, or a bustling
          commercial space, we have it all under one roof.
        </div>

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
                src="/header.mp4"
                poster="/header_poster_image.png"
              >
                Sorry, your browser doesn&apos;t support embedded videos, but
                don&apos;t worry, you can
                <a href="/header.mp4">download it</a>
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
        </div>
      </div>
    </>
  )
}

export default Header
