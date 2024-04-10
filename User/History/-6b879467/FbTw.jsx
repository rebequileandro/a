import React from "react";
import "./input.scss";
export const Input = ({ props }) => {
  return (
    <div className="input-wrapper">
      <div className="input-wrapper__background">
        <input className="input-wrapper__input" {...props} />
      </div>
    </div>
  );
};
