import React from 'react'
import './ProductCardsOrganizer.scss'


export const ProductCardsOrganizer = ({image, name, price, oldPrice}) => {
  return (
    <div className='product-card-container'>
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
      </div>
  </div>
  )
}
