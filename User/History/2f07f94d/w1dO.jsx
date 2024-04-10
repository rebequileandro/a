import React from 'react'
import './MyParty.scss'
import edit from '../../../assets/icons/Organizer/edit.svg'
export const MyPartyCard = ({id, image, name, address}) => {
  return (
    <div key={id} className='my-party'>
        <button>
            <img src={edit} alt=""/>
        </button>
        <img src={image} alt="boliche"/>
        <div className='mask'>
            <h2>{name}</h2>
            <p>{address}</p>
        </div>
    </div>
  )
}
