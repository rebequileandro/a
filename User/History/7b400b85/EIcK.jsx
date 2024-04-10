import React from 'react'
import { HeaderOrganizer } from '../Header/HeaderOrganizer'
import './OrganizerMenu.scss'
export const OrganizerMenu = () => {
    const getDetails = useSelector(state => state.organizer.details)

  return (
    <div className='container-organizer-menu'>
        <HeaderOrganizer notification={true} backbutton={'/organizer'} party={getDetails?.nameParty + '' + getDetails?.addressParty}/>

    </div>
  )
}
