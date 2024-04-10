//cart section
import './cart.scss';
import React from 'react';
import CartProduct from './CartProduct/CartProducts';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { GradientText } from '../../../components/global/Gradient-Text-Redirect/GradientText';
import { GradientGreenBar } from '../../../components/partyUser/Gradient-Green-Bar/GradientGreenBar';
import { Header } from '../../../components/global/Header/Header';
import routes from '../../../models/routes.models';
import { Products_Categories } from '../../../components/global/Products_Categories/Products_Categories';
import Tabbar from '../../../components/partyUser/Tabbar/Tabbar';

const Cart = () => {
  const getPromotions = useSelector(
    (state) => state.partyUser.marketplace.promotions
  );
  const navigate = useNavigate();
  const getCart = useSelector((state) => state.partyUser.marketplace.cart);

  return (
    <>
      <Header backbutton={() => navigate(routes.partyUser.cart)} />
      <div className="cart-container layout-primary">
        <div className="cart-container__products">
          {getCart?.map((e) => (
            <CartProduct
              key={e.nameDrink}
              id={e.nameDrink}
              name={e.nameDrink}
              price={e.finalPriceDrink * e.amount}
              amount={e.amount}
              image={e.imageDrink}
              type={e.typeDrink}
            />
          ))}
        </div>
        <div className="cart-container__more-drinks">
          <button
            className="btn-primary--l"
            onClick={() => navigate(routes.partyUser.marketplace)}
          >
            ¿Quieres agregar más bebidas?
          </button>
        </div>
        {getPromotions.length ? (
          <Products_Categories title={'promociones'} category={getPromotions} />
        ) : null}
        {getCart.length ? <GradientGreenBar action={'pay'} /> : <Tabbar />}
      </div>
    </>
  );
};
export default Cart;
