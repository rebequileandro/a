//green bar component, receives amount, price and action to perform
// actions: checkout, pay, sendOrder
import React from 'react'
import './gradient-green-bar.scss'
export const GradientGreenBar = ({amount, action, price}) => {

    const handleClick = () => {
        // action === 'checkout' && navigate(./cart) 
        // action === 'pay' && navigate(./toPay)
        // action === 'sendOrder' && '' 
        alert('click')
    }
  return (
    <div onClick={() => handleClick()} className='gradient-green-bar'>
        <div>
            {
                amount && 
                <div className='amount'>{amount}</div>
            }
        </div>
    </div>
  )
}
