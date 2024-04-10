import React from 'react'
import './PartyCard.scss'
import edit from '../../../assets/icons/Organizer/edit.svg'
import { Loading } from '../../../components/Loader/Loader'
import { useNavigate } from 'react-router-dom'
import { detailsParty } from '../../../redux/store/slices/Organizer'
import { useDispatch } from 'react-redux'
const PartyCard = ({name, id, address, image}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const  handleClickEdit = (e) => {
            e.preventDefault()
            dispatch(detailsParty({id}))
            navigate(`/editmyparty/${id}`)
    }
  return (
    <div key={id} className='party-card-container'>
            {name ? 
            <>
                <img src={image} alt="boliche"/>
                <div className='shadow-filter'>
                    <h2>{name}</h2>
                    <p>{address}</p>
                </div>
            </>
            :
            <Loading/>
            }
    </div>
  )
}

export default PartyCard