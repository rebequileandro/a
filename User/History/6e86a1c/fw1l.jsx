import React, { useState } from "react";
import "./toggle-switch.css";
import { PropTypes } from "prop-types";

const ToggleSwitch = ({ checked, onChange, size }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    onChange(e);
  };
  return (
    <div className={`toggle-xnodui toggle-xnodui--${size ? size : "m"}`}>
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

ToggleSwitch.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  size: PropTypes.oneOf(["s", "m", "l"]),
};

ToggleSwitch.defaultProps = {
  checked: false,
  size: "m",
};

export default ToggleSwitch;
