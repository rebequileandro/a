import React from "react";
import "./menu-button.scss";
const MenuButton = () => {
  return (
    <>
      <input type="checkbox" id="checkbox" />
      <label for="checkbox" class="toggle">
        <div class="bar bar--top"></div>
        <div class="bar bar--middle"></div>
        <div class="bar bar--bottom"></div>
      </label>
    </>
  );
};

export default MenuButton;
