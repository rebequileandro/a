/* eslint-disable react/jsx-pascal-case */
import './Pos.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Header } from '../../../components/global/Header/Header';
import SearchBar from '../../../components/global/SearchBar/SearchBar';
import { TabbarCashier } from '../../../components/cashier/Tabbar/TabbarCashier';
import { GradientGreenBar } from '../../../components/partyUser/Gradient-Green-Bar/GradientGreenBar';
import { Products_Categories } from '../../../components/global/Products_Categories/Products_Categories';

import {
  getAllDrinks,
  getDrinks,
  getBottles,
  getPromotions,
  getCart,
  getPacks,
  getAlcoholFree
} from '../../../redux/slices/partyUser/marketplace';
import { getCurrentUser } from '../../../redux/slices/global/user';

export default function Pos() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  const drinks = useSelector(getDrinks);
  const bottles = useSelector(getBottles);
  const promotions = useSelector(getPromotions);
  const packs = useSelector(getPacks);
  const currentUser = useSelector(getCurrentUser);
  const cart = useSelector(getCart);
  const alcoholFree = useSelector(getAlcoholFree);
  useEffect(() => {
    dispatch(getAllDrinks(currentUser.idParty));
  }, []);

  return (
    <>
      <Header settings />
      <div className="pos layout-primary">
        <SearchBar
          input={search}
          handleChange={(e) => setSearch(e.target.value)}
        />
        {promotions.length ? (
          <Products_Categories
            searchInput={search}
            title={'promociones'}
            category={promotions}
          />
        ) : null}
        {drinks.length ? (
          <Products_Categories
            searchInput={search}
            title={'tragos'}
            category={drinks}
          />
        ) : null}

        {bottles.length ? (
          <Products_Categories
            searchInput={search}
            title={'botellas'}
            category={bottles}
          />
        ) : null}

        {packs.length ? (
          <Products_Categories
            searchInput={search}
            title={'packs'}
            category={packs}
          />
        ) : null}
        {alcoholFree.length ? (
          <Products_Categories
            searchInput={search}
            title={'sin alcohol'}
            category={alcoholFree}
          />
        ) : null}
      </div>
      {cart.length ? (
        <GradientGreenBar action="cart" isAmount={true} />
      ) : (
        <TabbarCashier />
      )}
    </>
  );
}
