import React from 'react';
import './styles/Input.scss';
export interface InputInterface {}

const Input: React.FC<InputInterface> = () => {
  return (
    <div className="input">
      <input type="text" />
    </div>
  );
};

export default Input;
