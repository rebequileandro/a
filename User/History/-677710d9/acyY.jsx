import React from 'react'
import './ProductCardsOrganizer.scss'
import Edit from '../../../../assets/icons/Organizer/edit.svg'

export const ProductCardsOrganizer = ({image, name, price, oldPrice, edit}) => {
  return (
    <div className='product-card-container'>
      {edit && <img src={Edit} alt='edit'/>}
      <div className='tranparent-gradient'>
          <img src={image} alt="drink"/>
      </div>
      <div className='pink-gradient'>
          <h1>{name}</h1>
          {price && <div className='prices'>
              {
              oldPrice && <h2 className='old-price'>${oldPrice}</h2>
              }
              <h2>${price}</h2>
          </div>}
      </div>
  </div>
  )
}
