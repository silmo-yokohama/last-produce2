"use client"

import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api'
import React from 'react'

const CompanyMap = () => {
  const position = {
    lat: 35.45110664817815,
    lng: 139.6301651398994
  }
  return (
    <div>
      <GoogleMap
        mapContainerClassName='w-full h-52 lg:h-96 border-gold border-2'
        center={position}
        zoom={17}

      >
        <InfoWindow position={position}>
          <div>
            <h1>ラストプロデュース株式会社</h1>
          </div>
        </InfoWindow>
        <Marker position={position} />
      </GoogleMap>
    </div>
  )
}

export default CompanyMap