import { useState } from 'react'

const ImageWithBlurredBackground = ({ alt, src, backgroundImage }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className={`h-full bg-cover bg-center ${
        loaded ? 'blur-0 animate-none' : 'blur-md animate-pulse'
      }`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <img
        src={src}
        alt={alt}
        className={`h-full select-none object-cover transition-opacity ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => {
          setLoaded(true)
        }}
        onError={() => setLoaded(true)}
      />
    </div>
  )
}

export default ImageWithBlurredBackground
