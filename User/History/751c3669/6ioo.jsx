//cart section
import './cart.scss';
import React, { useEffect } from 'react';
import CartProduct from './CartProduct/CartProducts';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GradientGreenBar } from '../../../components/partyUser/Gradient-Green-Bar/GradientGreenBar';
import { Header } from '../../../components/global/Header/Header';
import routes from '../../../models/routes.models';
import { Products_Categories } from '../../../components/global/Products_Categories/Products_Categories';
import Tabbar from '../../../components/partyUser/Tabbar/Tabbar';
import { getCurrentUser } from '../../../redux/slices/global/user';
import {
  getPromotions,
  getCart
} from '../../../redux/slices/partyUser/marketplace';
import { resetStatesCheckout } from '../../../redux/slices/partyUser/checkout';
import noCart from '../../../assets/Fiestero/svg/cart.svg';
const Cart = () => {
  const promotions = useSelector(getPromotions);
  const cart = useSelector(getCart);
  const currentUser = useSelector(getCurrentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const marketplaceURL =
    currentUser.rol === 'cashier'
      ? routes.cashier.pos
      : routes.partyUser.marketplace;

  useEffect(() => {
    dispatch(resetStatesCheckout());
  }, []);

  return (
    <>
      <Header backbutton={() => navigate(marketplaceURL)} />
      <div className="cart-container layout-primary">
        <div className="cart-container__products">
          {cart.length ? (
            cart?.map((e) => (
              <CartProduct
                key={e._id}
                id={e._id}
                name={e.nameDrink}
                price={e.finalPriceDrink * e.amount}
                amount={e.amount}
                image={e.imageDrink}
                type={e.typeDrink}
              />
            ))
          ) : (
            <div className="cart-container__no-products">
              <img
                className="cart-container__no-products__image"
                src={noCart}
                alt="tu carrito esta vacio"
              />
              <p className="cart-container__no-products__desc">
                Tu carrito esta vacío
              </p>
            </div>
          )}
        </div>
        <div className="cart-container__more-drinks">
          <button
            className="btn-primary--l"
            onClick={() => navigate(marketplaceURL)}
          >
            ¿Quieres agregar más bebidas?
          </button>
        </div>
        {promotions.length ? (
          <Products_Categories
            title={'promociones'}
            category={promotions}
            searchInput=""
            smallCard
          />
        ) : null}
        {cart.length ? <GradientGreenBar action={'pay'} /> : <Tabbar />}
      </div>
    </>
  );
};
export default Cart;
