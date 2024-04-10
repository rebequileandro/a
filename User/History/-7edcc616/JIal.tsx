import React from 'react';
import './styles/TextArea.scss';
export interface TextAreaInterface {}

const TextArea: React.FC<TextAreaInterface> = () => {
  return (
    <div className="textarea">
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
  );
};

export default TextArea;
