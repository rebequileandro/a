import React, { useState } from 'react'
import './ProductCardsOrganizer.scss'
import Edit from '../../../../assets/icons/Organizer/edit.svg'
import { EditProduct } from '../EditProduct/EditProduct'

export const ProductCardsOrganizer = ({image, name, price, oldPrice, edit, id, status, discount, type}) => {
  const [isEdit, setIsEdit] = useState(false)
  return (
    <>
      {isEdit && 
        <EditProduct 
          id={id} 
          price={oldPrice} 
          image={image} 
          name={name} 
          setIsEdit={setIsEdit} 
          discount={discount} 
          status={status}
          type={type}
          />}
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
          {price && <div className='prices'>
              {
                oldPrice && <h2 className='old-price'>${oldPrice}</h2>
              }
              <h2>${price}</h2>
          </div>}
      </div>
    </div>
    </>
  )
}
