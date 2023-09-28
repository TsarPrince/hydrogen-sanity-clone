import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

import NcInputNumber from './NcInputNumber/NcInputNumber'

const TabFilters = () => {
  const router = useRouter()
  let { q, sort } = router.query

  const renderTabsRoomAndBeds = () => {
    return (
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`flex items-center justify-center px-4 py-2 text-md rounded-full border-2 border-gray space-x-2 focus:outline-none ${
                open ? '!border-indigo-500 ' : ''
              }`}
            >
              <span>Beds and Baths</span>
              <ChevronDownIcon
                className={`w-5 h-5 transition ${open ? 'rotate-180' : ''}`}
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 lg:max-w-md text-lg">
                <div className="overflow-hidden rounded-xl shadow-xl bg-white border border-gray">
                  <div className="relative flex flex-col px-5 py-6 space-y-5">
                    <NcInputNumber label="Beds" max={10} />
                    <NcInputNumber label="Bathrooms" max={10} />
                  </div>
                  <div className="p-5 bg-lightGray/30 flex items-center justify-between">
                    <button
                      onClick={close}
                      className="px-4 py-2 sm:px-5 border border-gray text-offBlack rounded-full"
                    >
                      Clear
                    </button>
                    <button
                      onClick={close}
                      className="px-4 py-2 sm:px-5 border border-indigo-500 bg-indigo-600 text-white rounded-full"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    )
  }

  const renderTabsSort = () => {
    console.log({ q, sort })

    const onSubmit = (e, close) => {
      e.preventDefault()
      close()
      router.push(`${router.pathname}?q=${q}&sort=${e.target.value}`)
    }

    return (
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`flex items-center justify-center px-4 py-2 text-lg rounded-full border hover:border-darkGray/50 transition duration-200 space-x-2 focus:outline-none`}
            >
              <span>Sort by</span>
              <ChevronDownIcon
                className={`w-5 h-5 transition ${open ? 'rotate-180' : ''}`}
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 max-w-xs w-screen px-4 mt-3 left-0 sm:px-0 text-lg">
                <div className="overflow-hidden rounded-xl shadow-xl bg-white border border-gray bg-opacity-90 backdrop-blur-lg">
                  <form
                    className="flex flex-col items-start p-2 space-y-2"
                    onSubmit={(e) => onSubmit(e)}
                  >
                    {[
                      {
                        key: 'Most expensive first',
                        value: 'ListPrice:DESC',
                      },
                      {
                        key: 'Most affordable first',
                        value: 'ListPrice:ASC',
                      },
                      {
                        key: 'Newly listed first',
                        value: 'DaysOnMarket:ASC',
                      },
                      {
                        key: 'Oldest first',
                        value: 'DaysOnMarket:DESC',
                      },
                      {
                        key: 'Recently updated first',
                        value: 'ModificationTimestamp:DESC',
                      },
                    ].map((option, key) => (
                      <label
                        key={key}
                        className="px-4 py-4 hover:bg-gray/40 w-full rounded-md flex items-start space-x-2"
                      >
                        <input
                          type="radio"
                          name="sort"
                          value={option.value}
                          required
                          checked={sort === option.value}
                          onChange={(e) => onSubmit(e, close)}
                        />
                        <span>{option.key}</span>
                      </label>
                    ))}
                  </form>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    )
  }

  return (
    <div className="max-w-[96rem] flex lg:space-x-4">
      {/* {renderTabsRoomAndBeds()} */}
      {renderTabsSort()}
    </div>
  )
}

export default TabFilters
