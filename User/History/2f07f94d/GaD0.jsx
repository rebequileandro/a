import React from 'react'
import './MyParty.scss'
export const MyPartyCard = ({id, image, name, address}) => {
  return (
    <div key={id} className='my-party' style={{backgroundImage: requiere(url(image))}}>
        <div className='mask'/>
        <h2>{name}</h2>
        <p>{address}</p>
    </div>
  )
}
