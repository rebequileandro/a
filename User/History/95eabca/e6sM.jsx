import React from 'react'
import './HeaderOrganizer.scss'
import notifications from '../../../assets/icons/notification.svg'
export const HeaderOrganizer = () => {
  return (
    <div className='header-oranizer-container'>
        <img src={notifications} alt="" srcset="" />
        <h1>WeDrink</h1>
    </div>
  )
}
