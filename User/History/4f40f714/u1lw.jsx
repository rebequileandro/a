import React from "react";
import "./menu-button.scss";
const MenuButton = () => {
  return (
    <label for="checkbox" className="toggle">
      <input type="checkbox" id="checkbox" />
      <div class="bar bar--top"></div>
      <div class="bar bar--middle"></div>
      <div class="bar bar--bottom"></div>
    </label>
  );
};

export default MenuButton;
