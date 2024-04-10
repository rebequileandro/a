import React from 'react'
import './card.scss'
import testImage from '../../assets/Buttons/test-image.svg'
export const Card = ({image, name, price, oldPrice}) => {
  return (
    <div className='card'>
        <div className='tranparent-gradient'>
            <img src={testImage} alt="drink"/>
        </div>
        <div className='pink-gradient'>
            <h1>{name}</h1>
            <div className='prices'>
                {
                oldPrice && <h2>${oldPrice}</h2>
                }
                <h2>${price}</h2>
            </div>
            <button className='addTocart'>añadir al carrito</button>
        </div>
    </div>
  )
}
