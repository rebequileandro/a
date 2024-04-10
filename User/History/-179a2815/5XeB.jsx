import React from 'react'
import './PopupSuccess.scss'
import success from '../../assets/icons/success.svg'
export const PopupSuccess = () => {
  return (
    <div className='overlay'>
        <div className='popup'>
            <img src={success} alt="success"/>
        </div>
    </div>
  )
}
