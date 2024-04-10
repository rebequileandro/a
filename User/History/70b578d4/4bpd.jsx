import React, { useState } from "react";
import "./checkbox.scss";
import { PropTypes } from "prop-types";

const CheckBox = ({ onChange, checked, type, size, borderWidth, id }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    onChange && onChange(e);
  };
  return (
    <input
      id={id}
      onChange={handleChange}
      checked={isChecked}
      type="checkbox"
      className={`checkbox-xnodui checkbox-xnodui--${
        type ? type : "primary"
      } checkbox-xnodui--${size} checkbox-xnodui--border-width-${borderWidth}`}
    />
  );
};

CheckBox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["s", "m", "l"]),
  borderWidth: PropTypes.oneOf(["s", "m", "l"]),
  id: PropTypes.string,
};

CheckBox.defaultProps = {
  checked: false,
  type: "primary",
  size: "m",
  borderWidth: "m",
};

export default CheckBox;
