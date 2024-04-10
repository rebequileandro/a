import React from "react";
import "./Input.scss";
const Input = ({ inputPops, onChange }) => {
  return (
    <div className="input-wrapper">
      <input
        className="input-wrapper__input"
        {...inputPops}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
