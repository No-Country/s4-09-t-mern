import L from 'leaflet'
import iconCoffee from '../assets/coffee41x41.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

// Icon mide : 25 x 41

export const MarkerIcon = L.icon({
  iconUrl: iconCoffee,
  shadowUrl: iconShadow,
  iconAnchor: [20.5, 41]
})
