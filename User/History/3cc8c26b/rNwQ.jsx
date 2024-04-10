import React from "react";
import "./bzrp_tour_card.scss";
import { formatDate } from "../../utils/format-date";
const BzrpTourCard = (props) => {
  return (
    <button
      title={`Bizarrap Show ${formatDate(props.date)}`}
      className="tour-carousel__item--btn"
      onClick={props.onClick}
      // () => setPopup(e)
    >
      <img
        title={`Bizarrap Show ${formatDate(props.date)} | ${props.city} - ${
          props.country
        }`}
        src={props.portada}
        alt={`Bizarrap Show ${formatDate(props.date)}`}
        className="tour-carousel__item--image"
      />
      {props.city}
    </button>
  );
};

export default BzrpTourCard;
