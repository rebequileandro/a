//component go back. Receive by prop the route to which you want to return
import React from 'react'
import { useNavigate } from 'react-router-dom'
import backButton from '../../assets/buttons/arrow-circle-left.svg'
import './Back-button.scss'

export const BackButton = ({ route }) => {
    const navigate = useNavigate() 
  return (
    <>
     <img 
        src={backButton} 
        alt='back' 
        onClick={()=> navigate(route)}
        className='back'
        />
    </>
  )
}
