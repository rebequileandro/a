import React from "react";
import "./radio.css";
const Radio = () => {
  return (
    <label className="radio-button-xnodui">
      <input id="option1" name="radio-group" type="radio" />
      <span className="radio-checkmark-xnodui"></span>
    </label>
  );
};

export default Radio;
