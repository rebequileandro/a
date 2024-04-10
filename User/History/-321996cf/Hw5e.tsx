import React from "react";
import "./input.scss";
interface InputInterface {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  maxlength: string;
  onChange: (e: any) => void;
}
const Input: React.FC<InputInterface> = (props) => {
  return <input className="input-element" {...props} />;
};

export default Input;
