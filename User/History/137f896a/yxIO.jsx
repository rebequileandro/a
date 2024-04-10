import React from "react";
import "./checkbox.css";
import { PropTypes } from "prop-types";

const CheckBox = ({ onChange, checked }) => {
  return (
    <input
      onChange={onChange}
      checked={checked}
      type="checkbox"
      className="checkbox-xnodui"
    />
  );
};

CheckBox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

CheckBox.defaultProps = {
  checked: false,
};

export default CheckBox;
