import React from "react";
import "./checkbox.css";

const CheckBox = ({ onChange }) => {
  return (
    <input onChange={onChange} type="checkbox" className="checkbox-xnodui" />
  );
};

export default CheckBox;
