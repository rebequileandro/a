import React from 'react'
import './MyParty.scss'
import edit from '../../../assets/icons/Organizer/edit.svg'
import { Loading } from '../../../components/Loader/Loader'
import { useNavigate } from 'react-router-dom'
import { getDetailsParty } from '../../../redux/store/slices/Organizer'
import { useDispatch } from 'react-redux'

export const MyPartyCard = ({id, image, name, address}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const  handleClickEdit = (e) => {
            e.preventDefault()
            dispatch(getDetailsParty(id))
            setTimeout(() => {
                navigate(`/organizer/editmyparty/${id}`)
            }, 500);
    }
    const  handleClickMyParty = (e) => {
        e.preventDefault()
        dispatch(getDetailsParty({id}))
        navigate(`/organizer/menu/${id}`)
    }

  return (
      <div className='card-party-container'>
            <button className='edit' onClick={(e) => handleClickEdit(e)}>
                <img src={edit} alt="editar"/>
            </button>
        <div key={id} className='my-party'>
            {name ? 
            <>
                <img src={image} alt="boliche"/>
                <div className='shadow-filter' onClick={(e) => handleClickMyParty(e)}>
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
