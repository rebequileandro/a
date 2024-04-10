import React from "react";
import "./radio.css";
const Radio = () => {
  return (
    <div class="radio-wrapper">
      <label class="radio-button">
        <input id="option1" name="radio-group" type="radio" />
        <span class="radio-checkmark"></span>
        <span class="radio-label">Male</span>
      </label>
    </div>
  );
};

export default Radio;
