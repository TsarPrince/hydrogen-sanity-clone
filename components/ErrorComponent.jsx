import React from 'react'

import Navbar from './Navbar'

const ErrorComponent = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center w-full">
        Failed to load
      </div>
    </>
  )
}

export default ErrorComponent
