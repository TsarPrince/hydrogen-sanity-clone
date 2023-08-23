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
            <p className="font-bold text-xl">
              Our main focus is to provide the highest quality real estate
              services available anywhere; and to be an instrumental part of
              each client&apos;s successful real estate journey.
            </p>{' '}
          </div>
        </div>
      </div>

      {/* Part 2 */}
      <div className="-my-overlap bg-[#121923] pt-overlap text-white">
        <div className="flex flex-wrap xl:flex-nowrap items-start pt-8 sm:pt-12 px-4 xl:px-8 justify-between xl:space-x-12">
          <div className="w-full sm:w-1/2 xl:w-full">
            <div>
              <img
                src="/footer-logoWILEN.png"
                className="max-w-full sm:max-w-[400px] mb-6 sm:mb-8"
                alt="wilen logo"
              />
              <p className="text-white font-semibold text-[20px] sm:text-[24px] xl:text-[28px] leading-[130%]">
                Wilen is made up of highly experienced, multidisciplinary real
                estate professionals whose highest priority is serving you.
                Utilizing our unprecedented resources, we will craft a unique
                and winning strategy to sell your real estate. Let us put our
                experience to work for you.
              </p>
            </div>
          </div>
          <div className="w-full mt-8 sm:mt-0 sm:w-1/2 flex xl:hidden sm:justify-end">
            <FooterLinks />
          </div>
          <div className="w-full mt-8 sm:mt-12 xl:mt-0">
            <ContactForm />
          </div>
          <div className="w-full hidden xl:block">
            <FooterLinks />
          </div>
        </div>

        <div className="border-t mx-4 lg:mx-20 border-b-white mt-8 sm:mt-12">
          <div className="mx-auto max-w-[66rem] sm:px-4 py-8 sm:py-12 text-center text-md leading-caption md:px-8">
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
