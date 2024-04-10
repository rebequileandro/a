import React from 'react'
import './HeaderOrganizer.scss'
import notificationsIcon from '../../../assets/icons/notification.svg'
import { BackButton } from '../../../components/BackButton/BackButton'

export const HeaderOrganizer = ({organizer, notification, backbutton}) => {
  return (
    <div className='header-oranizer-container'>
        <div className='notifications'>
          {notification && <img src={notificationsIcon} alt="notifications"/>}
        
          <BackButton route={backbutton}/>
        </div>
        <h1>WeDrink</h1>
        <p>Bienvenido {organizer}</p>
    </div>
  )
}
