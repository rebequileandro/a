import React, { useEffect, useRef } from 'react'
import { createMap } from "maplibre-gl-js-amplify";
import '../App.css';

export const Map = (props) => {
  const mapRef = useRef(null)

  useEffect(() => {
    const initializeMap = async () => {
      const map = await createMap({
        container: mapRef,
        center: [-123.1187, 49.2819],
        zoom: 11,
      })
    }
    initializeMap()
  }, [])

  return (
    <div className='container'>
      <div ref={mapRef} style={{height: '90vh', width: '90vw'}}></div>
    </div>
  )
}
