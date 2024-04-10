import React from "react";
import "./card-secondary.scss";
const CardSecondary = (props) => {
  return (
    <Link className="categories__item" to={props.link}>
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
