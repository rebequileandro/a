import React from "react";
import "./radio.css";
import { PropTypes } from "prop-types";

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

Radio.propTypes = {
  size: PropTypes.oneOf(["s", "m", "l"]),
};

Radio.defaultProps = {
  size: "m",
};

export default Radio;
