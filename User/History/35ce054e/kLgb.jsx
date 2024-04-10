import React from "react";
import "./card-primary.scss";
import "./card-primary.scss";
const CardPrimary = (props) => {
  return (
    <div className="card-primary">
      <div>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default CardPrimary;
