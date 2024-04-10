import React from "react";
import "./checkbox.scss";
const Checkbox = ({ onChange, value, label }) => {
  return (
    <label class="checkbox-container">
      {label && label}
      <input type="checkbox" />
      <div class="checkmark"></div>
    </label>
  );
};

export default Checkbox;
