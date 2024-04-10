import React from "react";
import "./checkbox.scss";
const Checkbox = ({ onChange, value, label }) => {
  return (
    <label class="checkbox-container">
      {label && label}
      <input className="checkbox-container__checkbox" type="checkbox" />
      <div class="checkmark"></div>
    </label>
  );
};

export default Checkbox;
