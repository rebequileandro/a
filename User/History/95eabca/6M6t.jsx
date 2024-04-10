import React from 'react'
import './HeaderOrganizer.scss'
import notifications from '../../../assets/icons/notification.svg'
export const HeaderOrganizer = ({organizer, notification, backbutton}) => {
  return (
    <div className='header-oranizer-container'>
        <div className='notifications'>
          {notification &&
           <img src={notifications} alt="notifications"/>
          }
        </div>
        <h1>WeDrink</h1>
        <p>Bienvenido {organizer}</p>
    </div>
  )
}
