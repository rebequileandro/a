import React from "react";
import "./textarea.scss";
export const TextArea = ({ props, onChange }) => {
  return (
    <div className="textarea-wrapper">
      <div className="textarea-wrapper__background">
        <textarea
          onChange={onChange}
          className="textarea-wrapper__input"
          {...props}
        />
      </div>
    </div>
  );
};
