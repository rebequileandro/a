import React, { useRef } from 'react'
import '../App.css';

export const Map = (props) => {
  const mapRef = useRef<HTMLDivElement>(null)
  return (
    <div className='container'>
      <div ref={mapRef} className='map'></div>
    </div>
  )
}
