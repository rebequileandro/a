import "./Marketplace.scss";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Categories } from "../../components/Categories/Categories";
import { GradientGreenBar } from "../../components/Gradient-Green-Bar/GradientGreenBar";
import { Header } from "../../components/global/Header/Header";
import { Loading } from "../../components/Loader/Loader";
import Tapbar from "../../components/Tapbar/Tapbar";
import { getAllDrinks } from "../../redux/store/slices/storeProducts";

export const Marketplace = ({ setCategoryType }) => {
  const currentClub = useSelector((state) => state.club);
  const getAllProducts = useSelector((state) => state.store.products);
  const getDinks = useSelector((state) => state.store.drinks);
  const getBottles = useSelector((state) => state.store.bottles);
  const getPromotions = useSelector((state) => state.store.promotions);
  const getCart = useSelector((state) => state.store.cart);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      getAllProducts[0]?.idParty !== currentClub._id ||
      !getAllProducts.length
    ) {
      dispatch(getAllDrinks(currentClub._id)).then(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, [currentClub._id]);

  return (
    <>
      <Header party={true} notification cart/>
      <div className="layout-marketplace">
        <div className="marketplace-container">
          {isLoading ? (
            <div className="loading-marketplace">
              <Loading />
            </div>
          ) : (
            <div className="marketplace-card-container">
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
            <Tapbar active="marketplace" />
        </div>
      </div>
    </>
  );
};
