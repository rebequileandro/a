import React, { useState } from "react";
import "./checkbox.css";
import { PropTypes } from "prop-types";

const CheckBox = ({ onChange, checked, type, size, borderWidth }) => {
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
      } checkbox-xnodui--${
        size ? size : "medium"
      } checkbox-xnodui--border-width-${borderWidth ? borderWidth : "small"}`}
    />
  );
};

CheckBox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["s", "m", "l"]),
  borderWidth: PropTypes.oneOf(["s", "m", "l"]),
};

CheckBox.defaultProps = {
  checked: false,
  type: "primary",
  size: "m",
  borderWidth: "s",
};

export default CheckBox;
