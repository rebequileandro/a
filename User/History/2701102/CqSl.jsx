import React from "react";
import "./radio.css";
import { PropTypes } from "prop-types";

const Radio = ({ size, id }) => {
  return (
    <label
      for={id}
      className={`radio-button-xnodui radio-button-xnodui--${
        size ? size : "m"
      }`}
    >
      <input id={id} name="radio-group" type="radio" />
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
