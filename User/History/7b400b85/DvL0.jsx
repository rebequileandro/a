import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { HeaderOrganizer } from '../Header/HeaderOrganizer'
import './OrganizerMenu.scss'
import plus from '../../../assets/icons/Organizer/plus.svg'
import { TypeOfDrink } from './AddDrink/TypeOfDrink'
export const OrganizerMenu = () => {
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
        {isOpen && <TypeOfDrink/>}
    </div>
  )
}
