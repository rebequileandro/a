import "./SectionDetails.scss";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Header } from "../Header/Header";
import { Card } from "../Card/Card";
import { GradientGreenBar } from "../../partyUser/Gradient-Green-Bar/GradientGreenBar";
import Tabbar from "../../partyUser/Tabbar/Tabbar";

export const SectionDetails = ({ categoryType }) => {
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const getDinks = useSelector((state) => state.store.drinks);
  const getBottles = useSelector((state) => state.store.bottles);
  const getPromotions = useSelector((state) => state.store.promotions);
  const cart = useSelector((state) => state.store.cart);
  useEffect(() => {
    if (categoryType === "drink") {
      setDetails(getDinks);
      setTitle("tragos");
    }
    if (categoryType === "bottle") {
      setDetails(getBottles);
      setTitle("botellas");
    }
    if (categoryType === "promotions") {
      setDetails(getPromotions);
      setTitle("promociones");
    }
  }, [categoryType]);
  return (
    <>
      <Header
        party={"bresh"}
        notification={true}
        backbutton={() => navigate(-1)}
      />
      <div className="container-details-categories">
        <div className="section">
          <h2>{title}</h2>
        </div>
        <div className="container-drinks">
          {details?.map((e) => {
            if (JSON.parse(e.activeDrink) === true)
              return (
                <Card
                  key={e.nameDrink}
                  add={true}
                  image={e.imageDrink}
                  name={e.nameDrink}
                  oldPrice={
                    e.priceDrink.toString() === e.finalPriceDrink.toString()
                      ? false
                      : e.priceDrink
                  }
                  discount={e.discountDrink}
                  status={e.activeDrink}
                  price={e.finalPriceDrink}
                  type={e.typeDrink}
                  amount={e.amount}
                  id={e.nameDrink}
                />
              );
          })}
        </div>
        {cart.length ? (
          <GradientGreenBar action={"cart"} isAmount={true} />
        ) : (
          <Tabbar/>
        )}
      </div>
    </>
  );
};
