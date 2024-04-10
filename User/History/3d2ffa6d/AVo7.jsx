//cart products component
import React from 'react';
import './cart-product.scss';
import trash from '../../../../assets/buttons/card_trash.svg';
import plus from '../../../../assets/buttons/card_plus.svg';
import less from '../../../../assets/buttons/card_less.svg';

import { useDispatch } from 'react-redux';
import {
  addToCart,
  removeFromCart
} from '../../../../redux/slices/partyUser/marketplace';

const CartProduct = ({ id, name, price, image, amount, type }) => {
  const dispatch = useDispatch();
  const removeItem = () => {
    setTimeout(() => {
      dispatch(removeFromCart(id));
    }, 450);
  };
  return (
    <div className="cart-product-card">
      <div className="cart-product-card__product-information">
        <div className="cart-product-card__product-image-wrapper">
          {type === 'packs' ? (
            <div className="cart-product-card__packs-image-wrapper">
              {image?.map((img) => (
                <img
                  className="pack-image"
                  key={img}
                  src={img}
                  alt="pack"
                  loading="lazy"
                />
              ))}
            </div>
          ) : (
            <img
              className="cart-product-card__product-image"
              src={image}
              alt="drink"
              loading="lazy"
            />
          )}
        </div>
        <div>
          <h3 className="heading-tertiary-main--upper cart-product-card__product-name">
            {name}
          </h3>
          <h3 className="heading-tertiary-main">${price}</h3>
        </div>
      </div>
      <div className="cart-product-card__amount-controller">
        <button onClick={() => removeItem()}>
          {amount > 1 ? (
            <img className="buttons-img" src={less} alt="trash" />
          ) : (
            <img className="buttons-img" src={trash} alt="trash" />
          )}
        </button>
        <h3 className="heading-tertiary-sub">{amount}</h3>
        <button onClick={() => dispatch(addToCart({ id }))}>
          <img className="buttons-img" src={plus} alt="plus" />
        </button>
      </div>
    </div>
  );
};
export default CartProduct;
