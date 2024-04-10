import React, { useState } from 'react'
import './ProductCardsOrganizer.scss'
import Edit from '../../../../assets/icons/Organizer/edit.svg'
import { EditProduct } from '../EditProduct/EditProduct'

export const ProductCardsOrganizer = ({image, name, price, oldPrice, edit, id}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='product-card-container'>
      <div className='tranparent-gradient'>
      {edit && <img onClick={()=> setIsOpen(true)} className='edit' src={Edit} alt='edit'/>}
          <img className='image' src={image} alt="drink"/>
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
      {isOpen && <EditProduct id={id}/>}
  </div>
  )
}
