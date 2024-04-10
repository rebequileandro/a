import './InputDiv.scss';

import eye from '../../../assets/icons/icon_eye.svg';
import eyeCrossed from '../../../assets/icons/icon_eye-crossed.svg';
import { useState } from 'react';
import search_icon from '../../../assets/global/search.svg';
function InputDiv({
  inputProps,
  label,
  setState,
  error,
  onBlur,
  style,
  onChange,
  textarea,
  className,
  search
}) {
  const [inputType, setInputType] = useState(inputProps.type);

  const handleChange = (e) => {
    if (setState) {
      setState(e.target.value);
    }
    if (onChange) {
      onChange(e);
    }
  };

  const isPassword = inputProps.type === 'password';

  const togglePasswordType = () => {
    if (inputType === 'password') {
      setInputType('text');
    } else {
      setInputType('password');
    }
  };

  return (
    <div className={error ? 'input-div error ' : 'input-div '}>
      <label htmlFor={inputProps.name}>{label}</label>

      <div
        className={`input-wrapper ${textarea ? 'textarea-wrapper' : null}`}
        style={style ? style : null}
      >
        <div className="input-wrapper-bg">
          <input
            {...inputProps}
            type={inputType}
            onChange={handleChange}
            onBlur={onBlur}
          />
        </div>
        {isPassword && (
          <div className="toggle-password" onClick={togglePasswordType}>
            {inputType === 'password' ? (
              <img src={eyeCrossed} />
            ) : (
              <img src={eye} />
            )}
          </div>
        )}
        {search && (
          <img className="search_image" src={search_icon} alt="search" />
        )}
      </div>

      {error && <p className="error">*{error}</p>}
    </div>
  );
}

export default InputDiv;
