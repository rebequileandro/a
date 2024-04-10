//receives the text of the button and the route where it is redirected, if it does not receive 
//the text of the button by default it will be a loading.
import React from 'react'
import './PopupSuccess.scss'
import success from '../../assets/icons/success.svg'
import { Loading } from '../Loader/Loader'
export const PopupSuccess = ({title, description, button, redirect}) => {
  return (
    <div className='popup-overlay' onClick={() => alert('pasar el setState por props para cerrar con overlay')}>
        <div className='popup'>
            <img src={success} alt="success"/>
            <h1>{title}</h1>
            <div className='description'>
                <p>{description}</p>
            </div>
            { button ? <button onClick={()=> alert('pasar la ruta por props')}>{button}</button>
              : <Loading/>
            }
        </div>
    </div>
  )
}
