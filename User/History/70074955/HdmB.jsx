import React from 'react';
import './card.scss';
import { addToCart } from '../../redux/store/slices/cart';
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
                oldPrice && <h2>${oldPrice}</h2>
                }
                <h2>${price}</h2>
            </div>
            <div className='addTocart' onClick={()=> dispatch(addToCart(id))}>
                <span>añadir al carrito</span>
            </div>
        </div>
    </div>
  )
}
