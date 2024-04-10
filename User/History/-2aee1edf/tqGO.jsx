import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import customIcon from '../assets/icon.gif'
import { MarkerPulse } from './Marker/MarkerPulse';

export const MapView = ({coords}) => {

  const markerPulse = L.icon({
    iconUrl: MarkerPulse,
    iconSize: [38, 38],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
  })

  return (
    <MapContainer center={[coords.latitud, coords.longitud]} zoom={3} minZoom={2} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
  />
  <Marker position={[coords.latitud, coords.longitud]} icon={markerPulse}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
  )
}
