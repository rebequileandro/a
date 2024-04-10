import React from 'react'
import './GradientButton.scss'
const GradientButton = ({text, onClick}) => {
  return (
    <button 
        className='gradient-button'
        onClick={onClick}>
        {text}
    </button>
  )
}

export default GradientButton