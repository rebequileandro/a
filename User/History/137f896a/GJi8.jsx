import React, { useState } from "react";
import "./checkbox.css";
import { PropTypes } from "prop-types";

const CheckBox = ({ onChange, checked, type }) => {
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
      className={
        type === "secondary" ? "checkbox-xnodui--secondary" : "checkbox-xnodui"
      }
    />
  );
};

CheckBox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "secondary"]),
};

CheckBox.defaultProps = {
  checked: false,
  type: "primary",
};

export default CheckBox;
