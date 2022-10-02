/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { useMapEvents } from 'react-leaflet/hooks'
import React, { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
import { MarkerIcon } from './MarkerIcon'
import { cafeterias } from './cafeterias'
import { SearchBar } from './SearchBar'

const SetViewOnChange = (props) => {
  const m = useMap()
  m.setView(props.position, m.getZoom(), { animate: true })
  return null
}

export const Map = () => {
  const [position, setPosition] = useState([-34.6037, -58.3816])
  const [zoom, setZoom] = useState(18)

  return (
    <>
      <MapContainer center={position} zoom={zoom} scrollWheelZoom={true}>
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cafeterias.map((data) => (
          <Marker key={data.id} icon={MarkerIcon} position={data.position}>
            <Popup>
              <strong>{data.name}</strong> <br /> {data.motto} <br />
              <a href="http://www.google.com">Ver Cafeteria</a>
            </Popup>
          </Marker>
        ))}
        <SetViewOnChange position={position} />
      </MapContainer>
      <SearchBar handlePosition={setPosition} />
    </>
  )
}
