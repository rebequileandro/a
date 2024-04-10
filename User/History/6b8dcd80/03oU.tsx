import React from 'react';
import './styles/Input.scss';
export interface InputInterface {
  type: string;
  name: string;
  placeHolder: string;
  onChange: () => void | null;
}

const Input: React.FC<InputInterface> = (prop) => {
  return (
    <div className="input-wrapper">
      <input
        required
        className="input-wrapper__input"
        id={prop.name}
        minLength={3}
        maxLength={50}
        placeholder={prop.placeHolder}
        {...prop}
      />
      <label htmlFor={prop.name} className="input-wrapper__label">
        {prop.placeHolder}
      </label>
    </div>
  );
};

export default Input;
