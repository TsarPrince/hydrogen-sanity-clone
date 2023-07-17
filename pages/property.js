import { useRouter } from 'next/router'
import React from 'react'

import ErrorComponent from '../components/ErrorComponent'
import Gallery from '../components/Gallery'
import LoadingState from '../components/LoadingState'
import Navbar from '../components/Navbar'
import useFetch from '../hooks/useFetch'

const IndivdualProperty = () => {
  const { query } = useRouter()

  const { id, page, pageSize, standardStatus } = query

  const status = decodeURI(standardStatus)

  const { data, error, isLoading } = useFetch({
    page,
    pageSize,
    standardStatus: status,
  })

  const property = data?.data.filter(
    (properties) => properties.attributes.ListingId == id
  )[0]

  // terminate the property function if property is not found
  // no matter loading or error
  if (!property) {
    if (isLoading) {
      return (
        <>
          <Navbar />
          <LoadingState />
        </>
      )
    }
    // If error occurs during fetch
    // or if property is not found
    else {
      return (
        <>
          <Navbar />
          <ErrorComponent />
        </>
      )
    }
  }
  const {
    ListingId,
    StreetSuffix,
    City,
    HighSchoolDistrict,
    StreetName,
    StreetNumber,
    ListPrice,
    LotSizeDimensions,
    LotSizeArea,
    LotSizeUnits,
    Photos,
    PhotosCount,
    PropertyType,
    StandardStatus,
    PublicRemarks,
    ZoningDescription,
  } = property.attributes

  const listItemsToRender = {
    StreetSuffix,
    StreetName,
    StreetNumber,
    City,
    HighSchoolDistrict,
    LotSizeDimensions,
    LotSizeArea: `${LotSizeArea} ${LotSizeUnits}`,
    PropertyType,
    StandardStatus,
    ZoningDescription,
  }

  return (
    <div className="mt-[70px] lg:mt-[100px]">
      <Navbar />
      <>
        <Gallery media={Photos?.data?.map((media) => media.attributes.url)} />
        <div className="w-full lg:w-[calc(100%-315px)]">
          <div className="portableText max-w-[660px] px-4 pb-24 pt-8 md:px-8">
            <div className="first:mt-0 last:mb-0 relative my-12 w-screen px-6 md:px-8 -ml-6 md:-ml-8">
              <div className="">
                <div
                  className="mr-auto flex flex-col items-start"
                  style={{ color: '#3d7544' }}
                >
                  <div className="max-w-[60rem] text-2xl md:text-4xl">
                    ${ListPrice}
                  </div>
                  <div className="mt-4">
                    <a
                      className="flex h-[2.5rem] items-center justify-center overflow-hidden rounded-full p-4 text-sm font-bold duration-200 ease-out disabled:opacity-20 disabled:bg-opacity-100 bg-offBlack hover:opacity-80 text-white"
                      style={{ background: '#3d7544' }}
                      href="/pages/process"
                    >
                      Quick Add
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="first:mt-0 last:mb-0 mb-4 mt-16 text-xl font-bold">
              Description
            </h2>
            <p className="first:mt-0 last:mb-0 relative my-4 leading-paragraph">
              {PublicRemarks}
            </p>
            <ul className="first:mt-0 last:mb-0 my-8 space-y-0.5 leading-paragraph list-outside ml-8">
              {Object.keys(listItemsToRender).map((item, key) => (
                <li key={key}>
                  <span className="text-darkGray">
                    {item.replace(/([A-Z])/g, ' $1')}:
                  </span>{' '}
                  {listItemsToRender[item]}
                </li>
              ))}
            </ul>
            <h2 className="first:mt-0 last:mb-0 mb-4 mt-16 text-xl font-bold">
              Shipping &amp; Returns
            </h2>
            <p className="first:mt-0 last:mb-0 relative my-4 leading-paragraph">
              We ship all of our products by courier. For next day delivery,
              please order before 2pm. If for any reason you are not completely
              satisfied with your order, we offer a 30 day returns policy for a
              full refund. Products must not have been used and must still be in
              a sellable condition.{' '}
              <a
                className="inline-flex items-center underline transition-opacity duration-200 hover:opacity-60"
                href="/pages/shipping"
              >
                Read our full policy
              </a>
              .
            </p>
            <h2 className="first:mt-0 last:mb-0 mb-4 mt-16 text-xl font-bold">
              FAQ
            </h2>
            <div className="first:mt-0 last:mb-0 my-8">
              <div className="flex flex-col border-b border-b-gray">
                <button
                  className="flex items-center justify-between py-4 text-lg font-bold transition-opacity duration-200 ease-out hover:opacity-60"
                  id="headlessui-disclosure-button-:R2pj4p:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <div className="truncate">
                    How do I take care of my items?
                  </div>
                  <div className="ml-4 shrink-0">
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
                        d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z"
                        fill="#3A3E3E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 3C12.4142 3 12.75 3.33579 12.75 3.75V20.25C12.75 20.6642 12.4142 21 12 21C11.5858 21 11.25 20.6642 11.25 20.25V3.75C11.25 3.33579 11.5858 3 12 3Z"
                        fill="#3A3E3E"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
              <div className="flex flex-col border-b border-b-gray">
                <button
                  className="flex items-center justify-between py-4 text-lg font-bold transition-opacity duration-200 ease-out hover:opacity-60"
                  id="headlessui-disclosure-button-:R39j4p:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <div className="truncate">
                    What if I’m unhappy with my order?
                  </div>
                  <div className="ml-4 shrink-0">
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
                        d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z"
                        fill="#3A3E3E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 3C12.4142 3 12.75 3.33579 12.75 3.75V20.25C12.75 20.6642 12.4142 21 12 21C11.5858 21 11.25 20.6642 11.25 20.25V3.75C11.25 3.33579 11.5858 3 12 3Z"
                        fill="#3A3E3E"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
              <div className="flex flex-col border-b border-b-gray">
                <button
                  className="flex items-center justify-between py-4 text-lg font-bold transition-opacity duration-200 ease-out hover:opacity-60"
                  id="headlessui-disclosure-button-:R3pj4p:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <div className="truncate">
                    Are your products environmentally friendly?
                  </div>
                  <div className="ml-4 shrink-0">
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
                        d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z"
                        fill="#3A3E3E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 3C12.4142 3 12.75 3.33579 12.75 3.75V20.25C12.75 20.6642 12.4142 21 12 21C11.5858 21 11.25 20.6642 11.25 20.25V3.75C11.25 3.33579 11.5858 3 12 3Z"
                        fill="#3A3E3E"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <p className="first:mt-0 last:mb-0 relative my-4 leading-paragraph"></p>
          </div>
        </div>
      </>
    </div>
  )
}

export default IndivdualProperty
