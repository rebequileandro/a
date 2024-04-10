import React from 'react'
import './PartyCard.scss'
import { Loading } from '../../../../components/Loader/Loader'
import { useNavigate } from 'react-router-dom'
import { detailsParty } from '../../../../redux/store/slices/Organizer'
import { useDispatch } from 'react-redux'
const PartyCard = ({name, id, address, image}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClickEdit = (e) => {
            e.preventDefault()
            navigate(`/estadisticas/${id}`)
    }
  return (
    <div key={id} className='party-card-container' onClick={(e) => handleClickEdit(e)}>
          
            <>
                <img src={image} alt="boliche"/>
                <div className='shadow-filter'>
                    <h2>{name}</h2>
                    <p>{address}</p>
                </div>
            </>
            
    </div>
  )
}

export default PartyCard