//green bar component, receives amount, price and action to perform
// actions: checkout, pay, sendOrder
import React from 'react'
import './gradient-green-bar.scss'
export const GradientGreenBar = ({amount, action, price}) => {

    const handleClick = () => {
        action
    }
  return (
    <div onClick={() => handleClick()} className='gradient-green-bar'>

    </div>
  )
}
