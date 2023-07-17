import Link from 'next/link'
import React from 'react'

const Pagination = ({ standardStatus, pagination }) => {
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
  return (
    <div className="mt-12 flex justify-center">
      <ul className="flex space-x-2">
        {pages.map((page, i) => (
          <div key={i}>
            {pages[i + 1] && pages[i + 1] - pages[i] > 1 ? (
              <div className="flex space-x-2">
                <li>
                  <Link
                    href={{
                      pathname: `/${standardStatus}`,
                      query: { page, pageSize: 10 },
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
                <li>
                  <span>...</span>
                </li>
              </div>
            ) : (
              <li>
                <Link
                  href={{
                    pathname: `/${standardStatus}`,
                    query: { page, pageSize: 10 },
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
            )}
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
