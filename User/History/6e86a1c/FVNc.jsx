import React from "react";
import "./toggle-switch.css";
const ToggleSwitch = () => {
  return (
    <div class="toggle">
      <input id="toggle-switch" type="checkbox" />
      <label for="toggle-switch"></label>
    </div>
  );
};

export default ToggleSwitch;
