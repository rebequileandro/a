import './Marketplace.scss';

import { useEffect, useState } from 'react';

import AdsSwiper from '../../../components/partyUser/AdsSwiper/AdsSwiper';

import { GradientGreenBar } from '../../../components/partyUser/Gradient-Green-Bar/GradientGreenBar';
import { Header } from '../../../components/global/Header/Header';
import InputDiv from '../../../components/global/InputDiv/InputDiv';
import OrderCard from '../../../components/partyUser/OrderCard/OrderCard';
import SearchPage from '../../../components/partyUser/SearchPage/SearchPage';
import { getAllDrinks } from '../../../redux/slices/partyUser/marketplace';
import { getCurrentClub } from '../../../redux/slices/partyUser/club';
import { getOrder } from '../../../redux/slices/partyUser/order';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Tabbar from '../../../components/partyUser/Tabbar/Tabbar';
import { Products_Categories } from '../../../components/global/Products_Categories/Products_Categories';
import NoStock from '../../../components/partyUser/NoStock/NoStock';
import Popup_Club from '../../../components/global/Popup_Club/Popup_Club';
import searchIcon from '../../../assets/global/search.svg';
function Marketplace({ setCategoryType }) {
  const dispatch = useDispatch();
  // const currentUser = useSelector(getCurrentUser);
  const currentClub = useSelector(getCurrentClub);
  const cart = useSelector((state) => state.partyUser.marketplace.cart);
  const getAllProducts = useSelector(
    (state) => state.partyUser.marketplace.products
  );
  const order = useSelector(getOrder);
  const [searchInput, setSearchInput] = useState('');
  const getDrinks = useSelector((state) => state.partyUser.marketplace.drinks);
  const getBottles = useSelector(
    (state) => state.partyUser.marketplace.bottles
  );
  const getPromotions = useSelector(
    (state) => state.partyUser.marketplace.promotions
  );

  const handleChange = (e) => {
    setSearchInput(e.target.value.toUpperCase());
  };

  useEffect(() => {
    dispatch(getAllDrinks(currentClub?._id));
  }, [currentClub?._id]);
  return (
    <>
      <Header
        party={currentClub?.nameParty}
        logoParty={currentClub?.imageParty}
        notification
      />
      <div className="layout-primary">
        {currentClub ? (
          <>
            <section className="section-searchBar-events">
              <form className="section-searchBar-events__form">
                <div className="section-searchBar-events__form__span">
                  <input
                    className="section-searchBar-events__form__input"
                    placeholder="Buscar"
                    type="text"
                    value={searchInput}
                    onChange={handleChange}
                  />
                  <img src={searchIcon} alt="search" />
                </div>
              </form>
            </section>
            <>
              {order?.length ? <OrderCard order={order} /> : <AdsSwiper />}
              {getDrinks.length ? (
                <Products_Categories
                  searchInput={searchInput}
                  title={'tragos'}
                  category={getDrinks}
                />
              ) : null}
              {getBottles.length ? (
                <Products_Categories
                  searchInput={searchInput}
                  title={'botellas'}
                  category={getBottles}
                />
              ) : null}
              {getPromotions.length ? (
                <Products_Categories
                  searchInput={searchInput}
                  title={'promociones'}
                  category={getPromotions}
                />
              ) : null}
            </>
          </>
        ) : (
          <Popup_Club />
        )}

        {cart.length ? (
          <GradientGreenBar action={'cart'} isAmount={true} />
        ) : (
          <Tabbar />
        )}
      </div>
    </>
  );
}

export default Marketplace;
