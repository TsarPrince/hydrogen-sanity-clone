import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Searchbar = ({ setDialogOpen }) => {
  const [q, setQ] = useState('')
  const router = useRouter()
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const getSuggestions = async () => {
      if (!q.trim().length) return

      try {
        const res = await axios.post('/api/suggest', { q })
        setSuggestions(res.data?.data?.hits)
      } catch (error) {
        console.log(error)
      }
    }
    getSuggestions()
  }, [q])

  const handleOnClick = (e, ListingId) => {
    e.preventDefault()
    if (setDialogOpen) {
      setDialogOpen(false)
    }
    router.push({
      pathname: '/property',
      query: { id: ListingId },
    })
  }

  return (
    <div className="relative group z-10">
      {/* Search bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (setDialogOpen) {
            setDialogOpen(false)
          }
          router.push({
            pathname: '/search',
            query: { q },
          })
        }}
      >
        <div className="flex items-center xl:w-[27rem] md:w-[18rem] text-offBlack border hover:border-darkGray/50 duration-200 pr-2 mr-2">
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
          {!!suggestions.length && (
            <div className="opacity-0 group-focus-within:opacity-100 absolute bg-white top-12 w-full p-2 mt-2 shadow rounded-lg  backdrop-blur-lg backdrop-filter bg-opacity-90">
              <div>
                {suggestions?.map(
                  (
                    {
                      StreetName,
                      StreetNumber,
                      StreetSuffix,
                      City,
                      StateOrProvince,
                      PostalCode,
                      ListingId,
                    },
                    key
                  ) => {
                    const address = `${StreetNumber ?? ''} ${
                      StreetName ?? ''
                    } ${StreetSuffix ?? ''}, ${City ?? ''} ${
                      StateOrProvince ?? ''
                    } ${PostalCode ?? ''}`

                    return (
                      <div key={key} className="">
                        <button
                          className="w-full"
                          onClick={(e) => handleOnClick(e, ListingId)}
                        >
                          <div className="flex items-center hover:bg-gray/40 p-3 rounded space-x-2">
                            <svg
                              className="w-5 m-2 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001L1 11.0001L11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162L23 11.0001L20 11.0001V20.0001C20 20.5524 19.5523 21.0001 19 21.0001ZM6 19.0001H18V9.15757L12 3.70302L6 9.15757V19.0001Z"></path>
                            </svg>
                            <p className="text-left">{address}</p>
                          </div>
                        </button>
                      </div>
                    )
                  }
                )}
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default Searchbar
