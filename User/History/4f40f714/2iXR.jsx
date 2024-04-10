import React from "react";
import "./menu-button.scss";
const MenuButton = () => {
  return (
    <label className="menu-btn" htmlFor="burger">
      <input type="checkbox" id="burger" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default MenuButton;
