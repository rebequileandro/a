import React from 'react';
import './card.scss';
export const Card = ({image, name, price, oldPrice}) => {
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
            <div className='addTocart'>
                <span>añadir al carrito</span>
            </div>
        </div>
    </div>
  )
}
