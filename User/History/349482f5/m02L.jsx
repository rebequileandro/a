import React from 'react'
import { useNavigate } from 'react-router-dom'
import backButton from '../../assets/Buttons/arrow-circle-left.svg'

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
