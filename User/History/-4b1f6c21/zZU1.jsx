//product card
import React, { useEffect, useState } from 'react';
import './productCard.scss';
import {
  addToCart,
  removeFromCart
} from '../../../redux/slices/partyUser/marketplace';
import { useDispatch, useSelector } from 'react-redux';
import Edit from '../../../assets/buttons/edit.svg';
import less from '../../../assets/buttons/card_less.svg';
import plus from '../../../assets/buttons/card_plus.svg';
import trash from '../../../assets/buttons/card_trash.svg';
export const ProductCard = ({
  image,
  name,
  price,
  oldPrice,
  id,
  edit,
  add,
  setIsEdit,
  type
}) => {
  const dispatch = useDispatch();
  const [exists, setExists] = useState([]);
  const getCart = useSelector((state) => state.partyUser.marketplace.cart);
  useEffect(() => {
    let cartFilter = getCart.filter((e) => e.nameDrink === name);
    setExists(cartFilter);
  }, [getCart]);
  return (
    <div className="product-card-container">
      <div className="tranparent-gradient">
        {edit && (
          <button onClick={() => setIsEdit(true)} className="edit">
            <img src={Edit} alt="edit" />
          </button>
        )}
        {type === 'packs' ? (
          <div className="packs-image-container">
            {JSON.parse(image)?.map((element) => (
              <img
                key={element}
                className="pack-image image"
                src={element}
                alt="pack"
              />
            ))}
          </div>
        ) : (
          <img className="image" src={image} alt="drink" />
        )}
      </div>
      <div className="pink-gradient">
        <div className="text-addToCartSpace-compensation">
          <div className="product-name" id="wrapEllipsis">
            <h3 className="heading-tertiary-main heading-tertiary-main--upper">
              {name}
            </h3>
          </div>
          <p className="product-ml">300 ml.</p>
          {price && (
            <div className="prices">
              {oldPrice && <h3 className="old-price">${oldPrice}</h3>}
              <h3 className="heading-tertiary-sub">${price}</h3>
            </div>
          )}
        </div>
        {add ? (
          exists.length ? (
            <div className="addTocart">
              <button onClick={() => dispatch(removeFromCart(id))}>
                {exists[0].amount === 1 ? (
                  <img src={trash} alt="eliminar" />
                ) : (
                  <img src={less} alt="menos" />
                )}
              </button>
              <p>{exists[0].amount}</p>
              <button onClick={() => dispatch(addToCart({ id }))}>
                <img src={plus} alt="mas" />
              </button>
            </div>
          ) : (
            <button
              className="addTocart"
              onClick={() => dispatch(addToCart({ id }))}
            >
              Añadir al carrito
            </button>
          )
        ) : null}
      </div>
    </div>
  );
};
