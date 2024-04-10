import React from 'react';
import './event_card_browsePage.scss';
export default function Event_card_browsePage({
  name,
  image,
  address,
  genre,
  handleClubSelection,
  id
}) {
  return (
    <div className="card-event-browse" onClick={() => handleClubSelection(id)}>
      <div className="card-event-browse__image--container">
        <img src={image} alt={name} className="card-event-browse__image" />
        <h3 className="card-event-browse__title">{name}</h3>
        <div className="card-event-browse__genre--background">
          <h4 className="card-event-browse__genre">{genre}</h4>
        </div>
        <h5 className="card-event-browse__address">{address}</h5>
      </div>
    </div>
  );
}
