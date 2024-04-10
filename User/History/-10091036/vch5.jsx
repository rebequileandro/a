//receives the text of the button, the route to where it is redirected, title, 
//description, status, if it does not receive status by default it will be an error 
//and if it does not receive the text of the button by default it will be a loading

import React, { useEffect } from 'react'
import './StatusPopUp.scss'
import success from '../../assets/icons/success.svg'
import error from '../../assets/icons/error.svg'
import { Loading } from '../Loader/Loader'
import { useNavigate } from 'react-router-dom'
export const StatusPopUp = ({title, description, button, redirect, status}) => {
    useEffect(() => {
      if(!button && redirect)
      setTimeout(() => {
        redirect()
      }, 5000);
  })
  return (
    <div className='popup-overlay'>
        <div className='popup'>
            <img src={status ? success : error} alt="success"/>
            <h1>{title}</h1>
            <div className='description'>
                <p>{description}</p>
            </div>
            { button ? <button onClick={()=> redirect()}>{button}</button>
              : <Loading/>
            }
        </div>
    </div>
  )
}
