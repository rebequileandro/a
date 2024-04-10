import React, { useRef } from 'react'
import '../App.css';

export const Map = (props) => {
  const mapRef = useRef(null)
  return (
    <div className='container'>
      <div id="map"></div>
    </div>
  )
}
