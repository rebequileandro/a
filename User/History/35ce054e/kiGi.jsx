import React from "react";
import "./card-primary.scss";
import "./card-primary.scss";
const CardPrimary = (props) => {
  return (
    <div className="card-primary">
      <div className="card-primary__content-container">
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default CardPrimary;
