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
import {
  getOrder,
  orderStatus,
  orderTimeout,
  paymentExpire,
  updateIntervalID,
  updateTimeLeft
} from '../../../redux/slices/partyUser/order';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Tabbar from '../../../components/partyUser/Tabbar/Tabbar';
import { Products_Categories } from '../../../components/global/Products_Categories/Products_Categories';
import NoStock from '../../../components/partyUser/NoStock/NoStock';
import Popup_Club from '../../../components/global/Popup_Club/Popup_Club';
import searchIcon from '../../../assets/global/search.svg';
import SearchBar from '../../../components/global/SearchBar/SearchBar';
import routes from '../../../models/routes.models';
import { useNavigate } from 'react-router-dom';
import Popup_Options from '../../../components/global/Popup_Options/Popup_Options';
import { getCurrentUser } from '../../../redux/slices/global/user';
import ORDER_STATUS from '../../../models/order-stages.model';

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
  const [popupNavHome, setPopUpNavHome] = useState(false);
  const getDrinks = useSelector((state) => state.partyUser.marketplace.drinks);
  const getBottles = useSelector(
    (state) => state.partyUser.marketplace.bottles
  );
  const getPromotions = useSelector(
    (state) => state.partyUser.marketplace.promotions
  );
  const getAdditionals = useSelector(
    (state) => state.partyUser.marketplace.additional
  );
  const handleRedirectToHome = () => {
    navigate(routes.partyUser.home);
    setPopUpNavHome(false);
  };
  const handleSearchMarketplace = (e) => {
    setSearchInput(e.target.value);
    e.preventDefault();
  };
  let goBack;
  document.addEventListener(
    'backbutton',
    (goBack = () => {
      if (cart.length) {
        setPopUpNavHome(true);
      } else {
        navigate(routes.partyUser.home);
      }
    })
  );
  useEffect(() => {
    dispatch(getAllDrinks(currentClub?._id));
    dispatch(
      orderStatus({
        idClientePayment: currentUser._id,
        idParty: currentClub?._id
      })
    );
  }, []);
  return (
    <>
      <Popup_Options
        isOpen={popupNavHome}
        option1={'Cancelar'}
        action1={() => setPopUpNavHome(false)}
        option2={'Aceptar'}
        action2={handleRedirectToHome}
        text={'Al cambiar la fiesta se vaciara tu carrito'}
      />
      <Header
        party={currentClub?.nameParty}
        logoParty={currentClub?.imageParty}
        backbutton={
          cart.length
            ? () => setPopUpNavHome(true)
            : () => navigate(routes.partyUser.home)
        }
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
