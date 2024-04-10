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
      <input
        required
        className="input-wrapper__input"
        id="name"
        maxLength={40}
        placeholder="Full Name"
        {...prop}
      />
      <label htmlFor="name" className="form__label">
        Full Name
      </label>
    </div>
  );
};

export default Input;
