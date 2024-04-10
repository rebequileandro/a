import React from 'react'
import './PopupSuccess.scss'
import success from '../../assets/icons/success.svg'
export const PopupSuccess = ({title, description}) => {
  return (
    <div className='popup-overlay'>
        <div className='popup'>
            <div>
                <img src={success} alt="success"/>
            </div>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}
