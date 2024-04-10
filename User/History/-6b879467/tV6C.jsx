import React from "react";
import "./input.scss";
export const Input = ({ props, prefix, onChange, label }) => {
  return (
    <div className="input-wrapper">
      {prefix && <span className="input-wrapper__prefix">{prefix}</span>}
      <div className="input-wrapper__background">
        <input
          id={label}
          onChange={onChange}
          placeholder={label}
          className={
            prefix ? "input-wrapper__input prefix" : "input-wrapper__input"
          }
          {...props}
        />
        <label htmlFor={label} class="input-wrapper__label">
          {label}
        </label>
      </div>
    </div>
  );
};
