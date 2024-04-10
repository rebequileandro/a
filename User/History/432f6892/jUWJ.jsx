//receive path and text
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './gradient-text.scss'
export const GradientText = ({route, text}) => {
  const navigate = useNavigate()
  return (
    <div className='gradient-text'>
        <p onClick={() => navigate(route)}>{text}</p>
    </div>
  )
}
