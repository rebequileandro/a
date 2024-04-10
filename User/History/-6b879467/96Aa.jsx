import React from "react";
import "./input.scss";
export const Input = ({ props }) => {
  return (
    <div className="input-wrapper">
      <input {...props} />
    </div>
  );
};
