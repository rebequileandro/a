import React from "react";
import "./toggle-switch.scss";
const ToggleSwitch = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleSwitch;
