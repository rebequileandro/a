import React from 'react'
import './HeaderOrganizer.scss'
import notifications from '../../../assets/icons/notification.svg'
export const HeaderOrganizer = () => {
  return (
    <div className='header-oranizer-container'>
        <div className='notifications'>
           <img src={notifications} alt="" srcset="" />
        </div>
        <h1>WeDrink</h1>
    </div>
  )
}
