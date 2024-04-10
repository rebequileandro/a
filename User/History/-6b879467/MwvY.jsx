import React from "react";
import "./input.scss";
export const Input = ({ props, prefix, onChange, error }) => {
  return (
    <div className="wrapper">
      <div className={`input-wrapper ${error && "error"}`}>
        {prefix && <span className="input-wrapper__prefix">{prefix}</span>}
        <div className="input-wrapper__background">
          <input
            onChange={onChange}
            className={
              prefix ? "input-wrapper__input prefix" : "input-wrapper__input"
            }
            {...props}
          />
        </div>
      </div>
      {error && (
        <div>
          <p className="wrapper__input-error">{error}</p>
        </div>
      )}
    </div>
  );
};
