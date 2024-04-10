import React from 'react';
import './textarea.scss';
const TextArea = ({ onChange, inputProps, label, error }) => {
  return (
    <div className="text-area">
      {label ? (
        <div>
          <label className="text-area__label">{label}</label>
        </div>
      ) : null}
      <div className={`text-area__wrapper ${error && 'error'}`}>
        <textarea
          {...inputProps}
          onChange={onChange}
          className="text-area__input-area"
        />
      </div>
      {error && <p className="error">*{error}</p>}
    </div>
  );
};

export default TextArea;
