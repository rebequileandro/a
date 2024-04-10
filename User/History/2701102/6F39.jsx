import React, { useState } from "react";
import "./radio.css";
import { PropTypes } from "prop-types";

const Radio = ({
  size,
  id = "input-radio",
  checked,
  onChange,
  borderWidth,
}) => {
  const [isChecked, setIsChecked] = useState(checked ?? false);
  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    onChange(e);
  };
  console.log(isChecked);
  return (
    <label
      htmlFor={id}
      className={`radio-button-xnodui radio-button-xnodui--${
        size ? size : "m"
      }`}
    >
      <input
        onChange={handleChange}
        id={id}
        name="radio-group"
        type="radio"
        value={isChecked}
      />
      <span
        className={`radio-checkmark-xnodui radio-checkmark-xnodui--border-width-${
          borderWidth ? borderWidth : "m"
        }`}
      ></span>
    </label>
  );
};

Radio.propTypes = {
  borderWidth: PropTypes.oneOf(["s", "m", "l"]),
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  size: PropTypes.oneOf(["s", "m", "l"]),
  id: PropTypes.string,
};

Radio.defaultProps = {
  size: "m",
  borderWidth: "m",
};

export default Radio;
