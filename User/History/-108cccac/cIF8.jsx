//product card
import React from 'react';
import './Card.scss';
import { addToCart } from '../../redux/store/slices/storeProducts';
import { useDispatch, useSelector } from 'react-redux';
import Edit from '../../assets/buttons/edit.svg'

export const Card = ({image, name, price, oldPrice, id, edit, add, setIsEdit}) => {
    const dispatch = useDispatch()
    const getCart = useSelector(state => state.store.cart)
  return (
    <div className='product-card-container'>
      <div className='tranparent-gradient'>
        {edit && 
        <button onClick={()=> setIsEdit(true)}  className='edit' >
            <img src={Edit} alt='edit'/>
        </button>}
            <img className='image' src={image} alt="drink"/>
      </div>
      <div className='pink-gradient'>
          <h1>{name}</h1>
          {price && 
          <div className='prices'>
              {oldPrice && 
              <h2 className='old-price'>${oldPrice}</h2>}
              <h2>${price}</h2>
          </div>}
        {add &&
          <button 
            className='addTocart' 
            onClick={()=> dispatch(addToCart({ id }))}>
            añadir al carrito
          </button>}
      </div>
    </div>
  )
}
