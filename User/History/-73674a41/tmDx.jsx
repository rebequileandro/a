import React from 'react';
import './event_card_browsePage.scss';
export default function Event_card_browsePage({ party, handleClubSelection }) {
  return (
    <div
      className="card-event-browse"
      onClick={() => handleClubSelection(party)}
    >
      <div className="card-event-browse__image--container">
        <img
          src={party.imageParty}
          alt={party.nameParty}
          className="card-event-browse__image"
        />
        <h3 className="card-event-browse__title">{party.nameParty}</h3>
        <div className="card-event-browse__genre--background">
          <h4 className="card-event-browse__genre">{'techno'}</h4>
        </div>
        <h5 className="card-event-browse__address">{party.addressParty}</h5>
      </div>
    </div>
  );
}
