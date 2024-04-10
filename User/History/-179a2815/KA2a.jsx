import React from 'react'
import './PopupSuccess.scss'
import success from '../../assets/icons/success.svg'
export const PopupSuccess = ({title, description, button, redirect}) => {
  return (
    <div className='popup-overlay'>
        <div className='popup'>
            <img src={success} alt="success"/>
            <h1>{title}</h1>
            <div>
                <p>{description}</p>
            </div>
            <button>siguiente</button>
        </div>
    </div>
  )
}
