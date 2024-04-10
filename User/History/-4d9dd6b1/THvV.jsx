import React from 'react';
import './event_card_discount.scss';
export default function Event_Card_Discount({
  name,
  image,
  description,
  discount,
  handleClubSelection
}) {
  return (
    <div onClick={handleClubSelection} className="card-event-discount">
      <div className="card-event-discount__picture--container">
        <img src={image} alt={name} className="card-event-discount__picture" />
        <div className="card-event-discount__heading--container">
          <h4 className="card-event-discount__heading--container__title">
            {name}
          </h4>
        </div>
      </div>
      <p className="card-event-discount__offer">{discount}</p>
      <p className="card-event-discount__offer__description">{description}</p>
    </div>
  );
}
