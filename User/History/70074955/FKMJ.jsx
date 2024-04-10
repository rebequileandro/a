import React from 'react'
import './card.scss'
export const Card = ({image, name, price}) => {
  return (
    <div className='card'>
        <div className='tranparent-gradient'>

        </div>
        <div className='pink-gradient'>
            <button className='addTocart'>añadir al carrito</button>
        </div>
    </div>
  )
}
