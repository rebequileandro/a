import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export const MapView = ({coords}) => {
  return (
    <div className='leaflet-container'>
        <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[coords.latitud, coords.longitud]}>
                <Popup>
                ip: xxxxxxxxxx <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    </div>
  )
}
