import Link from 'next/link'
import React from 'react'
import ContactForm from './ContactForm'

const Footer = () => {
  return (
    <footer className="-mt-overlap" role="contentinfo">
      <div className="align-start relative overflow-hidden xl:space-x-10 rounded-xl bg-peach px-4 py-8 md:px-8 md:py-10">
        <div className="w-full max-w-3xl mx-auto text-center mt-10 sm:mt-20 xl:mt-0">
          <h2 className="whitespace-pre-line text-3xl 2xl:text-[80px]">
            Minnesota Real Estate
          </h2>
          <div className="mt-5 leading-paragraph">
            <p>
              We take pride in presenting an extensive and diverse collection of
              real estate listings, catering to every taste and preference.
              Whether you&apos;re seeking a cozy loft, luxurious mansion, serene
              countryside retreat, or bustling commercial space, we have it all
              under one roof.
            </p>{' '}
            <p>
              We take pride in presenting an extensive and diverse collection of
              real estate listings, catering to every taste and preference.
              Whether you&apos;re seeking a cozy loft, luxurious mansion, serene
              countryside retreat, or bustling commercial space, we have it all
              under one roof.
            </p>
          </div>
        </div>
      </div>

      {/* Part 2 */}
      <div className="-my-overlap bg-[#121923] pt-overlap text-white">
        <div className="flex flex-wrap lg:flex-nowrap items-start pt-12 px-4 md:px-8 justify-between ">
          <div className="w-full mb-10 lg:mb-0">
            <ContactForm />
          </div>
          <div className="flex items-start space-x-5 sm:space-x-10 lg:space-x-20">
            <div className="">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                Product
              </h3>
              <ul>
                <li className="mb-3">
                  <Link
                    className="linkTextNavigation font-medium text-[16px] sm:text-[18px]"
                    href="/buy"
                  >
                    BUY
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="linkTextNavigation font-medium text-[16px] sm:text-[18px]"
                    href="/sell"
                  >
                    SELL
                  </Link>
                </li>
              </ul>
            </div>

            <div className="">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                {' '}
                Contact
              </h3>
              <ul>
                <li className="mb-3">
                  <a
                    className="linkTextNavigation font-medium text-[16px] sm:text-[18px]"
                    href="tel:6124009000"
                  >
                    612-400-9000
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="linkTextNavigation font-medium text-[16px] sm:text-[18px]"
                    href="mailto:6124009000"
                  >
                    m@1mw.com
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="linkTextNavigation font-medium text-[16px] sm:text-[18px]"
                    href="https://www.instagram.com/mikewilen"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="linkTextNavigation font-medium text-[16px] sm:text-[18px]"
                    href="https://www.facebook.com/mikewilenrealestate"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="linkTextNavigation font-medium text-[16px] sm:text-[18px]"
                    href="https://www.linkedin.com/company/mikewilen"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Social</h3>
              <ul>
                <li className="mb-3">
                  <a
                    className="linkTextNavigation font-medium text-[16px] sm:text-[18px]"
                    href="https://www.instagram.com/mikewilen"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="linkTextNavigation font-medium text-[16px] sm:text-[18px]"
                    href="https://www.facebook.com/mikewilenrealestate"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="linkTextNavigation font-medium text-[16px] sm:text-[18px]"
                    href="https://www.linkedin.com/company/mikewilen"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t mx-4 lg:mx-20 border-b-white mt-8 sm:mt-12">
          <div className="mx-auto max-w-[66rem] sm:px-4 py-8 sm:py-12 text-center text-md leading-caption md:px-8">
            <p>
              <Link href="/sell" className="linkTextNavigation">
                Sell.
              </Link>{' '}
              <Link className="linkTextNavigation" href="/buy">
                Buy.
              </Link>{' '}
              <Link className="linkTextNavigation" href="/about">
                About.
              </Link>{' '}
              <Link className="linkTextNavigation" href="/terms-privacy">
                Agency Relationships Terms & Privacy Information
              </Link>{' '}
              on this website is based on data submitted to NorthstarMLS and MLS
              GRID. The data is obtained from various sources and may not have
              been verified by the broker or MLS GRID. We recommend
              independently reviewing and verifying all information for
              accuracy. The availability of properties may vary, and some
              listings may be excluded. By searching Northstar MLS listings, you
              agree to the NorthstarMLS End User License Agreement.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
