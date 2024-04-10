import React from "react";
import "./textarea.scss";
const TextArea = ({ inputProps, label }) => {
  return (
    <div className="text-area">
      {label && (
        <div className="text-area__label-wrapper">
          <label className="text-area">{label}</label>
        </div>
      )}
      <div className={`text-area__wrapper ${error && "error"}`}>
        <div className="text-area__wrapper-bg">
          <textarea {...inputProps} className="text-area__input-area" />
        </div>
      </div>
    </div>
  );
};

export default TextArea;
