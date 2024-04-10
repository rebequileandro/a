import React from 'react';
import './styles/Input.scss';
export interface InputInterface {
  type: string;
  name: string;
  onChange: () => void | null;
}

const Input: React.FC<InputInterface> = (prop) => {
  return (
    <div className="input-wrapper">
      <input className="input-wrapper__inp" {...prop} />
    </div>
  );
};

export default Input;
