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
import { formatNumber } from '../../../utils/formatNumber';
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
    let cartFilter = getCart.filter((e) => e._id === id);
    setExists(cartFilter);
  }, [getCart]);
  const newprice = formatNumber(price);
  console.log(formatNumber(price));
  return (
    <div className="product-card-container">
      <div className="tranparent-gradient">
        {edit && (
          <button onClick={() => setIsEdit(true)} className="edit">
            <img src={Edit} alt="edit" loading="lazy" />
          </button>
        )}
        {type === 'packs' ? (
          <div className="packs-image-container">
            {image?.map((element) => (
              <img
                key={element}
                className="pack-image image"
                src={element}
                alt="pack"
                loading="lazy"
              />
            ))}
          </div>
        ) : (
          <img className="image" src={image} alt="drink" loading="lazy" />
        )}
      </div>
      <div className="pink-gradient">
        <div className="text-addToCartSpace-compensation">
          <div className="product-name">
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
                  <img src={trash} alt="eliminar" loading="lazy" />
                ) : (
                  <img src={less} alt="menos" loading="lazy" />
                )}
              </button>
              <p>{exists[0].amount}</p>
              <button onClick={() => dispatch(addToCart({ id }))}>
                <img src={plus} alt="mas" loading="lazy" />
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
