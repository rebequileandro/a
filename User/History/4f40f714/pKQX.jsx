import React from "react";
import "./menu-button.scss";
const MenuButton = () => {
  return (
    <label htmlFor="menu-btn" className="menu-btn">
      <input type="checkbox" id="menu-btn" />
      <div className="bar bar--top"></div>
      <div className="bar bar--middle"></div>
      <div className="bar bar--bottom"></div>
    </label>
  );
};

export default MenuButton;
