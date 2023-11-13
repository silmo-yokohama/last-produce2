"use client"

import HallDetail from '@/types/HallDetailsType'
import React from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import GlobalConstant from '@/constants/GlobalConstant';

const HallDetails = ({ hallDetail }: { hallDetail: HallDetail }) => {
  const position = {
    lat: hallDetail.mapOption.lat,
    lng: hallDetail.mapOption.lng
  }

  console.log(position)

  return (
    <div className="w-11/12 lg:w-1/2 flex flex-col">
      <div className="m-2">
        <h3>{hallDetail.name}</h3>

        <dl>
          <dt>住所</dt>
          <dd>{hallDetail.address}</dd>

          <dt>電話番号</dt>
          <dd>{hallDetail.tel}</dd>

          <dt>ホームページ</dt>
          <dd>
            <a href={hallDetail.url} target='_BLANK'>斎場ホームページへ移動</a>
          </dd>

          <dt>最寄り駅</dt>
          <dd>
            <ul>
              {hallDetail.stations && hallDetail.stations.map(station => <li key={station}>{station}</li>)}
            </ul>
          </dd>
        </dl>
        <LoadScript googleMapsApiKey={GlobalConstant.googleMapApiKey}>

          <GoogleMap
            mapContainerClassName='w-full h-52 lg:h-52'
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
        </LoadScript>
      </div>

    </div>

  )
}

export default HallDetails