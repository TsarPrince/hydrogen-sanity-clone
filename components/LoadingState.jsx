import React from 'react'

import Spinner from './Spinner'

const LoadingState = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <Spinner />
    </div>
  )
}

export default LoadingState
