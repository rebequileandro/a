import React, { useState } from "react";
import "./toggle-switch.css";
const ToggleSwitch = ({ checked, onChange, size }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    onChange(e);
  };
  return (
    <div className="toggle-xnodui">
      <input
        onChange={handleChange}
        checked={isChecked}
        id="toggle-switch"
        type="checkbox"
      />
      <label className="toggle-xnodui-label" for="toggle-switch" />
    </div>
  );
};

export default ToggleSwitch;
