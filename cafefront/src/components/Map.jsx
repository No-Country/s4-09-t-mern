import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React from 'react'
import 'leaflet/dist/leaflet.css'
import { MarkerIcon } from './MarkerIcon'
import { cafeterias } from './cafeterias'

export const Map = () => {
  return (
    <MapContainer
      center={[-34.6037, -58.3816]}
      zoom={18}
      scrollWheelZoom={true}
    >
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
    </MapContainer>
  )
}
