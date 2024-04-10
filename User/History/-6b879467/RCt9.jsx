import React from "react";
import "./input.scss";
export const Input = ({ props, prefix }) => {
  return (
    <div className="input-wrapper">
      {prefix && <span className="input-wrapper__prefix">{prefix}</span>}
      <div className="input-wrapper__background">
        <input className="input-wrapper__input" {...props} />
      </div>
    </div>
  );
};
