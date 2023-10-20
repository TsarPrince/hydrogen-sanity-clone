import Link from 'next/link'
import React from 'react'
import ContactForm from './ContactForm'
import FooterLinks from './FooterLinks'

const Footer = () => {
  return (
    <footer className="-mt-overlap" role="contentinfo">
      <div className="align-start relative overflow-hidden xl:space-x-10 rounded-xl bg-peach px-4 py-8 md:px-12 md:py-10">
        <div className="w-full mx-auto text-center pb-8 py-6">
          <h2 className="whitespace-pre-line text-[36px] sm:text-3xl lg:text-4xl 2xl:text-[80px] font-bold uppercase">
            EXPERIENCE THE DIFFERENCE
          </h2>
          <div className="mt-5 xl:mt-8 leading-paragraph max-w-[970px] mx-auto">
            <p className="font-bold text-xl">
              We invite you to experience The Wilen Selling Method for precisely
              pairing your property with the most qualified audience. Benefit
              from unrivaled expertise, as we work purposefully on your behalf.
              More specialized resources, more value, and more compelling
              results.
            </p>{' '}
          </div>
        </div>
      </div>

      {/* Part 2 */}
      <div className="-my-overlap bg-[#121923] pt-overlap text-white">
        <div className="pt-8 sm:pt-12 px-4 xl:px-8 max-w-[1240px] mx-auto text-center">
          {/* <h2 className="text-[28px] sm:text-2xl font-semibold uppercase w-full mx-auto text-center mb-5">
            SELL WITH US
          </h2> */}
          <p className="text-white font-semibold text-[24px] xl:text-[52px] leading-[130%]">
            LET’S CONNECT
          </p>

          <ContactForm />
        </div>

        <div className="w-full sm:mx-4 py-8 flex flex-col items-center space-y-8 justify-center">
          <FooterLinks />
        </div>

        <img
          src="/wilen-real-estate-logo.png"
          className="max-w-[90%] sm:max-w-[450px] mt-8 mx-auto px-3"
          alt="wilen logo"
        />
        <div className="mx-4 lg:mx-20 py-8 sm:py-12">
          <div className="mx-auto max-w-[66rem] sm:px-4 text-center text-md leading-caption md:px-8">
            <p>
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
