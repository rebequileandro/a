import React from 'react';
import './styles/Input.scss';
export interface InputInterface {
  type: string;
  value: string;
  onChange: () => void;
}

const Input: React.FC<InputInterface> = (prop) => {
  return (
    <div className="Input">
      <input type={prop.type} value={prop.value} onChange={prop.onChange} />
    </div>
  );
};

export default Input;
