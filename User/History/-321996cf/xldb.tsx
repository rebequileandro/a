import React from "react";
import "./input.scss";
interface InputInterface {
  type: string;
  name: string;
  placeHolder: string;
  value: string;
  onChange: (e: any) => void;
}
const Input: React.FC<InputInterface> = (props) => {
  return (
    <>
      <label>Show:</label>
      <input className="input-element" {...props} />;
    </>
  );
};

export default Input;
