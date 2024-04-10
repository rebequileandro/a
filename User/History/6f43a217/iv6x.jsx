import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ORDER_STATUS from '../../../models/order-stages.model';
import routes from '../../../models/routes.models';
import { getCurrentClub } from '../../../redux/slices/partyUser/club';
import { getOrder } from '../../../redux/slices/partyUser/order';
import './event_card_main_page.scss';
export default function Event_Card_Main_Page({
  party,
  handleClubSelection,
  setPopup,
  check
}) {
  const handleClick = () => {
    const checked = check(party);
    if (checked) {
      handleClubSelection(party);
    } else if (!checked) {
      setPopup(party);
    }
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
          loading="lazy"
        />
      </div>
    </div>
  );
}
