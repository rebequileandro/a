import './InputDiv.scss';

import { useEffect, useState } from 'react';

import eye from '../../../assets/icons/icon_eye.svg';
import eyeCrossed from '../../../assets/icons/icon_eye-crossed.svg';

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
  search,
  prefix
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
        className={`input-wrapper ${textarea ? 'textarea-wrapper' : ''}`}
        style={style ? style : {}}
      >
        <div className="input-wrapper-bg">
          {prefix && <div className="prefix">{prefix}</div>}
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
              <img src={eyeCrossed} alt="dejar de ver" loading="lazy" />
            ) : (
              <img src={eye} alt="ver contraseña" loading="lazy" />
            )}
          </div>
        )}
        {search && (
          <img
            className="search_image"
            src={search_icon}
            alt="search"
            loading="lazy"
          />
        )}
      </div>

      {error && <p className="error">*{error}</p>}
    </div>
  );
}

export default InputDiv;
