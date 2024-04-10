import React from 'react';
import './styles/TextArea.scss';
export interface TextAreaInterface {
  name: string;
}

const TextArea: React.FC<TextAreaInterface> = ({ name }) => {
  return (
    <div className="textarea">
      <textarea name={name} />
    </div>
  );
};

export default TextArea;
