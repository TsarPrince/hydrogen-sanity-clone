import Link from 'next/link'
import React from 'react'

const Pagination = ({ standardStatus, q, pagination }) => {
  const pages = []
  if (pagination) {
    for (let i = 1; i <= pagination.pageCount; i++) {
      if (
        i === 1 ||
        i === pagination.page ||
        i === pagination.page - 1 ||
        i === pagination.page + 1 ||
        i === pagination.pageCount
      ) {
        pages.push(i)
      }
    }
  }
  let pathname = ''
  if (standardStatus) {
    pathname = `/${standardStatus}`
  } else if (q) {
    pathname = `/search`
  } else {
    pathname = `/buy`
  }

  return (
    <div className="mt-12 flex justify-center">
      <ul className="flex space-x-2">
        {pages.map((page, i) => (
          <div key={i}>
            <div className="flex space-x-2">
              <li>
                <Link
                  href={{
                    pathname,
                    query: { q, page, pageSize: 10 },
                  }}
                >
                  <button
                    className={`min-w-[40px] border p-2 rounded transition ${
                      page === pagination.page
                        ? 'text-blue-500 border-blue-500 hover:border-blue-500/50'
                        : 'hover:bg-lightGray border-gray'
                    }`}
                  >
                    {page}
                  </button>
                </Link>
              </li>

              {pages[i + 1] && pages[i + 1] - pages[i] > 1 && (
                <li>
                  <span>...</span>
                </li>
              )}
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
