import "./Marketplace.scss";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Categories } from "../../components/Categories/Categories";
import { GradientGreenBar } from "../../components/Gradient-Green-Bar/GradientGreenBar";
import { Header } from "../../components/Header/Header";
import { getAllDrinks } from "../../redux/store/slices/storeProducts";
import { Loading } from "../../components/Loader/Loader";
export const Marketplace = ({
  id = "629a77f4f9e1a51b23698943",
  setCategoryType,
}) => {
  const getDinks = useSelector((state) => state.store.drinks);
  const getBottles = useSelector((state) => state.store.bottles);
  const getPromotions = useSelector((state) => state.store.promotions);
  const getCart = useSelector((state) => state.store.cart);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    dispatch(getAllDrinks(id))
    .then(() => setIsLoading(false));
  }, []);
  
  return (
    <div className="marketplace-container">
      <Header
        backbutton={"/home"}
        party={"bresh"}
        notification={"/notifications"}
      />
        {isLoading ? 
            <div className="loading-marketplace">
              <Loading/> 
            </div>
          :
      <div className="categories">
        {getDinks.length ? (
          <Categories
            title={"tragos"}
            setCategoryType={setCategoryType}
            category={getDinks}
          />
        ) : null}
        {getBottles.length ? (
          <Categories
            title={"botellas"}
            setCategoryType={setCategoryType}
            category={getBottles}
          />
        ) : null}
        {getPromotions.length ? (
          <Categories
            title={"promociones"}
            setCategoryType={setCategoryType}
            category={getPromotions}
          />
        ) : null}
      </div>}
      {getCart.length ? (
        <GradientGreenBar action={"cart"} isAmount={true} />
      ) : (
        <h1>tabbar</h1>
      )}
    </div>
  );
};
