import React from "react";
import "./checkbox.css";

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

export default CheckBox;
