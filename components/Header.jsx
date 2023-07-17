import React from 'react'

const Header = () => {
  return (
    <>
      <div className="flex flex-col items-center rounded-b-xl bg-peach px-4 pb-4 pt-24 md:px-8 md:pb-8 md:pt-34">
        <h1 className="mb-7 max-w-[60rem] whitespace-pre-line text-center text-3xl md:text-5xl">
          Quality stuff.
          <br /> No fluff.
        </h1>

        <a
          href="https://github.com/sanity-io/hydrogen-sanity-demo"
          rel="noreferrer"
          target="_blank"
          className="flex h-[2.5rem] items-center justify-center overflow-hidden rounded-full p-4 text-sm font-bold duration-200 ease-out disabled:opacity-20 disabled:bg-opacity-100 bg-offBlack hover:opacity-80 text-white"
        >
          Buy properties NOW!
        </a>
        <div className="mt-6 w-full md:mt-12">
          <div className="relative flex w-full place-content-center overflow-hidden rounded-md bg-lightGray">
            <div className="relative w-full">
              <a
                className="absolute left-[50%] top-[50%] flex h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 animate-pulse items-center justify-center rounded-full bg-offBlack duration-300 ease-out hover:scale-125 hover:animate-none"
                href="/products/punkt-coaster"
              >
                <div className="relative h-[4px] w-[4px] rounded-full bg-white"></div>
              </a>
              <a
                className="absolute left-[50%] top-[50%] flex h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 animate-pulse items-center justify-center rounded-full bg-offBlack duration-300 ease-out hover:scale-125 hover:animate-none"
                href="/products/zapi-incense-burner"
              >
                <div className="relative h-[4px] w-[4px] rounded-full bg-white"></div>
              </a>
              <img
                className="w-full"
                decoding="async"
                sizes="100vw"
                src="/header.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header