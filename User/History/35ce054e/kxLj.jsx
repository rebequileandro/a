import React from "react";
import "./card-primary.scss";
import "./card-primary.scss";
import { Play } from "../../SVG";
const CardPrimary = (props) => {
  return (
    <div className="card-primary">
      <div className="card-primary__content-container">
        <span className="text-primary card-primary__title">{props.title}</span>
        <button className="card-primary__button">
          <Play />
        </button>
      </div>
    </div>
  );
};

export default CardPrimary;
