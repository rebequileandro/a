import React from 'react'
import './HeaderOrganizer.scss'
import notificationsIcon from '../../../assets/icons/notification.svg'
import { BackButton } from '../../../components/BackButton/BackButton'

export const HeaderOrganizer = ({organizer, notification, backbutton, party}) => {
  return (
    <div className='header-oranizer-container'>
        <div className={backbutton ? 'back-and-notifications' : 'notifications' }>
           {backbutton && <BackButton route={backbutton}/>}
           {notification && <img src={notificationsIcon} alt="notifications"/>}
        </div>
        <h1>WeDrink</h1>
        {organizer && <p>Bienvenido {organizer}</p>}
        {party && <p>{party}</p>}
    </div>
  )
}
