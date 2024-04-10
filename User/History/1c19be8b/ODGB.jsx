import React from "react";
import "./menu-item.scss";
const MenuItem = ({ name, description, price }) => {
  return (
    <div>
      <div className="layout__item">
        <p className="layout__data-list">{name}</p>
        <p className="layout__data-list">${price}</p>
      </div>
      <p className="layout__description">{description}</p>
    </div>
  );
};

export default MenuItem;
