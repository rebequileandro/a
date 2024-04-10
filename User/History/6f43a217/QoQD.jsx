import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentClub } from '../../../redux/slices/partyUser/club';
import './event_card_main_page.scss';
export default function Event_Card_Main_Page({ party, handleClubSelection }) {
  const currentClub = useSelector(getCurrentClub);
  const handleClick = () => {
    if (currentClub.id !== party.id) handleClubSelection(party);
  };
  return (
    <div className="card-event-main" onClick={handleClick}>
      <div className="card-event-main__heading--container">
        <h4 className="card-event-main__heading--container__title">
          {party.nameParty}
        </h4>
      </div>

      <div className="card-event-main__picture--container">
        <img
          src={party.imageParty}
          alt={party.nameParty}
          className="card-event-main__picture"
        />
      </div>
    </div>
  );
}
