import React from "react";

interface InputInterface {
  type: string;
  name: string;
  placeHolder: string;
  value: string;
  onChange: (e: any) => void;
}
const Input: React.FC<InputInterface> = (prop) => {
  return <div>Input</div>;
};

export default Input;
