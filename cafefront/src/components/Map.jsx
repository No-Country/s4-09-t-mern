import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import React, { useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { MarkerIcon } from './MarkerIcon'
import { cafeterias } from './cafeterias'
import { SearchBar } from './SearchBar'

const SetViewOnChange = (props) => {
  const m = useMap()
  m.setView(props.position, props.zoom, { animate: true })
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
        <SetViewOnChange position={position} zoom={zoom} />
      </MapContainer>
      <SearchBar handlePosition={setPosition} handleZoom={setZoom}/>
    </>
  )
}
