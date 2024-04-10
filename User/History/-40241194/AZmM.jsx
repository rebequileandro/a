import React, { useRef } from 'react'
import '../App.css';

export const Map = (props) => {
  const mapRef = useRef(null)
  return (
    <div className='container'>
      <div ref={mapRef} style={{height: '90vh', width: '90vw', backgroundColor: 'red'}}></div>
    </div>
  )
}
