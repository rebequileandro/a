import React from "react";
import "./menu-button.scss";
const MenuButton = ({ className }) => {
  return (
    <label className={`menu-btn ${className ?? ""}`} htmlFor="burger">
      <input type="checkbox" id="burger" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default MenuButton;
