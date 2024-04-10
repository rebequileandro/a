//product card
import React from 'react';
import './Card.scss';
import { addToCart } from '../../redux/store/slices/storeProducts';
import { useDispatch } from 'react-redux';

export const Card = ({image, name, price, oldPrice, id}) => {
    const dispatch = useDispatch()
  return (
    <div className='card'>
        <div className='tranparent-gradient'>
            <img src={image} alt="drink"/>
        </div>
        <div className='pink-gradient'>
            <h1>{name}</h1>
            <div className='prices'>
                {
                oldPrice && <h2 className='old-price'>${oldPrice}</h2>
                }
                <h2>${price}</h2>
            </div>
            <button 
                className='addTocart' 
                onClick={()=> dispatch(addToCart({ id }))}>
                añadir al carrito
            </button>
        </div>
    </div>
  )
}
