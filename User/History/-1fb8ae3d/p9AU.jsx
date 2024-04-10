import React from "react";
import "./textarea.scss";
export const TextArea = ({ props, prefix, onChange }) => {
  return (
    <div className="textarea-wrapper">
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
