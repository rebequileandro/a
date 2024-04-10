import React from "react";
import "./checkbox.scss";
const Checkbox = ({ onChange, value, label }) => {
  return (
    <label class="checkbox-container">
      {label && label}
      <input
        className="checkbox-container__checkbox"
        type="checkbox"
        onChange={onChange}
        value={value}
      />
      <div class="checkbox-container__checkmark"></div>
    </label>
  );
};

export default Checkbox;
