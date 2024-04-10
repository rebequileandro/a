import React from 'react'
import './AddDrink.scss'
export const TypeOfDrink = ({setIsOpen}) => {
  return (
    <div className='overlay-type-of-drink'onClick={() => setIsOpen(false)}>
        <div className='popup' onClick={() => alert('cluv')}>
            <h2>elige el tipo de producto</h2>
        </div>
    </div>
  )
}
