import React from 'react'

export const MyPartyCard = () => {
  return (
    <div key={e._id} className='my-party'>
        <img src={e.imageParty} alt="boliche"/>
        <div className='mask'/>
        <h2>{e.nameParty}</h2>
        <p>{e.addressParty}</p>
  </div>
  )
}
