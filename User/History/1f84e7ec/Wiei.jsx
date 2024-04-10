//cart products component
import React from 'react'
import './Cart.scss'
import trash from '../../assets/buttons/trash.svg'
import plus from '../../assets/buttons/plus.svg'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/store/slices/storeProducts'

export const CartProduct = ({id, name, price, image, amount, type}) => {
  const dispatch = useDispatch()
  
  return (
    <div className='cart-product'>
      <div className='product'>
        {type === 'packs' ?
          <div className='packs-image'>
            {image?.map(e => (
              <img key={e} src={e} alt="pack"/>
            ))}
          </div>
          :
         <img className={type === 'bottle' ? "bottles-image" : 'product-image'} src={image} alt="drink"/>
        }
        <div>
          <h2 className='name'>{ name }</h2>
          <h2 className='price'>${price}</h2>
        </div>
      </div>
      <div className='amount'>
        <img onClick={() => dispatch(removeFromCart(id))} src={trash} alt="trash"/>
        <h2>{amount}</h2>
        <img onClick={() => dispatch(addToCart({id}))} src={plus} alt="plus"/>
      </div>
    </div>
  )
}
