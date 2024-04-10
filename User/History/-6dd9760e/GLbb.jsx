import React from "react";
import "./card-secondary.scss";
const CardSecondary = () => {
  return (
    <Link className="categories__item" to={item.link}>
      <img src={item.icon} alt="icon" />
      <div>
        <h4 className="heading-tertiary heading-tertiary--main">
          {item.title}
        </h4>
        <p>{item.text}</p>
      </div>
    </Link>
  );
};

export default CardSecondary;
