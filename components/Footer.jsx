import Link from 'next/link'
import React from 'react'
import ContactForm from './ContactForm'
import FooterLinks from './FooterLinks'

const Footer = () => {
  return (
    <footer className="-mt-overlap" role="contentinfo">
      <div className="align-start relative overflow-hidden xl:space-x-10 rounded-xl bg-peach px-4 py-8 md:px-12 md:py-10">
        <div className="w-full mx-auto text-center pb-8 py-6">
          <h2 className="whitespace-pre-line text-[36px] sm:text-3xl lg:text-4xl 2xl:text-[90px] font-bold uppercase">
            Minnesota Real Estate
          </h2>
          <div className="mt-5 xl:mt-8 leading-paragraph max-w-[970px] mx-auto">
            <p className="font-bold text-xl">Discover Unrivaled Expertise</p>{' '}
          </div>
        </div>
      </div>

      {/* Part 2 */}
      <div className="-my-overlap bg-[#121923] pt-overlap text-white">
        <div className="pt-8 sm:pt-12 px-4 xl:px-8 max-w-[1240px] mx-auto text-center">
          <img
            src="/footer-logoWILEN.png"
            className="max-w-full sm:max-w-[400px] mb-6 sm:mb-8 mx-auto"
            alt="wilen logo"
          />
          <p className="text-white font-semibold text-[20px] sm:text-[24px] xl:text-[30px] leading-[130%]">
            Wilen is made up of highly experienced, multidisciplinary real
            estate professionals whose highest priority is serving you.
            Utilizing our unprecedented resources, we will craft a unique and
            winning strategy to sell your real estate. Let us put our experience
            to work for you.
          </p>

          <ContactForm />
        </div>
        <div className="w-full sm:mx-4 pt-8 flex flex-col items-center space-y-8 justify-center">
          <FooterLinks />
        </div>
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
