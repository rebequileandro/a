import React from "react";
import "./InputRange.scss";
const InputRange = (props) => {
  return <input className="input-range" type="range" {...props} />;
};

export default InputRange;
