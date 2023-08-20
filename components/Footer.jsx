import Link from 'next/link'
import React from 'react'
import ContactForm from './ContactForm'
import FooterLinks from './FooterLinks'

const Footer = () => {
  return (
    <footer className="-mt-overlap" role="contentinfo">
      <div className="align-start relative overflow-hidden xl:space-x-10 rounded-xl bg-peach px-4 py-8 md:px-12 md:py-10">
        <div className="w-full max-w-3xl mx-auto text-center">
          <h2 className="whitespace-pre-line text-[36px] sm:text-3xl lg:text-4xl 2xl:text-[100px] font-medium">
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
        <div className="flex flex-wrap lg:flex-nowrap items-start pt-12 px-4 xl:px-20 justify-between ">
          <div className="w-1/2 lg:w-full">
            <div className="text-center max-w-xs">
              <img
                src="/wilen-logo.webp"
                className="max-w-[120px] invert mx-auto mb-6 sm:mb-8"
                alt="wilen logo"
              />
              <ul className="text-center mb-6 sm:mb-8">
                <li className="mb-3">
                  <a
                    className="linkTextNavigation font-semibold uppercase text-[20px] sm:text-[28px]"
                    href="tel:6124009000"
                  >
                    612-400-9000
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="linkTextNavigation font-semibold uppercase text-[20px] sm:text-[28px]"
                    href="mailto:info@1mw.com"
                  >
                    info@1mw.com
                  </a>
                </li>
              </ul>

              <img
                className="mx-auto max-w-[140px] sm:max-w-full"
                src="/coldwell-banker.webp"
                alt="coldwell-banker"
              />
            </div>
          </div>
          <div className="w-1/2 flex lg:hidden justify-end">
            <FooterLinks />
          </div>
          <div className="w-full mt-12 lg:mt-0">
            <ContactForm />
          </div>
          <div className="w-full hidden lg:flex justify-end">
            <FooterLinks />
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
