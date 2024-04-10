import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export const MapView = ({coords}) => {
  return (
    <MapContainer center={[coords.latitud, coords.longitud]} zoom={5} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[coords.latitud, coords.longitud]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
  )
}
