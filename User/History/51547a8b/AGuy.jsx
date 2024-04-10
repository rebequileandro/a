//products component
import React from 'react'
import './cart.scss'


export const CartProduct = ({id, name, price, amount}) => {
 
  return (
    <div className='cart-product'>
      <div>
        <h1>{ name }</h1>
        <h1>{price}</h1>
      </div>
    </div>
  )
}
