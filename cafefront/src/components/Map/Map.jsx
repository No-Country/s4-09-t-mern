import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import React, { useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { MarkerIcon } from './MarkerIcon'
// import { cafeterias } from './cafeterias'
import { SearchBar } from '../SearchBar/SearchBar'
import { NotFound } from '../SearchBar/NotFound'
import useAxios from '../../hooks/useAxios'
import './styles.css'
import { useShopStore } from '../../redux/hooks/useShop'

const SetViewOnChange = (props) => {
  const m = useMap()
  m.setView(props.position, props.zoom, { animate: true })
  return null
}

export const Map = () => {
  const [position, setPosition] = useState([-34.6037, -58.3816])
  const [zoom, setZoom] = useState(18)  

  const { shop, setShop } = useShopStore()

  const result = useAxios({
    url: 'http://localhost:5000/shops/',
    method: 'get'
  })

  React.useEffect(() => {
    if (result.loading === false) {
      if (result.response !== null) {                
        setShop(result.response)
      }
    }
  }, [result.loading])

  //

  return (
    <div style={{ position: 'relative', top: '5%' }}>
      <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {shop !== null &&
          shop.map((data) => (
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
      {shop && (
        <SearchBar
          data={shop}
          handlePosition={setPosition}
          handleZoom={setZoom}
        />
      )}
      {!shop && <NotFound />}
    </div>
  )
}
