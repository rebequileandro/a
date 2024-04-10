import "./SectionDetails.scss";

import React, { useEffect, useState } from "react";

import { Card } from "../../Card/Card";
import { GradientGreenBar } from "../Gradient-Green-Bar/GradientGreenBar";
import { Header } from "../Header/Header";
import Tapbar from "../Tapbar/Tapbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const SectionDetails = ({ categoryType }) => {
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const getDinks = useSelector((state) => state.store.drinks);
  const getBottles = useSelector((state) => state.store.bottles);
  const getPromotions = useSelector((state) => state.store.promotions);
  const getCart = useSelector((state) => state.store.cart);
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
        cart
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
          <Tapbar active="marketplace" />
      </div>
    </>
  );
};
