import React from "react";
import "./menu-button.scss";
const MenuButton = () => {
  return (
    <label className="menu-btn" htmlFor="menu-btn">
      <input type="checkbox" id="menu-btn" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default MenuButton;
