import React, { useState } from 'react'
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
      type={type}
      />
      {isEdit && 
        <EditProduct 
          id={id} 
          price={oldPrice ? oldPrice : price} 
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
