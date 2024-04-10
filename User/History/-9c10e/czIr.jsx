import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { MarkerPulse } from './Marker/MarkerPulse'
export const MapView = ({coords}) => {
  return (
    <div className='leaflet-container'>
        <MarkerPulse/>
        <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[coords.latitud, coords.longitud]}>
                <Popup>
                {coords.latitud} {coords.longitud}
                </Popup>
            </Marker>
        </MapContainer>
    </div>
  )
}
