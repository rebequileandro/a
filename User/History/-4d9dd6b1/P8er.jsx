import React from 'react';
import './event_card_discount.scss';
export default function Event_Card_Discount({
  party,
  handleClubSelection,
  check
}) {
  const handleClick = () => {
    if (check(party)) {
      setPopup(party);
    } else {
      handleClubSelection(party);
    }
  };
  return (
    <div className="card-event-discount" onClick={handleClick}>
      <div className="card-event-discount__picture--container">
        <img
          src={party.imageParty}
          alt={party.nameParty}
          className="card-event-discount__picture"
        />
        <div className="card-event-discount__heading--container">
          <h4 className="card-event-discount__heading--container__title">
            {party.nameParty}
          </h4>
        </div>
      </div>
      <p className="card-event-discount__offer">
        {party.discount[0]?.nameDiscount}
      </p>
      <p className="card-event-discount__offer__description">
        {party.discount[0]?.description}
      </p>
    </div>
  );
}
