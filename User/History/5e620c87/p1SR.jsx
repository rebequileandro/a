import React from 'react'
import './GradientButton.scss'
const GradientButton = ({text, onClick, bold}) => {
  return (
    <button 
        className='gradient-button'
        style={{fontWeight: bold ? 700 : null}}
        onClick={onClick}>
        {text}
    </button>
  )
}

export default GradientButton