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
import Popup_Alert from '../../../components/global/Popup_Alert/Popup_Alert';
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
  const getalcoholFree = useSelector(
    (state) => state.partyUser.marketplace.alcoholFree
  );

  //sortOrders va a renderizar y guardar las orders ordenadas según como definamos priorityOrderStages
  const [sortOrders, setSortOrders] = useState([]);
  //guardo en un array el status segun la prioridad en la que quiero que rendericen las ordenes
  const priorityOrderStages = [
    'ORDER_DELIVERED',
    'ORDER_READY',
    'GET_READY',
    'IN_PREPARATION',
    'ORDER_CONFIRMED',
    'PAYMENT_PENDING'
  ];

  let newOrders = [];

  useEffect(() => {
    if (!order.length) {
      newOrders = [];
    } else {
      //recorre las prioridades previamente definidas en orden e itera en cada una las ordenes verificando que coincidan
      priorityOrderStages.forEach((stage, i) => {
        order?.forEach((orderObj, i) => {
          //si coinciden las pusheo en el orden deseado a un array vacio llamdo newOrders
          if (orderObj.status == stage) {
            newOrders.push(orderObj);
          }
        });
      });
    }
    //y para poder renderizar las ordenes sorteadas, las actualizo en un local state
    newOrders && setSortOrders([...newOrders]);
  }, [order, orderStatus]);

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

  // useEffect(() => {
  //   window.addEventListener('focus', () => {
  //     getStatus();
  //   });
  // }, []);
  return (
    <>
      <Header
        party={currentClub?.nameParty}
        logoParty={currentClub?.imageParty}
        backbutton={() => navigate(routes.partyUser.home)}
        card
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
                <OrderCard order={sortOrders} />
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
                {getPacks.length ? (
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
                {getalcoholFree.length ? (
                  <Products_Categories
                    searchInput={searchInput}
                    title={'sin alcohol'}
                    category={getalcoholFree}
                  />
                ) : null}
              </section>
            </>
          </>
        ) : (
          <Popup_Alert
            title="Primero indicanos en qué lugar estás para poder ver el menú
          disponible."
          />
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
