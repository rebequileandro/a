//cart products component
import React from 'react'
import './cart.scss'
import trash from '../../assets/Buttons/trash.svg'
import plus from '../../assets/Buttons/plus.svg'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/store/slices/storeProducts'

export const CartProduct = ({id, name, price, image}) => {
  const dispatch = useDispatch()
  
  return (
    <div className='cart-product'>
      <img className='product-image' src={image} alt="drink"/>
      <div>
        <h2 className='name'>{ name }</h2>
        <h2 className='price'>{price}</h2>
      </div>
      <div className='amount'>
        <img onClick={() => dispatch(removeFromCart(id))} src={trash} alt="trash"/>
        <h2>{1}</h2>
        <img src={plus} alt="plus"/>
      </div>
    </div>
  )
}
