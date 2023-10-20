import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api'
import React, { useMemo } from 'react'

const GoogleMapComponent = () => {
  const libraries = useMemo(() => ['places'], [])
  const mapCenter = useMemo(
    () => ({ lat: 27.672932021393862, lng: 85.31184012689732 }),
    []
  )

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  })
  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: true,
    }),
    []
  )

  if (!isLoaded) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        // mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '800px', height: '800px' }}
        onLoad={() => console.log('Map Component Loaded...')}
      />
      <MarkerF
        position={mapCenter}
        onLoad={() => console.log('Marker Loaded')}
      />
      <MarkerF
        position={mapCenter}
        onLoad={() => console.log('Marker Loaded')}
      />
      <MarkerF
        position={mapCenter}
        onLoad={() => console.log('Marker Loaded')}
      />
    </div>
  )
}

export default GoogleMapComponent
