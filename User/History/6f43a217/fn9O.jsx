import React from 'react';
import './event_card_main_page.scss';
export default function Event_Card_Main_Page({ party, handleClubSelection }) {
  return (
    <div className="card-event-main" onClick={() => handleClubSelection(party)}>
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
