import React from 'react';
import './event_card_main_page.scss';
export default function Event_Card_Main_Page({
  name,
  image,
  address,
  genre,
  handleClubSelection,
  id
}) {
  return (
    <div className="card-event-main" onClick={() => handleClubSelection(id)}>
      <div className="card-event-main__heading--container">
        <h4 className="card-event-main__heading--container__title">{name}</h4>
      </div>

      <div className="card-event-main__picture--container">
        <img src={image} alt={name} className="card-event-main__picture" />
      </div>
    </div>
  );
}
