import React from "react";
import "./bzrp_tour_card.scss";
import { formatDate } from "../../utils/format-date";
const BzrpTourCard = (props) => {
  return (
    <button
      title={`Bizarrap Show ${formatDate(props.date)}`}
      className="tour-card__item"
      onClick={props.onClick}
    >
      <img
        title={`Bizarrap Show ${formatDate(props.date)} | ${props.city} - ${
          props.country
        }`}
        src={props.portada}
        alt={`Bizarrap Show ${formatDate(props.date)}`}
        className="tour-card__item--image"
        loading="lazy"
      />
      {props.show}
    </button>
  );
};

export default BzrpTourCard;
