import React from "react";
import "./radio.css";
const Radio = () => {
  return (
    <div class="radio-button">
      <input id="option1" name="radio-group" type="radio" />
      <span class="radio-checkmark"></span>
    </div>
  );
};

export default Radio;
