import React from "react";
import "./card-primary.scss";
import "./card-primary.scss";
import { Play } from "../../SVG";
const CardPrimary = (props) => {
  return (
    <div className="card-primary">
      <div className="card-primary__content-container">
        <p className="text-primary">{props.title}</p>
        <button className="card-primary__button">
          <Play />
        </button>
      </div>
    </div>
  );
};

export default CardPrimary;
