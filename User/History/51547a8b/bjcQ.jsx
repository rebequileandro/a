//products component
import React from 'react'
import './cart.scss'


export const CartProduct = ({id, name, price, amount}) => {
 
  return (
    <div className='cart-product'>
      <div>
        <h2>{ name }</h2>
        <h2>{price}</h2>
      </div>
      <div>
        <h2>{amount}</h2>
      </div>
    </div>
  )
}
