import Link from 'next/link'
import React from 'react'

import Searchbar from './Searchbar'

const Sidebar = ({ dialogOpen, setDialogOpen }) => {
  return (
    <div className="right-0 transition-all">
      <div className="relative z-50" role="dialog" aria-modal="true">
        {/* Overlay */}
        <div
          aria-hidden="true"
          className={`fixed inset-0 bg-black bg-opacity-20 transition duration-500 ${
            dialogOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setDialogOpen(!dialogOpen)}
        ></div>
        {/* Actual dialog box starts from here */}
        <div
          className={`fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col overflow-y-auto rounded-r-lg bg-white md:bottom-auto md:right-auto md:block md:w-[490px] transition duration-500 ${
            dialogOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          // style=""
        >
          <div className="pb-10">
            <header className="flex h-header-sm items-center justify-between px-8 lg:h-header-lg">
              <div>
                {' '}
                <h2 className="text-[22px] xl:text-xl font-bold">
                  Explore & <br /> Discover Real Estate
                </h2>
              </div>
              {/* Close button */}
              <button type="button" onClick={() => setDialogOpen(!dialogOpen)}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.2803 4.71967C19.5732 5.01256 19.5732 5.48744 19.2803 5.78033L5.78033 19.2803C5.48744 19.5732 5.01256 19.5732 4.71967 19.2803C4.42678 18.9874 4.42678 18.5126 4.71967 18.2197L18.2197 4.71967C18.5126 4.42678 18.9874 4.42678 19.2803 4.71967Z"
                    fill="#2B2E2E"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.71967 4.71967C5.01256 4.42678 5.48744 4.42678 5.78033 4.71967L19.2803 18.2197C19.5732 18.5126 19.5732 18.9874 19.2803 19.2803C18.9874 19.5732 18.5126 19.5732 18.2197 19.2803L4.71967 5.78033C4.42678 5.48744 4.42678 5.01256 4.71967 4.71967Z"
                    fill="#2B2E2E"
                  ></path>
                </svg>
              </button>
            </header>
            <div className="px-8 pb-10 lg:hidden">
              <Searchbar setDialogOpen={setDialogOpen} />
            </div>
            <div className="px-8">
              <div className="relative mt-3 grid grid-cols-2 gap-2">
                <Link href={'/buy'} onClick={() => setDialogOpen(!dialogOpen)}>
                  <div
                    className="group relative flex aspect-[4/3] items-center justify-center rounded bg-lightGray transition-[border-radius] duration-500 ease-out hover:rounded-xl"
                    // style={{ background: 'rgb(207, 232, 229)' }}
                    style={{ background: '#c3e2e6' }}
                  >
                    <div
                      className="absolute bottom-2 left-2 right-1 top-2 duration-1000 ease-out group-hover:scale-[1.03]"
                      style={{
                        background: '#c3e2e6',
                        WebkitMask:
                          'url(/masks/3.svg) center center / contain no-repeat',
                      }}
                    ></div>
                    <div className="relative text-center text-md sm:text-lg font-bold group-hover:underline ">
                      Buy
                    </div>
                  </div>
                </Link>
                <Link href="/about" onClick={() => setDialogOpen(!dialogOpen)}>
                  <div
                    className="group relative flex aspect-[4/3] items-center justify-center rounded bg-lightGray transition-[border-radius] duration-500 ease-out hover:rounded-xl"
                    // style={{ background: 'rgb(255, 229, 240)' }}
                    style={{ background: '#cfccdf' }}
                  >
                    <div
                      className="absolute bottom-2 left-2 right-1 top-2 duration-1000 ease-out group-hover:scale-[1.03]"
                      style={{
                        background: '#cfccdf',
                        WebkitMask:
                          'url(/masks/4.svg) center center / contain no-repeat',
                      }}
                    ></div>
                    <div className="relative text-center text-md sm:text-lg font-bold group-hover:underline">
                      Sell
                    </div>
                  </div>
                </Link>
                <Link
                  href="/Active"
                  onClick={() => setDialogOpen(!setDialogOpen)}
                >
                  <div
                    className="group relative flex aspect-[4/3] items-center justify-center rounded bg-lightGray transition-[border-radius] duration-500 ease-out hover:rounded-xl"
                    // style={{ background: 'rgb(255, 238, 211)' }}
                    style={{ background: '#fff2e1' }}
                  >
                    <div
                      className="absolute bottom-2 left-2 right-1 top-2 duration-1000 ease-out group-hover:scale-[1.03]"
                      style={{
                        background: '#fff2e1',
                        WebkitMask:
                          'url(/masks/2.svg) center center / contain no-repeat',
                      }}
                    ></div>
                    <div className="relative text-center text-md sm:text-lg font-bold group-hover:underline ">
                      Active
                    </div>
                  </div>
                </Link>
                <Link
                  href="/Coming Soon"
                  onClick={() => setDialogOpen(!dialogOpen)}
                >
                  <div
                    className="group relative flex aspect-[4/3] items-center justify-center rounded bg-lightGray transition-[border-radius] duration-500 ease-out hover:rounded-xl"
                    // style={{ background: 'rgb(227, 216, 255)' }}
                    style={{ background: '#f7dae5' }}
                  >
                    <div
                      className="absolute bottom-2 left-2 right-1 top-2 duration-1000 ease-out group-hover:scale-[1.03]"
                      style={{
                        background: '#f7dae5',
                        WebkitMask:
                          'url(/masks/1.svg) center center / contain no-repeat',
                      }}
                    ></div>
                    <div className="relative text-center text-md sm:text-lg font-bold group-hover:underline ">
                      Coming <br />
                      Soon
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mt-8 px-8">
              {/* <ul className="mt-3 grid grid-cols-1 gap-2">
                <li>
                  <a href="/products/punkt-coaster">
                    <div
                      className="group flex h-[108px] gap-4 rounded-md border border-lightGray bg-white p-3 text-sm duration-500 ease-out hover:rounded-lg hover:border-darkGray"
                      role="row"
                    >
                      <div role="cell" className="relative flex-shrink-0">
                        <div className="relative h-full w-[110px] overflow-hidden rounded-sm bg-lightGray duration-500 ease-out group-hover:rounded-md">
                          <img
                            alt="PUNKT Coaster - White"
                            decoding="async"
                            height="110"
                            loading="lazy"
                            src="https://cdn.shopify.com/s/files/1/0639/3285/8619/products/B_W_5.jpg?v=1654596813&amp;width=110&amp;height=110&amp;crop=center"
                            srcSet="https://cdn.shopify.com/s/files/1/0639/3285/8619/products/B_W_5.jpg?v=1654596813&amp;width=110&amp;height=110&amp;crop=center 1x, https://cdn.shopify.com/s/files/1/0639/3285/8619/products/B_W_5.jpg?v=1654596813&amp;width=220&amp;height=220&amp;crop=center 2x, https://cdn.shopify.com/s/files/1/0639/3285/8619/products/B_W_5.jpg?v=1654596813&amp;width=330&amp;height=330&amp;crop=center 3x"
                            width="110"
                            className="absolute inset-0 h-full w-full object-cover"
                            // style="aspect-ratio: 3400 / 3400;"
                          />
                          <div className="absolute left-2 top-2">
                            <div className="flex place-content-center rounded-sm bg-white px-1.5 py-1 leading-none text-xs border-red text-red">
                              Sale
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="overflow-hidden">
                        <div className="mr-3 space-y-1">
                          <div className="truncate font-bold group-hover:underline">
                            PUNKT Coaster
                          </div>
                          <div className="truncate text-darkGray">
                            Lucy Holdberg
                          </div>
                          <div className="truncate text-darkGray">3 Colors</div>
                        </div>
                        <div className="mt-3 flex font-bold ">
                          <span className="text-darkGray">
                            <div className="mr-2.5 line-through decoration-red">
                              $20.00
                            </div>
                          </span>
                          <div>$15.00</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/products/billi-coaster-set">
                    <div
                      className="group flex h-[108px] gap-4 rounded-md border border-lightGray bg-white p-3 text-sm duration-500 ease-out hover:rounded-lg hover:border-darkGray"
                      role="row"
                    >
                      <div role="cell" className="relative flex-shrink-0">
                        <div className="relative h-full w-[110px] overflow-hidden rounded-sm bg-lightGray duration-500 ease-out group-hover:rounded-md">
                          <img
                            alt="BILLI Coaster Set"
                            decoding="async"
                            height="110"
                            loading="lazy"
                            src="https://cdn.shopify.com/s/files/1/0639/3285/8619/products/Group_coasters.jpg?v=1654595611&amp;width=110&amp;height=110&amp;crop=center"
                            srcSet="https://cdn.shopify.com/s/files/1/0639/3285/8619/products/Group_coasters.jpg?v=1654595611&amp;width=110&amp;height=110&amp;crop=center 1x, https://cdn.shopify.com/s/files/1/0639/3285/8619/products/Group_coasters.jpg?v=1654595611&amp;width=220&amp;height=220&amp;crop=center 2x, https://cdn.shopify.com/s/files/1/0639/3285/8619/products/Group_coasters.jpg?v=1654595611&amp;width=330&amp;height=330&amp;crop=center 3x"
                            width="110"
                            className="absolute inset-0 h-full w-full object-cover"
                            // style="aspect-ratio: 1458 / 1458;"
                          />
                          <div className="absolute left-2 top-2"></div>
                        </div>
                      </div>
                      <div className="overflow-hidden">
                        <div className="mr-3 space-y-1">
                          <div className="truncate font-bold group-hover:underline">
                            BILLI Coaster Set
                          </div>
                          <div className="truncate text-darkGray">
                            Lucy Holdberg
                          </div>
                        </div>
                        <div className="mt-3 flex font-bold ">
                          <div>$75.00</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/products/bu-arch-coaster">
                    <div
                      className="group flex h-[108px] gap-4 rounded-md border border-lightGray bg-white p-3 text-sm duration-500 ease-out hover:rounded-lg hover:border-darkGray"
                      role="row"
                    >
                      <div role="cell" className="relative flex-shrink-0">
                        <div className="relative h-full w-[110px] overflow-hidden rounded-sm bg-lightGray duration-500 ease-out group-hover:rounded-md">
                          <img
                            alt="BU arch coaster - White"
                            decoding="async"
                            height="110"
                            loading="lazy"
                            src="https://cdn.shopify.com/s/files/1/0639/3285/8619/products/White_arch.jpg?v=1654595393&amp;width=110&amp;height=110&amp;crop=center"
                            srcSet="https://cdn.shopify.com/s/files/1/0639/3285/8619/products/White_arch.jpg?v=1654595393&amp;width=110&amp;height=110&amp;crop=center 1x, https://cdn.shopify.com/s/files/1/0639/3285/8619/products/White_arch.jpg?v=1654595393&amp;width=220&amp;height=220&amp;crop=center 2x, https://cdn.shopify.com/s/files/1/0639/3285/8619/products/White_arch.jpg?v=1654595393&amp;width=330&amp;height=330&amp;crop=center 3x"
                            width="110"
                            className="absolute inset-0 h-full w-full object-cover"
                            // style="aspect-ratio: 4026 / 4026;"
                          />
                          <div className="absolute left-2 top-2"></div>
                        </div>
                      </div>
                      <div className="overflow-hidden">
                        <div className="mr-3 space-y-1">
                          <div className="truncate font-bold group-hover:underline">
                            BU arch coaster
                          </div>
                          <div className="truncate text-darkGray">
                            Harris O&apos;Sullivan
                          </div>
                          <div className="truncate text-darkGray">2 Colors</div>
                        </div>
                        <div className="mt-3 flex font-bold ">
                          <div>$15.00</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/products/blomst-a5-riso-print">
                    <div
                      className="group flex h-[108px] gap-4 rounded-md border border-lightGray bg-white p-3 text-sm duration-500 ease-out hover:rounded-lg hover:border-darkGray"
                      role="row"
                    >
                      <div role="cell" className="relative flex-shrink-0">
                        <div className="relative h-full w-[110px] overflow-hidden rounded-sm bg-lightGray duration-500 ease-out group-hover:rounded-md">
                          <img
                            alt="BLOMST A5 Riso Print"
                            decoding="async"
                            height="110"
                            loading="lazy"
                            src="https://cdn.shopify.com/s/files/1/0639/3285/8619/products/BLOMST_print.jpg?v=1654595228&amp;width=110&amp;height=110&amp;crop=center"
                            srcSet="https://cdn.shopify.com/s/files/1/0639/3285/8619/products/BLOMST_print.jpg?v=1654595228&amp;width=110&amp;height=110&amp;crop=center 1x, https://cdn.shopify.com/s/files/1/0639/3285/8619/products/BLOMST_print.jpg?v=1654595228&amp;width=220&amp;height=220&amp;crop=center 2x, https://cdn.shopify.com/s/files/1/0639/3285/8619/products/BLOMST_print.jpg?v=1654595228&amp;width=330&amp;height=330&amp;crop=center 3x"
                            width="110"
                            className="absolute inset-0 h-full w-full object-cover"
                            // style="aspect-ratio: 3670 / 3670;"
                          />
                          <div className="absolute left-2 top-2">
                            <div className="flex place-content-center rounded-sm bg-white px-1.5 py-1 leading-none text-xs border-red text-red">
                              Sale
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="overflow-hidden">
                        <div className="mr-3 space-y-1">
                          <div className="truncate font-bold group-hover:underline">
                            BLOMST A5 Riso Print
                          </div>
                          <div className="truncate text-darkGray">Julia Xu</div>
                        </div>
                        <div className="mt-3 flex font-bold ">
                          <span className="text-darkGray">
                            <div className="mr-2.5 line-through decoration-red">
                              $20.00
                            </div>
                          </span>
                          <div>$15.00</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
