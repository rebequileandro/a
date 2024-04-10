import React from "react";
import "./menu-item.scss";
const MenuItem = ({ name, description, price }) => {
  return (
    <div className="menu-item">
      <div className="menu-item__item">
        <p className="menu-item__data-list">{name}</p>
        <p className="menu-item__data-list">${price}</p>
      </div>
      <p className="menu-item__description">{description}</p>
    </div>
  );
};

export default MenuItem;
