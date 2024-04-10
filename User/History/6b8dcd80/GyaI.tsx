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
      <label htmlFor="name" className="input-wrapper__label">
        Full Name
      </label>
      <input
        required
        className="input-wrapper__input"
        id="name"
        maxLength={40}
        placeholder="Full Name"
        {...prop}
      />
    </div>
  );
};

export default Input;
