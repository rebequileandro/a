//cart section
import './cart.scss';
import React from 'react';
import CartProduct from './CartProduct/CartProducts';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GradientText } from '../../../components/global/Gradient-Text-Redirect/GradientText';
import { Categories } from '../../../components/global/Categories/Categories';
import { GradientGreenBar } from '../../../components/partyUser/Gradient-Green-Bar/GradientGreenBar';
import { Header } from '../../../components/global/Header/Header';
import routes from '../../../models/routes.models';

const Cart = ({ setCategoryType }) => {
  const getPromotions = useSelector(
    (state) => state.partyUser.marketplace.promotions
  );
  const navigate = useNavigate();
  const getCart = useSelector((state) => state.partyUser.marketplace.cart);
  const drinks = useSelector((state) => state.partyUser.marketplace.drinks);

  return (
    <>
      <Header backbutton={() => navigate(-1)} />
      <div className="cart-container">
        <div className="cart-container-products">
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
        <div className="cart-more-drinks">
          <GradientText
            text={'¿Te gustaria agregar otra bebida?'}
            redirect={() => navigate(routes.partyUser.marketplace)}
          />
        </div>
        {drinks.length ? (
          <Categories
            title={'Promociones'}
            category={drinks}
            setCategoryType={setCategoryType}
          />
        ) : null}
        <GradientGreenBar action={'pay'} />
      </div>
    </>
  );
};
export default Cart;
