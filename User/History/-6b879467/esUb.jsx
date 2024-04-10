import React from "react";
import "./input.scss";
export const Input = ({ props, prefix, onChange }) => {
  return (
    <div className="input-wrapper">
      {prefix && <span className="input-wrapper__prefix">{prefix}</span>}
      <div className="input-wrapper__background">
        <textarea
          onChange={onChange}
          className={
            prefix ? "input-wrapper__input prefix" : "input-wrapper__input"
          }
          {...props}
        />
      </div>
    </div>
  );
};
