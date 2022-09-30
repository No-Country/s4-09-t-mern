import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React from 'react'
import 'leaflet/dist/leaflet.css';
import {MarkerIcon} from './MarkerIcon';

export const Map = () => {    
  return (
    <MapContainer center={[-34.6037, -58.3816]} zoom={18} scrollWheelZoom={false}>
      <TileLayer
        attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker 
        icon={MarkerIcon}
        position={[-34.6036, -58.38265]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
