import React from 'react';
import './styles/TextArea.scss';
export interface TextAreaInterface {
  name: string;
  placeHolder: string;
}

const TextArea: React.FC<TextAreaInterface> = (prop) => {
  return (
    <div className="textarea-wrapper">
      <textarea className="textarea-wrapper__input-area" {...prop} />
      <label htmlFor="name" className="input-wrapper__label">
        {prop.placeHolder}
      </label>
    </div>
  );
};

export default TextArea;
