import React, { useState } from 'react';
import { ProductCard } from '../../../../components/global/Product_Card/Product_Card';
import { EditProduct } from '../EditProduct/EditProduct';

export const ProductCardsOrganizer = ({
  image,
  name,
  price,
  oldPrice,
  edit,
  id,
  status,
  discount,
  type
}) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <>
      <ProductCard
        image={image}
        name={name}
        price={price}
        oldPrice={oldPrice}
        edit={edit}
        setIsEdit={setIsEdit}
        type={type}
      />
      {isEdit && (
        <EditProduct
          id={id}
          price={oldPrice ? oldPrice : price}
          image={image}
          name={name}
          setIsEdit={setIsEdit}
          discount={discount}
          status={status}
          type={type}
        />
      )}
    </>
  );
};
