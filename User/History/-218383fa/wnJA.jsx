import React, { useState } from 'react'
import './ProductCardsOrganizer.scss'
import Edit from '../../../../assets/icons/Organizer/edit.svg'
import { EditProduct } from '../EditProduct/EditProduct'
import { Card } from '../../../../components/Card/Card'

export const ProductCardsOrganizer = ({image, name, price, oldPrice, edit, id, status, discount, type}) => {
  const [isEdit, setIsEdit] = useState(false)
  return (
    <>
    <Card
      image={image}
      name={name}
      price={price}
      oldPrice={oldPrice}
      edit={edit}
      setIsEdit={setIsEdit}
      />
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
    </>
  )
}
