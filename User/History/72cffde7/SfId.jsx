import React from "react";
import "./checkbox.scss";
const Checkbox = ({ onChange, label }) => {
  return (
    <label className="checkbox-container">
      {label && label}
      <input
        className="checkbox-container__checkbox"
        type="checkbox"
        onChange={onChange}
      />
      <div className="checkbox-container__checkmark"></div>
    </label>
  );
};

export default Checkbox;
