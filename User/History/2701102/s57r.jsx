import React, { useState } from "react";
import "./radio.css";
import { PropTypes } from "prop-types";

const Radio = ({ size, id, checked, onChange, borderWidth }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    onChange(e);
  };
  return (
    <label
      for={id}
      className={`radio-button-xnodui radio-button-xnodui--${
        size ? size : "m"
      }`}
    >
      <input
        onChange={handleChange}
        id={id}
        name="radio-group"
        type="radio"
        checked={isChecked}
      />
      <span className="radio-checkmark-xnodui"></span>
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
};

export default Radio;
