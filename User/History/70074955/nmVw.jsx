import React from 'react'
import './card.scss'
export const Card = ({image, name, price, oldPrice}) => {
  return (
    <div className='card'>
        <div className='tranparent-gradient'>

        </div>
        <div className='pink-gradient'>
            <h1>{name}</h1>
            <div>
                <h2>{}</h2>
                <h2>{price}</h2>
            </div>
            <button className='addTocart'>añadir al carrito</button>
        </div>
    </div>
  )
}
