import React from "react";
import "./card-secondary.scss";
import { Link } from "react-router-dom";
const CardSecondary = (props) => {
  return (
    <Link className="card-secondary" to={props.link}>
      <img src={props.icon} alt="icon" />
      <div>
        <h4 className="heading-tertiary heading-tertiary--main">
          {props.title}
        </h4>
        <p>{props.text}</p>
      </div>
    </Link>
  );
};

export default CardSecondary;
