import React, { useState } from "react";
import "./checkbox.css";
import { PropTypes } from "prop-types";

const CheckBox = ({ onChange, checked, type, size }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    onChange(e);
  };
  return (
    <input
      onChange={handleChange}
      checked={isChecked}
      type="checkbox"
      className={`checkbox-xnodui checkbox-xnodui--${
        type ? type : "primary"
      } checkbox-xnodui--${size ? size : "medium"}`}
    />
  );
};

CheckBox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

CheckBox.defaultProps = {
  checked: false,
  type: "primary",
  size: "medium",
};

export default CheckBox;
