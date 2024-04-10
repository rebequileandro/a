//receives the text of the button, the route to where it is redirected, title, 
//description, status, if it does not receive status by default it will be an error 
//and if it does not receive the text of the button by default it will be a loading
import React, { useEffect } from 'react'
import './StatusPopUp.scss'
import success from '../../assets/icons/success.svg'
import error from '../../assets/icons/error.svg'
import { Loading } from '../Loader/Loader'
export const StatusPopUp = ({title, description, button, redirect, status}) => {
    useEffect(() => {
      if(!button && redirect)
      setTimeout(() => {
         // navigate('redirect')
      }, 5000);
  })
  return (
    <div className='popup-overlay' onClick={() => alert('pasar el setState por props para cerrar con overlay')}>
        <div className='popup'>
            <img src={status ? success : error} alt="success"/>
            <h1>{title}</h1>
            <div className='description'>
                <p>{description}</p>
            </div>
            { button ? <button onClick={()=> alert('pasar la ruta por props y cambiar el alert por navigate')}>{button}</button>
              : <Loading/>
            }
        </div>
    </div>
  )
}
