//component go back. Receive by prop the route to which you want to return
import React from 'react'
//import { useNavigate } from 'react-router-dom'
import backButton from '../../assets/buttons/arrow-circle-left.svg'
import './back-button.scss'

export const BackButton = ({ route }) => {
    //const navigate = useNavigate() 
    //cuando tengamos las rutas se le pasara por prop y se itercambiara el alert por navigate
  return (
    <>
     <img 
        src={backButton} 
        alt='back' 
        onClick={()=> alert(route)}
        className='back'
        />
    </>
  )
}
