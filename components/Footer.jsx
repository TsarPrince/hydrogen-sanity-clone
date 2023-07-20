import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="-mt-overlap" role="contentinfo">
      {/* Part 1 */}
      <div className="align-start relative overflow-hidden rounded-xl bg-peach px-4 py-8 md:px-8 md:py-10">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="pb-4">
            <img className="h-6" src="/wilen.webp" alt="" />
            {/* <svg
              width="65"
              height="58"
              viewBox="0 0 65 58"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-offBlack"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M60 16.2024L42.2484 25.7757H59.8314V30H5.20153V25.7757H23.0457C23.0469 25.7673 23.0481 25.7589 23.0494 25.7506L5 16.2115L7.19911 12.5285L24.7298 21.7935C24.9427 21.5154 25.1734 21.248 25.4214 20.993L15.3417 4.92989L19.2083 2.78233L29.1635 18.647C29.5117 18.529 29.8675 18.4304 30.2291 18.3517L30.2964 0L34.7865 0.0145666L34.719 18.413C35.1129 18.5101 35.4993 18.6312 35.8756 18.7752L45.768 2.79322L49.6482 4.919L39.5246 21.2745C39.7448 21.5212 39.9498 21.7782 40.1388 22.0442L57.767 12.5375L60 16.2024Z"
                fill="#3A3E3E"
              ></path>
              <path
                className="fill-offBlack"
                d="M0.53022 55L6.16222 39.6H9.33022L14.9622 55H11.9702L10.7382 51.436H4.73222L3.47822 55H0.53022ZM5.50222 49.236H9.96822L7.72422 42.834L5.50222 49.236ZM19.146 55V39.6H21.962V45.826L27.66 39.6H31.136L25.46 45.716L31.29 55H27.836L23.436 47.872L21.962 49.478V55H19.146ZM39.8843 55L34.2523 39.6H37.2663L41.6223 52.118L46.0003 39.6H48.9703L43.3383 55H39.8843ZM50.056 55L55.688 39.6H58.856L64.488 55H61.496L60.264 51.436H54.258L53.004 55H50.056ZM55.028 49.236H59.494L57.25 42.834L55.028 49.236Z"
                fill="#2B2E2E"
              ></path>
            </svg> */}
          </div>
          <div className="my-16 w-full max-w-[22rem] columns-2 gap-x-8 self-start text-md font-bold md:my-0 md:max-w-[27rem]">
            <div className="mb-6">
              <Link className="linkTextNavigation" href="/">
                Buy
              </Link>
            </div>
            <div className="mb-6">
              <Link className="linkTextNavigation" href="/">
                Sell
              </Link>
            </div>
            <div className="mb-6">
              <a
                className="linkTextNavigation"
                href="https://www.revisor.mn.gov/statutes/cite/82.67"
                target="_blank"
                rel="noreferrer"
              >
                Agency
              </a>
            </div>
            <div className="mb-6">
              <a className="linkTextNavigation" href="tel:6124009000">
                612-400-9000
              </a>
            </div>
            <div className="mb-6">
              <a
                className="linkTextNavigation"
                href="https://www.instagram.com/mikewilen"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
            <div className="mb-6">
              <a
                className="linkTextNavigation"
                href="https://www.facebook.com/mikewilenrealestate"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </div>
            <div className="mb-6">
              <a
                className="linkTextNavigation"
                href="https://www.linkedin.com/company/mikewilen"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </div>
            <div className="mb-6">
              <a className="linkTextNavigation" href="mailto:M@1MW.com">
                M@1MW.COM
              </a>
            </div>
          </div>
        </div>
        <div className="portableText text-xs text-darkGray">
          <p className="first:mt-0 last:mb-0 relative my-4 leading-paragraph">
            Information is based on information submitted to NorthstarMLS and
            the MLS GRID.
            <br /> All data is obtained from various sources and may not have
            been verified by broker or MLS GRID.
            <br />
          </p>
        </div>
      </div>

      {/* Part 2 */}
      <div className="-my-overlap bg-[#121923] pt-overlap text-white">
        <div className="mx-auto max-w-[47rem] px-4 py-12 text-center text-md leading-caption md:px-8">
          <div>
            Supplied Open House Information is subject to change without notice.
            All information should be independently reviewed and verified for
            accuracy.
          </div>

          <Link
            className="mt-8 inline-flex items-center justify-center gap-1 text-lg text-[#508EEA] hover:opacity-70"
            href="/"
          >
            <span>Learn more</span>
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5H10"
                stroke="#508EEA"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M6.14258 1L9.99972 5L6.14258 9"
                stroke="#508EEA"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
