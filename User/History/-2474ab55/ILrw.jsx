import React from 'react';
import './event_card_main_page.scss';
import ratingStar from '../../../assets/icons/icon_rating_star.svg';
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
    <div
      className="card-event-main card-event-main__bg card-event-main__bg"
      onClick={handleClick}
    >
      <div className="card-event-main">
        <div className="card-event-main">
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
          {/* <div className="card-event-main__score-container">
          <img src={ratingStar} alt="Star" />
          <p>4.5</p>
        </div> */}
        </div>
      </div>
    </div>
  );
}
