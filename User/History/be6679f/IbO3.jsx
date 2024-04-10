import React from 'react';
import './textarea.scss';
const TextArea = ({ onChange }) => {
  return (
    <div className="text-area-wrapper">
      <textarea
        className="text-area-wrapper__text-area"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export default TextArea;
