import React from 'react';
import './styles/TextArea.scss';
export interface TextAreaInterface {
  name: string;
}

const TextArea: React.FC<TextAreaInterface> = (prop) => {
  return (
    <div className="textarea-wrapper">
      <textarea className="textarea-wrapper__input-area" {...prop} />
    </div>
  );
};

export default TextArea;
