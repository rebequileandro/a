import React from "react";
import "./Input.scss";
const Input = ({ inputPops, onChange, label }) => {
  return (
    <>
      <label>{label}</label>

      <input className="input-gradient" {...inputPops} onChange={onChange} />
    </>
  );
};

export default Input;
