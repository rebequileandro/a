import React from "react";
import "./menu-item.scss";
const MenuItem = ({ name, description, price }) => {
  return (
    <div className="menu-item">
      <div className="menu-item__item-top-container">
        <p className="menu-item__text">{name}</p>
        <p className="menu-item__text">${price}</p>
      </div>
      {description ? (
        <p className="menu-item__description">{description}</p>
      ) : null}
    </div>
  );
};

export default MenuItem;
