import React, { useState } from 'react';
import './Select.scss';
import arrow from '../../../../assets/icons/icon_arrow-white.svg';
const Select = ({
  placeholder,
  options = ['option 1', 'option 2', 'option 3', 'option 4'],
  onChange,
  initialState = '',
  gradient,
  icon,
  label,
  error
}) => {
  //---------------example :)------------//
  {
    /* 
  <Select
    placeholder={"elige una fiesta"} --> opcional
    initialState = 'techno'
    onChange={setInput}
    options={[
      techno,
      cachengue,
      retro,
    ]}
    gradient --> opcional
    icon --> opcional
    label --> opcional
    error --> opcional
  /> 
  */
  }
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(initialState);
  const handleChange = (value) => {
    setSelected(value);
    onChange(value);
  };
  return (
    <div>
      {label ? (
        <div className="select-wrapper__label-container">
          <label>{label}</label>
        </div>
      ) : null}
      <div
        className={`select-wrapper ${gradient ? 'gradient' : null} ${
          error ? 'error-wrapper' : null
        }`}
      >
        <div className={`${gradient ? 'select-wrapper gradient__bg' : null}`}>
          <div
            className={`select-wrapper__select-container ${
              gradient ? 'gradient' : null
            } ${isOpen ? 'shadow' : null}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`select-wrapper__selected ${
                gradient ? 'gradient' : null
              }`}
            >
              {selected.length ? (
                <h3 className="select-wrapper__selected-text">{selected}</h3>
              ) : (
                <span className="select-wrapper__placeholder">
                  {placeholder ? placeholder : 'select'}
                </span>
              )}
              {icon && (
                <img
                  className={`select-wrapper__icon ${isOpen ? 'show' : null}`}
                  src={arrow}
                  alt="more options"
                />
              )}
            </div>
            <div
              className={`select-wrapper__options-container ${
                isOpen ? 'show' : null
              }`}
            >
              {options?.map((option, i) => (
                <React.Fragment key={i}>
                  <hr className="select-wrapper__line" />
                  <div
                    onClick={() => handleChange(option)}
                    className={`select-wrapper__option ${
                      selected === option ? 'option-selected' : null
                    }`}
                  >
                    <h3>{option}</h3>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      {error && <p className="error">*{error}</p>}
    </div>
  );
};

export default Select;
