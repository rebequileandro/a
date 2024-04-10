import React from "react";
import "./card-secondary.scss";
import { Link } from "react-router-dom";
const CardSecondary = (props) => {
  const { Icon } = props;
  return (
    <Link className="card-secondary" to={props.link}>
      <Icon />
      <div>
        <h4 className="heading-tertiary heading-tertiary--main">
          {props.title}
        </h4>
        <p className="text-primary">{props.text}</p>
      </div>
    </Link>
  );
};

export default CardSecondary;
