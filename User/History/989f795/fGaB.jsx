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
import { getAllDrinks } from '../../../../redux/slices/partyUser/marketplace';
export default function VerMas_events() {
  const dispatch = useDispatch();
  const { eventsMainPage } = useSelector((store) => store.partyUser.activities);

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleClubSelection = (club) => {
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
        <section className="section-searchBar-events">
          <form className="section-searchBar-events__form">
            <div className="section-searchBar-events__form__span">
              <input
                className="section-searchBar-events__form__input"
                placeholder="Buscar"
                type="text"
                value={input}
                onChange={handleChange}
              />
              <img src={searchIcon} alt="search" />
            </div>
          </form>
        </section>
        <section className="section-browse-events">
          <div className="section-browse-events__card-container">
            {eventsMainPage
              .filter((party) => party.nameParty.toLowerCase().includes(input))
              ?.map((party) => {
                return (
                  <Event_card_browsePage
                    key={party._id}
                    party={party}
                    handleClubSelection={handleClubSelection}
                  />
                );
              })}
          </div>
        </section>
        <Tabbar />
      </div>
    </>
  );
}
