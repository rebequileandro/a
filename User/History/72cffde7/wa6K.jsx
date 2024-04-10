import React from "react";
import "./checkbox.scss";
const Checkbox = () => {
  return (
    <label class="container">
      <input type="checkbox" checked="checked" />
      <div class="checkmark"></div>
    </label>
  );
};

export default Checkbox;
