import React from "react";
import "./checkbox.css";

const CheckBox = ({ onChange, value }) => {
  return (
    <input
      onChange={onChange}
      type="checkbox"
      className="checkbox-xnodui"
      value={value}
    />
  );
};

export default CheckBox;
