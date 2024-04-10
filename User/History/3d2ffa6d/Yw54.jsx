//cart products component
import React from 'react';
import './cart-product.scss';
import trash from '../../../../assets/buttons/trash.svg';
import plus from '../../../../assets/buttons/plus.svg';
import { useDispatch } from 'react-redux';
import {
  addToCart,
  removeFromCart
} from '../../../../redux/slices/partyUser/marketplace';

const CartProduct = ({ id, name, price, image, amount, type }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-product-card">
      <div className="cart-product-card__product-information">
        {type === 'packs' ? (
          <div className="cart-product-card__packs-image-wrapper ">
            {image?.map((img) => (
              <img className="pack-image" key={img} src={img} alt="pack" />
            ))}
          </div>
        ) : (
          <img
            className="cart-product-card__product-image"
            src={image}
            alt="drink"
          />
        )}
        <div>
          <h3 className="heading-tertiary-main">{name}</h3>
          <h3 className="heading-tertiary-main">${price}</h3>
        </div>
      </div>
      <div className="amount">
        <img
          onClick={() => dispatch(removeFromCart(id))}
          src={trash}
          alt="trash"
        />
        <h3 className="heading-tertiary-sub">{amount}</h3>
        <img
          onClick={() => dispatch(addToCart({ id }))}
          src={plus}
          alt="plus"
        />
      </div>
    </div>
  );
};
export default CartProduct;
