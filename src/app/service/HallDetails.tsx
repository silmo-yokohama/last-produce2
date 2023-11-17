"use client"

import HallDetail from '@/types/HallDetailsType'
import React from 'react'
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

const HallDetails = ({ hallDetail }: { hallDetail: HallDetail }) => {
  const position = {
    lat: hallDetail.mapOption.lat,
    lng: hallDetail.mapOption.lng
  }

  return (
    <div className="w-11/12 lg:w-1/2 mb-12 flex flex-col">
      <div className="m-2 lg:mb-8">
        <h3 className='text-center text-xl mb-4 pb-2 border-b-2'>{hallDetail.name}</h3>

        <div className='mb-2 p-1'>
          <dl>
            <dt className='bg-white p-1'>住所</dt>
            <dd className='mb-2 p-1'>{hallDetail.address}</dd>

            <dt className='bg-white p-1'>電話番号</dt>
            <dd className='mb-2 p-1'>{hallDetail.tel}</dd>

            <dt className='bg-white p-1'>ホームページ</dt>
            <dd className='mb-2 p-1'>
              <a href={hallDetail.url} target='_BLANK' className='text-blue-500'>斎場ホームページへ移動</a>
            </dd>

            <dt className='bg-white p-1'>最寄り駅</dt>
            <dd className='mb-2 p-1'>
              <ul>
                {hallDetail.stations && hallDetail.stations.map(station => <li key={station}>{station}</li>)}
              </ul>
            </dd>
          </dl>

        </div>


        <GoogleMap
          mapContainerClassName='w-full h-52 lg:h-96 border-gold border-2'
          center={position}
          zoom={hallDetail.mapOption.zoom}
        >
          <Marker position={position} />
          <InfoWindow position={position}>
            <div>
              <h1>{hallDetail.name}</h1>
            </div>
          </InfoWindow>
        </GoogleMap>
      </div>

    </div>

  )
}

export default HallDetails