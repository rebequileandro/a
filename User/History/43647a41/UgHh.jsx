import './Marketplace.scss';

import { useEffect, useState } from 'react';

import AdsSwiper from '../../../components/partyUser/AdsSwiper/AdsSwiper';
import { GradientGreenBar } from '../../../components/partyUser/Gradient-Green-Bar/GradientGreenBar';
import { Header } from '../../../components/global/Header/Header';
import OrderCard from '../../../components/partyUser/OrderCard/OrderCard';
import { getAllDrinks } from '../../../redux/slices/partyUser/marketplace';
import { getCurrentClub } from '../../../redux/slices/partyUser/club';
import { getOrder, orderStatus } from '../../../redux/slices/partyUser/order';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Tabbar from '../../../components/partyUser/Tabbar/Tabbar';
import { Products_Categories } from '../../../components/global/Products_Categories/Products_Categories';
import Popup_Club from '../../../components/global/Popup_Club/Popup_Club';
import SearchBar from '../../../components/global/SearchBar/SearchBar';
import routes from '../../../models/routes.models';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../../redux/slices/global/user';
import { getAllDanceFloor } from '../../../redux/slices/partyUser/checkout';

function Marketplace({ setCategoryType }) {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);
  const navigate = useNavigate();
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
  const getPacks = useSelector((state) => state.partyUser.marketplace.packs);
  const getAdditionals = useSelector(
    (state) => state.partyUser.marketplace.additional
  );

  const handleSearchMarketplace = (e) => {
    setSearchInput(e.target.value);
    e.preventDefault();
  };
  const getStatus = () => {
    dispatch(
      orderStatus({
        idClientePayment: currentUser._id,
        idParty: currentClub?._id
      })
    );
  };
  useEffect(() => {
    dispatch(getAllDrinks(currentClub?._id));
    getStatus();
  }, []);

  //despacha la accion que trae las barras de cada club utilizando el id de currentCLub
  useEffect(() => {
    dispatch(getAllDanceFloor(currentClub?._id));
  }, [currentClub?._id]);

  useEffect(() => {
    window.addEventListener('focus', () => {
      getStatus();
      console.log('focusssssssss');
    });
  }, []);
  return (
    <>
      <Header
        party={currentClub?.nameParty}
        logoParty={currentClub?.imageParty}
        backbutton={() => navigate(routes.partyUser.home)}
        notification
      />
      <div className="layout-primary">
        {currentClub ? (
          <>
            <div className="searchBar-marketplace-margin">
              <SearchBar
                handleChange={handleSearchMarketplace}
                input={searchInput}
              />
            </div>

            <>
              {order?.length ? (
                <OrderCard order={order} />
              ) : searchInput ? null : (
                <AdsSwiper />
              )}
              <section className="marketplace-categories-section">
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
                {getBottles.length ? (
                  <Products_Categories
                    searchInput={searchInput}
                    title={'packs'}
                    category={getPacks}
                  />
                ) : null}
                {getPromotions.length ? (
                  <Products_Categories
                    searchInput={searchInput}
                    title={'promociones'}
                    category={getPromotions}
                  />
                ) : null}
                {getAdditionals.length ? (
                  <Products_Categories
                    searchInput={searchInput}
                    title={'sin alcohol'}
                    category={getAdditionals}
                  />
                ) : null}
              </section>
            </>
          </>
        ) : (
          <Popup_Club />
        )}
      </div>
      {cart.length ? (
        <GradientGreenBar action={'cart'} isAmount={true} />
      ) : (
        <Tabbar />
      )}
    </>
  );
}

export default Marketplace;
