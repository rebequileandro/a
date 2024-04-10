import React from 'react'
import './MyParty.scss'
import edit from '../../../assets/icons/Organizer/edit.svg'
import { Loading } from '../../../components/Loader/Loader'
export const MyPartyCard = ({id, image, name, address}) => {
  return (
      <div className='card-party-container'>
            <button className='edit' onClick={() => alert('editar')}>
                <img src={edit} alt="editar"/>
            </button>
        <div key={id} className='my-party'>
            {name ? 
            <>
                <img src={image} alt="boliche"/>
                <div className='mask'>
                    <h2>{name}</h2>
                    <p>{address}</p>
                </div>
            </>
            :
            <Loading/>
            }
        </div>
      </div>
  )
}
