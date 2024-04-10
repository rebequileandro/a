import React, { useRef } from 'react';
import './ToggleSwitch.scss';
export const ToggleSwitch = ({
  size = 'default',
  checked,
  disabled,
  onChange
}) => {
  let displayStyle = checked ? 'btn-success' : 'btn-danger';

  const checkboxRef = useRef();
  const handleChange = (event) => {
    onChange(event);
    navigator.vibrate(100);
  };
  return (
    <button className="switch-container">
      <div
        className={`${size} switch-wrapper`}
        onClick={(e) => {
          e.preventDefault();
          checkboxRef.current.click();
        }}
      >
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => handleChange(e)}
          ref={checkboxRef}
          style={{ display: 'none' }}
        />
        <div className={`${displayStyle} switch`}>
          <div className="switch-handle" />
        </div>
      </div>
    </button>
  );
};
