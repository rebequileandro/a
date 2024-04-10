import React from 'react';
import './textarea.scss';
const TextArea = ({ onChange, inputProps, label, error }) => {
  return (
    <div>
      <label>{label}</label>
      <div className={`text-area-wrapper ${error && 'error'}`}>
        <textarea
          {...inputProps}
          onChange={onChange}
          className="text-area-wrapper__text-area"
        />
      </div>
      {error && <p className="error">*{error}</p>}
    </div>
  );
};

export default TextArea;
