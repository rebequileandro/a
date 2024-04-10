//products component
import React from 'react'
import './cart.scss'
import trash from '../../assets/Buttons/trash.svg'
import plus from '../../assets/Buttons/plus.svg'

export const CartProduct = ({id, name, price, amount, image}) => {
 
  return (
    <div className='cart-product'>
      <div>
        <img src={image} alt="drink"/>
        <h2>{ name }</h2>
        <h2>{price}</h2>
      </div>
      <div className='amount'>
        <img src={trash} alt="trash"/>
        <h2>{amount}</h2>
        <img src={plus} alt="plus"/>
      </div>
    </div>
  )
}
