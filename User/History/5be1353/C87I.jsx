import React from 'react';
import './event_card_browsePage.scss';
import ratingStar from '../../../assets/icons/icon_rating_star.svg';

export default function Event_card_browsePage({
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
    <div
      className="card-event-browse card-event-browse__bg "
      onClick={handleClick}
    >
      <div className="card-event-browse">
        <div className="card-event-browse__image--container">
          <img
            src={party?.imageParty}
            alt={party?.nameParty}
            className="card-event-browse__image"
            loading="lazy"
          />

          <div className="card-event-browse__genre--background">
            <h4 className="card-event-browse__genre">{party?.category} </h4>
          </div>
          <div className="card-event-browse__info">
            <h3 className="card-event-browse__title">{party?.nameParty}</h3>
            <h5 className="card-event-browse__address">
              {party?.addressParty}
            </h5>
          </div>
<<<<<<< HEAD
          {/* <div className="card-event-browse__score-container">
            <img src={ratingStar} alt="Star" />
            <p>4.5</p>
          </div> */}
=======
          <div className="card-event-browse__score-container">
            <img src={ratingStar} alt="Star" />
            <p>4.5</p>
          </div>
>>>>>>> qa
        </div>
      </div>
    </div>
  );
}
