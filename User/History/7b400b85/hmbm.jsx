import React from 'react'
import { useSelector } from 'react-redux'
import { HeaderOrganizer } from '../Header/HeaderOrganizer'
import './OrganizerMenu.scss'
import plus from '../../../assets/icons/Organizer/plus.svg'
export const OrganizerMenu = () => {
    const getDetails = useSelector(state => state.organizer.details)

  return (
    <div className='container-organizer-menu'>
        <HeaderOrganizer notification={true} backbutton={'/organizer'} party={getDetails?.nameParty + ' ' + getDetails?.addressParty}/>
        <div className='container-drinks'>
        <div className='new-drink'>
            <img src={plus} alt="mas tragos"/>
        </div>
        </div>
    </div>
  )
}
