import React from 'react';
import './textarea.scss';
const TextArea = ({ onChange, inputProps }) => {
  return (
    <div className="text-area-wrapper">
      <textarea
        {...inputProps}
        className="text-area-wrapper__text-area"
        name=""
        id=""
      ></textarea>
    </div>
  );
};

export default TextArea;
