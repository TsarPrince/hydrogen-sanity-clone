import Link from 'next/link'
import React from 'react'

const Main = () => {
  return (
    <div className="mb-32 mt-24 px-4 md:px-8">
      <ul className="grid grid-cols-1 gap-x-[7.5vw] gap-y-[7.5vw] md:grid-cols-2">
        <li className="flex overflow-hidden items-center justify-center md:col-span-1">
          <div className="w-full">
            <div className="relative">
              <div className="relative overflow-hidden rounded transition-[border-radius] duration-500 ease-out group-hover:rounded-xl">
                <img
                  decoding="async"
                  sizes="50vw, 100vw"
                  src="/canceled2.jpg"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </li>
        <li className="flex overflow-hidden items-start justify-end mt-0 md:col-span-1">
          <div className="w-full md:w-full">
            <div className="group relative">
              <div className="aspect-square relative flex items-center justify-center overflow-hidden rounded bg-lightGray object-cover transition-[border-radius] duration-500 ease-out hover:rounded-xl">
                <div className="absolute left-0 top-0 h-full w-full">
                  <img
                    alt="AUTOGRAF Soap Dish - Blue"
                    decoding="async"
                    height="100"
                    loading="lazy"
                    sizes="100%"
                    src="/canceled.jpg"
                    width="100"
                    className="absolute h-full w-full transform bg-cover bg-center object-cover object-center ease-in-out"
                    // style="width:100%;aspect-ratio:3169/3169"
                  />
                </div>
                <div className="absolute bottom-0 right-4 translate-y-full pb-4 duration-200 ease-in-out group-hover:block group-hover:translate-y-0"></div>
              </div>
              <div className="mt-3 text-md">
                <div className="space-y-1">
                  <a
                    className="font-bold hover:underline"
                    href="/products/soap-dish"
                  >
                    Residential-Single Family
                  </a>
                  <div className="text-darkGray max-w-lg">
                    Discover the true essence of home in our thoughtfully
                    curated selection of residential houses, each embodying a
                    sense of warmth, security, and belonging, making them the
                    perfect foundation for your cherished memories and a
                    lifetime of happiness.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="flex overflow-hidden items-center justify-center md:col-span-2">
          <div className="w-full">
            <div className="flex gap-5 md:gap-[5vw] flex-col md:flex-row">
              <div className="relative aspect-[864/485] grow">
                <img
                  decoding="async"
                  sizes="100vw"
                  src="/comingSoon2.jpg"
                  // style="bottom:0;height:100%;left:0;object-fit:cover;position:absolute;right:0;top:0;width:100%"
                />
              </div>
              <div className="mr-auto flex w-full shrink-0 flex-col items-start md:max-w-[20rem]">
                <div className="text-xl font-bold md:text-2xl">
                  Find Your Dream Property Here!
                </div>
                <div className="mt-4 leading-paragraph">
                  We take pride in presenting an extensive and diverse
                  collection of real estate listings, catering to every taste
                  and preference. Whether you&apos;re seeking a cozy apartment,
                  a luxurious mansion, a serene countryside retreat, or a
                  bustling commercial space, we have it all under one roof.
                  Whether you&apos;re seeking a cozy apartment, a luxurious
                  mansion, a serene countryside retreat, or a bustling
                  commercial space, we have it all under one roof.
                </div>
                {/* <div className="mt-4">
                  <Link
                    className="font-bold underline hover:no-underline"
                    href="/"
                  >
                    Our process
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </li>
        <li className="flex overflow-hidden items-center justify-start mt-0 md:col-span-1">
          <div className="w-full md:w-[55%]">
            <div className="group relative">
              <div className="aspect-square relative flex items-center justify-center overflow-hidden rounded bg-lightGray object-cover transition-[border-radius] duration-500 ease-out hover:rounded-xl">
                <div className="absolute left-0 top-0 h-full w-full">
                  <img
                    alt="NST7220342 - Single Family Residence"
                    decoding="async"
                    height="100"
                    loading="lazy"
                    sizes="100%"
                    src="/comingSoon.jpg"
                    width="100"
                    className="absolute h-full w-full transform bg-cover bg-center object-cover object-center ease-in-out"
                    // style="width:100%;aspect-ratio:1606/1606"
                  />
                  <div className="absolute left-4 top-4">
                    <div className="flex place-content-center rounded-sm bg-white px-1.5 py-1 leading-none text-sm border-red text-red">
                      Coming Soon
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 text-md">
                <div className="space-y-1">
                  <div className="text-darkGray">
                    Exciting prospects await as we prepare to unveil a
                    captivating array of upcoming houses, featuring cutting-edge
                    designs and modern comforts, so you can be among the first
                    to seize the opportunity of owning the home of tomorrow
                  </div>
                </div>
                <div className="mt-3 flex font-bold">
                  <div>Coming Soon</div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="flex overflow-hidden items-center justify-center md:col-span-1">
          <div className="w-full">
            <Link
              className="group relative flex aspect-[4/3] h-full w-full flex-col items-center justify-center md:aspect-square"
              href="/Coming Soon"
            >
              <div className="relative flex h-full w-full flex-col items-center justify-center">
                <div
                  className="absolute bottom-2 left-2 right-1 top-2 duration-1000 ease-out group-hover:scale-[1.01]"
                  style={{
                    WebkitMask:
                      'url(/masks/1.svg) center center / contain no-repeat',
                    mask: 'url(/masks/1.svg) center center / contain no-repeat',
                  }}
                >
                  <div className="h-full w-full bg-[#3b53ca]"></div>
                </div>
                <div className="relative mt-[0.5em] w-[65%] text-center text-2xl group-hover:underline md:text-3xl text-white">
                  Coming Soon
                </div>
                <button className="flex h-[2.5rem] items-center justify-center overflow-hidden rounded-full p-4 text-sm font-bold duration-200 ease-out disabled:opacity-20 disabled:bg-opacity-100 pointer-events-none relative mt-6 bg-white text-offBlack hover:opacity-50">
                  View collection
                </button>
              </div>
            </Link>
          </div>
        </li>
        <li className="flex overflow-hidden items-start justify-end md:mt-[5vw] md:col-span-1">
          <div className="w-full md:w-[65%]">
            <div className="group relative">
              <div className="aspect-square relative flex items-center justify-center overflow-hidden rounded bg-lightGray object-cover transition-[border-radius] duration-500 ease-out hover:rounded-xl">
                <div className="absolute left-0 top-0 h-full w-full">
                  <img
                    alt="Spacious home office"
                    decoding="async"
                    height="100"
                    loading="lazy"
                    sizes="100%"
                    src="/hold.jpg"
                    width="100"
                    className="absolute h-full w-full transform bg-cover bg-center object-cover object-center ease-in-out"
                    // style="width:100%;aspect-ratio:3670/3670"
                  />
                  <div className="absolute left-4 top-4">
                    <div className="flex place-content-center rounded-sm bg-white px-1.5 py-1 leading-none text-sm border-red text-red">
                      Active
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-4 translate-y-full pb-4 duration-200 ease-in-out group-hover:block group-hover:translate-y-0">
                  <form method="post" action="/cart" className="">
                    <input
                      type="hidden"
                      name="cartAction"
                      value="ADD_TO_CART"
                    />
                    <input type="hidden" name="countryCode" value="US" />
                    <input
                      type="hidden"
                      name="lines"
                      value='[{"merchandiseId":"gid://shopify/ProductVariant/43109833965819","quantity":1}]'
                    />
                    <input
                      type="hidden"
                      name="analytics"
                      value='{"products":[{"productGid":"gid://shopify/Product/7726237319419","variantGid":"gid://shopify/ProductVariant/43109833965819","name":"BLOMST A5 Riso Print","variantName":"Default Title","brand":"Julia Xu","price":"15.0","quantity":1}],"totalValue":15}'
                    />
                  </form>
                </div>
              </div>
              <div className="mt-3 text-md">
                <div className="space-y-1">
                  <div className="text-darkGray">
                    Indulge in the epitome of luxury living with our exclusive
                    collection of opulent houses, where every detail is crafted
                    to perfection, and every amenity surpasses expectations.
                  </div>
                </div>
                <div className="mt-3 flex font-bold">
                  <div>Active</div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="flex overflow-hidden items-center justify-center md:col-span-1">
          <div className="w-full">
            <Link
              className="group relative flex aspect-[4/3] h-full w-full flex-col items-center justify-center md:aspect-square"
              href="/Active"
            >
              <div className="relative flex h-full w-full flex-col items-center justify-center">
                <div
                  className="absolute bottom-2 left-2 right-1 top-2 duration-1000 ease-out group-hover:scale-[1.01]"
                  style={{
                    WebkitMask:
                      'url(/masks/2.svg) center center / contain no-repeat',
                    mask: 'url(/masks/2.svg) center center / contain no-repeat',
                  }}
                >
                  <div className="h-full w-full bg-[#ffa81b]"></div>
                </div>
                <div className="relative mt-[0.5em] w-[65%] text-center text-2xl group-hover:underline md:text-3xl text-white">
                  Active Listings
                </div>
                <button className="flex h-[2.5rem] items-center justify-center overflow-hidden rounded-full p-4 text-sm font-bold duration-200 ease-out disabled:opacity-20 disabled:bg-opacity-100 pointer-events-none relative mt-6 bg-white text-offBlack hover:opacity-50">
                  View Collection
                </button>
              </div>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Main
