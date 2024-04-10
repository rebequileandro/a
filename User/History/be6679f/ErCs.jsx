import React from 'react';
import './textarea.scss';
const TextArea = ({ onChange, inputProps }) => {
  return (
    <div className="text-area-wrapper">
      <textarea
        {...inputProps}
        onChange={onChange}
        className="text-area-wrapper__text-area"
      />
    </div>
  );
};

export default TextArea;
