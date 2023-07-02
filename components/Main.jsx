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
              <a
                className="absolute left-[50%] top-[50%] flex h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 animate-pulse items-center justify-center rounded-full bg-offBlack duration-300 ease-out hover:scale-125 hover:animate-none"
                // style="left:37.95%;top:50.77%"
                href="/products/ost-candlestick-holder-pair"
              >
                <div className="relative h-[4px] w-[4px] rounded-full bg-white"></div>
              </a>
              <a
                className="absolute left-[50%] top-[50%] flex h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 animate-pulse items-center justify-center rounded-full bg-offBlack duration-300 ease-out hover:scale-125 hover:animate-none"
                // style="left:50.38%;top:84.64%"
                href="/products/trafik-tealight-holder"
              >
                <div className="relative h-[4px] w-[4px] rounded-full bg-white"></div>
              </a>
              <a
                className="absolute left-[50%] top-[50%] flex h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 animate-pulse items-center justify-center rounded-full bg-offBlack duration-300 ease-out hover:scale-125 hover:animate-none"
                // style="left:71.11%;top:72.48%"
                href="/products/lekki-candle-holder"
              >
                <div className="relative h-[4px] w-[4px] rounded-full bg-white"></div>
              </a>
              <a
                className="absolute left-[50%] top-[50%] flex h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 animate-pulse items-center justify-center rounded-full bg-offBlack duration-300 ease-out hover:scale-125 hover:animate-none"
                // style="left:39.15%;top:21.88%"
                href="/products/ulla-pot"
              >
                <div className="relative h-[4px] w-[4px] rounded-full bg-white"></div>
              </a>
            </div>
          </div>
        </li>
        <li className="flex overflow-hidden items-start justify-end mt-0 md:col-span-1">
          <div className="w-full md:w-full">
            <div className="group relative">
              <div className="aspect-square relative flex items-center justify-center overflow-hidden rounded bg-lightGray object-cover transition-[border-radius] duration-500 ease-out hover:rounded-xl">
                <a
                  className="absolute left-0 top-0 h-full w-full"
                  href="/products/soap-dish"
                >
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
                  <div className="absolute left-4 top-4">
                    <div className="flex place-content-center rounded-sm bg-white px-1.5 py-1 leading-none text-sm border-red text-red">
                      Sale
                    </div>
                  </div>
                </a>
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
                      value='[{"merchandiseId":"gid://shopify/ProductVariant/43068621422843","quantity":1}]'
                    />
                    <input
                      type="hidden"
                      name="analytics"
                      value='{"products":[{"productGid":"gid://shopify/Product/7696133062907","variantGid":"gid://shopify/ProductVariant/43068621422843","name":"AUTOGRAF Soap Dish","variantName":"Blue","brand":"Lucy Holdberg","price":"25.5","quantity":1}],"totalValue":25.5}'
                    />
                    <button className="flex h-[2.5rem] items-center justify-center overflow-hidden rounded-full p-4 text-sm font-bold duration-200 ease-out disabled:opacity-20 disabled:bg-opacity-100 bg-offBlack hover:opacity-80 text-white">
                      Quick add
                    </button>
                  </form>
                </div>
              </div>
              <div className="mt-3 text-md">
                <div className="space-y-1">
                  <a
                    className="font-bold hover:underline"
                    href="/products/soap-dish"
                  >
                    Residential-Single Family
                  </a>
                  <div className="text-darkGray">Minneapolis</div>
                  <div className="text-darkGray">24 photos</div>
                </div>
                <div className="mt-3 flex font-bold">
                  <div>$249500.50</div>
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
                  Residential-Single Family
                </div>
                <div className="mt-4 leading-paragraph">
                  Great Location!! This Nevis Country Home features 3 bedrooms,
                  3 baths, 3 bonus rooms, kitchen features granite countertops
                  and stainless steel appliances. Large living room and family
                  room. Master bedroom on-suite features a walk in closet and
                  large bathroom with walk in shower. Home also features 10
                  acres of land, a detached 3 car garage, a 28 x 40 barn with
                  two additional lean-to’s that are 14 x 40. Located just
                  minutes from Downtown Nevis, The Heartland Trail, the Paul
                  Bunyan State Forest and over 50 lakes within a 10 mile radius.
                  Most recent additions in 2005 and 2008. Call for an
                  appointment today!
                </div>
                <div className="mt-4">
                  <a
                    className="font-bold underline hover:no-underline"
                    href="/pages/process"
                  >
                    Our process
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="flex overflow-hidden items-center justify-start mt-0 md:col-span-1">
          <div className="w-full md:w-[55%]">
            <div className="group relative">
              <div className="aspect-square relative flex items-center justify-center overflow-hidden rounded bg-lightGray object-cover transition-[border-radius] duration-500 ease-out hover:rounded-xl">
                <a
                  className="absolute left-0 top-0 h-full w-full"
                  href="/products/ulla-pot"
                >
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
                      Sale
                    </div>
                  </div>
                </a>
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
                      value='[{"merchandiseId":"gid://shopify/ProductVariant/43008939819259","quantity":1}]'
                    />
                    <input
                      type="hidden"
                      name="analytics"
                      value='{"products":[{"productGid":"gid://shopify/Product/7694076510459","variantGid":"gid://shopify/ProductVariant/43008939819259","name":"LULU Mini Pot","variantName":"Light Blue","brand":"Lucy Holdberg","price":"25.0","quantity":1}],"totalValue":25}'
                    />
                    <button className="flex h-[2.5rem] items-center justify-center overflow-hidden rounded-full p-4 text-sm font-bold duration-200 ease-out disabled:opacity-20 disabled:bg-opacity-100 bg-offBlack hover:opacity-80 text-white">
                      Quick add
                    </button>
                  </form>
                </div>
              </div>
              <div className="mt-3 text-md">
                <div className="space-y-1">
                  <a
                    className="font-bold hover:underline"
                    href="/products/ulla-pot"
                  >
                    NST7220342 - Single Family Residence
                  </a>
                  <div className="text-darkGray">Fulda</div>
                </div>
                <div className="mt-3 flex font-bold">
                  <div>$159900</div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="flex overflow-hidden items-center justify-center md:col-span-1">
          <div className="w-full">
            <a
              className="group relative flex aspect-[4/3] h-full w-full flex-col items-center justify-center md:aspect-square"
              href="/collections/living"
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
                  Shop collection
                </button>
              </div>
            </a>
          </div>
        </li>
        <li className="flex overflow-hidden items-start justify-end md:mt-[5vw] md:col-span-1">
          <div className="w-full md:w-[65%]">
            <div className="group relative">
              <div className="aspect-square relative flex items-center justify-center overflow-hidden rounded bg-lightGray object-cover transition-[border-radius] duration-500 ease-out hover:rounded-xl">
                <a
                  className="absolute left-0 top-0 h-full w-full"
                  href="/products/blomst-a5-riso-print"
                >
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
                      Sale
                    </div>
                  </div>
                </a>
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
                    <button className="flex h-[2.5rem] items-center justify-center overflow-hidden rounded-full p-4 text-sm font-bold duration-200 ease-out disabled:opacity-20 disabled:bg-opacity-100 bg-offBlack hover:opacity-80 text-white">
                      Quick add
                    </button>
                  </form>
                </div>
              </div>
              <div className="mt-3 text-md">
                <div className="space-y-1">
                  <a
                    className="font-bold hover:underline"
                    href="/products/blomst-a5-riso-print"
                  >
                    NST7225076 - Spacious home office
                  </a>
                  <div className="text-darkGray">Burnsville</div>
                </div>
                <div className="mt-3 flex font-bold">
                  <div>$445000</div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="flex overflow-hidden items-center justify-center md:col-span-1">
          <div className="w-full">
            <a
              className="group relative flex aspect-[4/3] h-full w-full flex-col items-center justify-center md:aspect-square"
              href="/collections/everything"
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
                  All Products
                </div>
                <button className="flex h-[2.5rem] items-center justify-center overflow-hidden rounded-full p-4 text-sm font-bold duration-200 ease-out disabled:opacity-20 disabled:bg-opacity-100 pointer-events-none relative mt-6 bg-white text-offBlack hover:opacity-50">
                  Shop collection
                </button>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Main
