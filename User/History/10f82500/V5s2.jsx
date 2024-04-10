import "./Marketplace.scss";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Categories } from "../../components/Categories/Categories";
import { GradientGreenBar } from "../../components/Gradient-Green-Bar/GradientGreenBar";
import { Header } from "../../components/Header/Header";
import { Loading } from "../../components/Loader/Loader";
import Tapbar from "../../components/Tapbar/Tapbar";
import { getAllDrinks } from "../../redux/store/slices/storeProducts";

export const Marketplace = ({setCategoryType}) => {
  const currentClub = useSelector(state => state.club)
  const getDinks = useSelector((state) => state.store.drinks);
  const getBottles = useSelector((state) => state.store.bottles);
  const getPromotions = useSelector((state) => state.store.promotions);
  const getCart = useSelector((state) => state.store.cart);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllDrinks(currentClub._id)).then(() => setIsLoading(false));
  }, []);

  return (
    <div className="marketplace-container">
      <Header party={"bresh"} notification={"/notifications"} />
      {!getDinks.length ? (
        <div className="loading-marketplace">
          <Loading />
        </div>
      ) : (
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
        </div>
      )}
      {getCart.length ? (
        <GradientGreenBar action={"cart"} isAmount={true} />
      ) : (
        <Tapbar active="marketplace" />
      )}
    </div>
  );
};
