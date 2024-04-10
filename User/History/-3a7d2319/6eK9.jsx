//cart section
import "./Cart.scss";
import React from "react";
import { CartProduct } from "./CartProducts";
import { useSelector } from "react-redux";
import { GradientText } from "../../components/Gradient-Text-Redirect/GradientText";
import { GradientGreenBar } from "../../components/Gradient-Green-Bar/GradientGreenBar";
import { Categories } from "../../components/Categories/Categories";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/global/Header/Header";

export const Cart = ({ setCategoryType }) => {
  const getPromotions = useSelector((state) => state.store.promotions);
  const navigate = useNavigate();
  const getCart = useSelector((state) => state.store.cart);
  const drinks = useSelector((state) => state.store.drinks);

  return (
    <>
      <Header title={"carrito"} party={true} backbutton={() => navigate(-1)} />
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
            text={"¿Te gustaria agregar otra bebida?"}
            redirect={() => navigate("/marketplace")}
          />
        </div>
        <div className="cart-promotions">
          {drinks.length ? (
            <Categories
              title={"Promociones"}
              category={drinks}
              setCategoryType={setCategoryType}
            />
          ) : null}
        </div>
        <GradientGreenBar action={"pay"} />
      </div>
    </>
  );
};
