import React from 'react'
import './MyParty.scss'
import edit from '../../../assets/icons/Organizer/edit.svg'
import { Loading } from '../../../components/Loader/Loader'
import { useNavigate } from 'react-router-dom'
import { detailsParty } from '../../../redux/store/slices/Organizer'

export const MyPartyCard = ({id, image, name, address}) => {
    const navigate = useNavigate()
   const  handleClick = () => {
        dispatch(detailsParty({id}))
        navigate(`/organizer/editmyparty/${id}`)
   }
  return (
      <div className='card-party-container'>
            <button className='edit' onClick={() => handleClick()}>
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
