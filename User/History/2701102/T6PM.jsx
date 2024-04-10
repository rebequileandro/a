import React from "react";
import "./radio.css";
const Radio = ({ size }) => {
  return (
    <label
      className={`radio-button-xnodui radio-button-xnodui--${
        size ? size : "m"
      }`}
    >
      <input id="option1" name="radio-group" type="radio" />
      <span className="radio-checkmark-xnodui"></span>
    </label>
  );
};

export default Radio;
