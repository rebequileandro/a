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
      <input className="input-wrapper__inp" maxLength={1000} {...prop} />
      <label className="input-wrapper__label">First Name</label>
    </div>
  );
};

export default Input;
