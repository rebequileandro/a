import React from 'react';
import './styles/Input.scss';
export interface InputInterface {
  type: string;
  name: string;
  value: string | undefined;
  onChange: () => void | undefined;
}

const Input: React.FC<InputInterface> = (prop) => {
  return (
    <div className="input-wrapper">
      <input
        className="input-wrapper__inp"
        name={prop.name}
        type={prop.type}
        value={prop.value}
        onChange={prop.onChange}
      />
    </div>
  );
};

export default Input;
