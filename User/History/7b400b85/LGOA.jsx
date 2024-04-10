import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderOrganizer } from '../Header/HeaderOrganizer'
import './OrganizerMenu.scss'
import plus from '../../../assets/icons/Organizer/plus.svg'
import { TypeOfDrink } from './AddDrink/TypeOfDrink/TypeOfDrink'
import { useParams } from 'react-router-dom'
import { getbyId } from '../../../redux/store/slices/Organizer'
export const OrganizerMenu = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
      dispatch(getbyId(id))
    }, [])
    
    const getDetails = useSelector(state => state.organizer.details)
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='container-organizer-menu'>
        <HeaderOrganizer notification={true} backbutton={'/organizer'} party={getDetails?.nameParty + ' ' + getDetails?.addressParty}/>
        <div className='container-drinks'>
        <div className='new-drink' onClick={() => setIsOpen(true)}>
            <img src={plus} alt="mas tragos"/>
            <p>Añadir bebidas</p>
        </div>
        </div>
        {isOpen && <TypeOfDrink setIsOpen={setIsOpen}/>}
    </div>
  )
}
