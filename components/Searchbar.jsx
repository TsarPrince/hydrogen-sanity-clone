import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Searchbar = ({ setDialogOpen }) => {
  const [q, setQ] = useState('')
  const router = useRouter()

  return (
    <div>
      {/* Search bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setDialogOpen(false)
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
        </div>
      </form>
    </div>
  )
}

export default Searchbar
