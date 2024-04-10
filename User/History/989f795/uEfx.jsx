import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Event_card_browsePage from '../../../../components/partyUser/Event_card_browsePage/Event_card_browsePage';
import SearchBar_events from '../../../../components/partyUser/SearchBar-events/SearchBar_events';
import { Header } from '../../../../components/global/Header/Header';

import {
  getMainPageEvents,
  getMainPageEventsDiscount,
  getMainPageEventsHistory
} from '../../../../redux/slices/partyUser/activities';
import './verMas-events.scss';
import searchIcon from '../../../../assets/global/search.svg';
import Tabbar from '../../../../components/partyUser/Tabbar/Tabbar';
import { setClub } from '../../../../redux/slices/partyUser/club';
import {
  clearCart,
  getAllDrinks
} from '../../../../redux/slices/partyUser/marketplace';
import { useNavigate } from 'react-router-dom';
import routes from '../../../../models/routes.models';
import SearchBar from '../../../../components/global/SearchBar/SearchBar';
import Popup_Options from '../../../../components/global/Popup_Options/Popup_Options';
import {
  clearOrders,
  getOrder,
  paymentExpire
} from '../../../../redux/slices/partyUser/order';
import ORDER_STATUS from '../../../../models/order-stages.model';
export default function VerMas_events() {
  const dispatch = useDispatch();
  const orders = useSelector(getOrder);

  const { eventsMainPage } = useSelector((store) => store.partyUser.activities);
  const navigate = useNavigate();
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [inputSearchEvents, setinputSearchEvents] = useState('');

  const handleSearchEvents = (e) => {
    e.preventDefault();
    setinputSearchEvents(e.target.value);
  };
  const handleClubSelection = () => {
    let club = isOpenPopup;
    orders.map((order) => {
      if (order.status === ORDER_STATUS.PAYMENT_PENDING) {
        dispatch(paymentExpire(order.id));
      }
    });
    dispatch(clearCart());
    dispatch(clearOrders());

    dispatch(setClub(club));
    dispatch(getAllDrinks(club._id));
    navigate(routes.partyUser.marketplace);
  };
  useEffect(() => {
    dispatch(getMainPageEvents());
    dispatch(getMainPageEventsDiscount());
    dispatch(getMainPageEventsHistory());
  }, []);

  return (
    <>
      <Header notification />
      <div className="layout-primary">
        <div className="browse-events-searchBar-spacing">
          <SearchBar
            input={inputSearchEvents}
            handleChange={handleSearchEvents}
          />
        </div>

        <section className="section-browse-events">
          <div className="section-browse-events__card-container">
            {eventsMainPage
              .filter(
                (party) =>
                  //filters by name of the party
                  party.nameParty
                    .toLowerCase()
                    .includes(inputSearchEvents.toLowerCase()) ||
                  //filters by address of the party
                  party.addressParty
                    .toLowerCase()
                    .includes(inputSearchEvents.toLowerCase()) ||
                  //filters by category of the party eg. Techno
                  party.category
                    ?.toLowerCase()
                    .includes(inputSearchEvents.toLowerCase())
              )
              ?.map((party) => {
                return (
                  <Event_card_browsePage
                    key={party._id}
                    party={party}
                    handleClubSelection={setIsOpenPopup}
                  />
                );
              })}
          </div>
        </section>
        <Tabbar />
      </div>
      <Popup_Options
        isOpen={isOpenPopup}
        text="¿Estás seguro?"
        description="Al cambiar de discoteca perderás tu carrito y las órdenes pendientes de pago"
        option1="Cancelar"
        option2="Aceptar"
        action1={() => setIsOpenPopup(false)}
        action2={handleClubSelection}
      />
    </>
  );
}
