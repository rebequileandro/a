import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { L } from 'react-leaflet'

export const MapView = ({coords}) => {

  return (
    <MapContainer center={[coords.latitud, coords.longitud]} zoom={3} minZoom={2} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
  />
  <Marker position={[coords.latitud, coords.longitud]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
  )
}
