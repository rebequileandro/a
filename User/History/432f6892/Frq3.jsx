//receive path and text
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './gradient-text.scss'
export const GradientText = ({redirect, text}) => {
  const navigate = useNavigate()
  return (
    <div className='gradient-text'>
        <p onClick={() => redirect()}>{text}</p>
    </div>
  )
}
