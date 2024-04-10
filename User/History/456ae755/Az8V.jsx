//cart section
import './cart.scss';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import routes from '../../../models/routes.models';
import CartProduct from './CartProduct/CartProducts';
import noCart from '../../../assets/Fiestero/svg/cart.svg';

import Tabbar from '../../../components/partyUser/Tabbar/Tabbar';
import { Header } from '../../../components/global/Header/Header';
import { TabbarCashier } from '../../../components/cashier/Tabbar/TabbarCashier';
import { GradientGreenBar } from '../../../components/partyUser/Gradient-Green-Bar/GradientGreenBar';
import { Products_Categories } from '../../../components/global/Products_Categories/Products_Categories';

import { getCurrentUser } from '../../../redux/slices/global/user';
import {
  getPromotions,
  getCart
} from '../../../redux/slices/partyUser/marketplace';
// import { getCurrentClub } from '../../../redux/slices/partyUser/club';

const Cart = () => {
  const navigate = useNavigate();
  const allProducts = useSelector(
    (state) => state.partyUser.marketplace.products
  );
  const cart = useSelector(getCart);
  const promotions = allProducts.promociones?.bebidas;
  const currentUser = useSelector(getCurrentUser);

  const marketplaceURL =
    currentUser.rol === 'cashier'
      ? routes.cashier.pos
      : routes.partyUser.marketplace;

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(cart.filter((e) => e.category === 'comida'));
    // console.log(cart);
  }, []);

  return (
    <>
      <Header
        title={'Mi carrito'}
        backbutton={() => navigate(marketplaceURL)}
        card
      />
      <div className="cart-container layout-primary">
        <div className="cart-container__products-container">
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
                  loading="lazy"
                />
                <h3 className="heading-secondary-main">
                  Tu carrito está vacío
                </h3>
                <p className="cart-container__no-products__desc">
                  No has seleccionado productos aún
                </p>
              </div>
            )}
          </div>
          {cart.length > 4 && <div className="cart-container__shadow-filter" />}
        </div>
        <div className="cart-container__more-drinks">
          <button
            className="btn-primary--l"
            onClick={() => navigate(marketplaceURL)}
          >
            ¿Quieres agregar más bebidas?
          </button>
        </div>
        {promotions?.length ? (
          <Products_Categories
            title={'promociones'}
            category={promotions}
            searchInput=""
            smallCard
          />
        ) : null}
        {cart.length ? (
          <GradientGreenBar action={'pay'} />
        ) : currentUser.rol === 'cashier' ? (
          <TabbarCashier />
        ) : (
          <Tabbar />
        )}
      </div>
    </>
  );
};
export default Cart;
