import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import React, { useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { MarkerIcon } from './MarkerIcon'
// import { cafeterias } from './cafeterias'
import { SearchBar } from '../SearchBar/SearchBar'
import { NotFound } from '../SearchBar/NotFound'
import useAxios from '../../hooks/useAxios'
import './styles.css'

const SetViewOnChange = (props) => {
  const m = useMap()
  m.setView(props.position, props.zoom, { animate: true })
  return null
}

export const Map = () => {
  const [position, setPosition] = useState([-34.6037, -58.3816])
  const [zoom, setZoom] = useState(18)
  const [response, setResponse] = useState(null)

  const result = useAxios({
    url: 'http://localhost:5000/shops/',
    method: 'get'
  })

  if (
    result.loading === false &&
    result.response !== null &&
    response === null
  ) {
    setResponse(result.response)
  }

  return (
    <>
      <MapContainer center={position} zoom={zoom} scrollWheelZoom={true}>
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {response &&
          response.map((data) => (
            <Marker
              key={data._id}
              icon={MarkerIcon}
              position={[data.lat, data.long]}
            >
              <Popup>
                <strong>{data.name}</strong> <br /> {data.email} <br />
                <a href="http://www.google.com">Ver Cafeteria</a>
              </Popup>
            </Marker>
          ))}
        <SetViewOnChange position={position} zoom={zoom} />
      </MapContainer>
      {response && (
        <SearchBar
          data={response}
          handlePosition={setPosition}
          handleZoom={setZoom}
        />
      )}
      {!response && <NotFound />}
    </>
  )
}
