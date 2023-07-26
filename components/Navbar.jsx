import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import Sidebar from './Sidebar'

const Navbar = ({ blendIntoColor = 'bg-white' }) => {
  const router = useRouter()
  const [trigger, setTrigger] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  const [q, setQ] = useState('')

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        setTrigger(true)
      } else {
        setTrigger(false)
      }
    })
  }, [])

  return (
    <>
      <Sidebar dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />

      <header
        className="align-center fixed top-0 z-40 flex h-header-sm w-full px-4 md:px-8 lg:h-header-lg"
        role="banner"
      >
        <div className="absolute inset-0">
          <div
            className={`${
              trigger ? 'bg-white' : blendIntoColor
            } absolute inset-0 bg-opacity-90 backdrop-blur-lg backdrop-filter duration-500 opacity-100`}
          ></div>

          {/* Main logo */}
          <Link href="/">
            <div className="absolute bottom-0 left-1/2 top-0 flex w-[400px] -translate-x-1/2 items-center lg:w-[400px]">
              <p
                className={`text-lg lg:text-xl font-bold absolute top-4 lg:top-6 left-1/2 -translate-x-1/2 transition-all duration-500 ${
                  trigger ? '!top-1/2 -translate-y-1/2' : ''
                }`}
              >
                WILEN REALTY
              </p>
              <p
                className={`${
                  trigger ? 'opacity-0' : ''
                }  lg:font-bold lg:text-md text-darkGray absolute bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-500`}
              >
                COLDWELL BANKER
              </p>
            </div>
          </Link>
        </div>
        {/* Mobile - Hamburger menu */}
        <button
          className="absolute left-0 flex h-header-sm items-center p-4 text-sm font-bold duration-200 hover:opacity-50 md:ml-4 lg:hidden"
          onClick={() => {
            setDialogOpen(!dialogOpen)
          }}
        >
          <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9H23"
              stroke="#2B2E2E"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            ></path>
            <path
              d="M1 1H23"
              stroke="#2B2E2E"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            ></path>
            <path
              d="M1 17H23"
              stroke="#2B2E2E"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <nav className="relative hidden items-stretch justify-start gap-6 text-sm font-bold lg:flex">
          <div className="relative flex items-center">
            <button
              className="-mx-3 flex h-[2.4rem] items-center rounded-sm bg-darkGray bg-opacity-0 py-2 pl-2 pr-3 text-sm duration-150 hover:bg-opacity-10"
              onClick={() => {
                setDialogOpen(!dialogOpen)
              }}
            >
              <svg
                className="mr-[0.15rem] w-6"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <rect
                  className="stroke-offBlack"
                  x="5"
                  y="14"
                  width="6"
                  height="6"
                  strokeWidth="1.2"
                ></rect>
                <rect
                  className="stroke-offBlack"
                  x="14"
                  y="5"
                  width="6"
                  height="6"
                  strokeWidth="1.2"
                ></rect>
                <circle
                  className="stroke-offBlack"
                  cx="8"
                  cy="8"
                  r="3"
                  strokeWidth="1.2"
                ></circle>
                <circle
                  className="stroke-offBlack"
                  cx="17"
                  cy="17"
                  r="3"
                  strokeWidth="1.2"
                ></circle>
              </svg>
              <div className="inline-flex items-center font-bold">
                Properties
              </div>
            </button>
            <div
              hidden=""
              // style="display:none"
            >
              <div
              // style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"
              ></div>
            </div>
          </div>
          <div className="flex items-center">
            <Link className="linkTextNavigation" href="/buy">
              Buy
            </Link>
          </div>
          <div className="flex items-center">
            <Link className="linkTextNavigation" href="/">
              Sell
            </Link>
          </div>
          <div className="flex items-center">
            <Link className="linkTextNavigation" href="/">
              About
            </Link>
          </div>
        </nav>
        <div className="absolute right-0 flex h-full items-center md:mr-4">
          <div className="hidden lg:block">
            <div className="relative inline-flex">
              {/* Search bar */}
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  router.push({
                    pathname: '/search',
                    query: { q },
                  })
                }}
              >
                <div className="flex items-center xl:w-[27rem] w-[18rem] text-offBlack border hover:border-darkGray/50 duration-200 pr-2 mr-2">
                  <input
                    placeholder="City, Neighborhood, Address, School, Zip, or MLS#"
                    required
                    type="text"
                    className="bg-transparent flex flex-1 border-none focus:ring-0"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                  />
                  <button>
                    <svg
                      className="w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <Link
            className="hidden h-[2.4rem] items-center rounded-sm bg-darkGray bg-opacity-0 p-2 lg:flex hover:bg-opacity-10"
            href="/"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 10.5C3 11 1.5 12 1.5 15.5H15.5C15.5 12 14.3416 11.1708 13 10.5C12 10 10 10 10 8.5C10 7 11 6.25 11 4.25C11 2.25 10 1.25 8.5 1.25C7 1.25 6 2.25 6 4.25C6 6.25 7 7 7 8.5C7 10 5 10 4 10.5Z"
                stroke="#101112"
                strokeWidth="1.2"
              ></path>
            </svg>
          </Link>
          <div className="ml-2 mr-4 flex h-full items-center justify-center py-4">
            <button
              className="aspect-square w-[2.375rem] place-content-center rounded-full border border-offBlack fill-offBlack text-sm font-bold duration-200 hover:border-opacity-50"
              type="button"
              aria-expanded="true"
              aria-controls="cart"
            >
              0
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
