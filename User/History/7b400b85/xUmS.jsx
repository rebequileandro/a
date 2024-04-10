import React from 'react'
import { HeaderOrganizer } from '../Header/HeaderOrganizer'
import './OrganizerMenu.scss'
export const OrganizerMenu = () => {
  return (
    <div>
        <HeaderOrganizer notification={true} backbutton={'/organizer'}/>

    </div>
  )
}
