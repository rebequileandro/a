import React, { useState } from 'react'
import './Select.scss'
import arrow from '../../../assets/icons/icon_arrow-white.svg'
const Select = ({placeholder, options=["option", "option", "option", "option"]}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState('')
  return (
    <div className="select-wrapper">
      <div
        className={`select-wrapper__select-container ${isOpen ? "shadow" : null}`}
        onClick={() => setIsOpen(!isOpen)}>
        <div className="select-wrapper__selected">
          {selected.length ? (
            <span className="select-wrapper__selected-text">{selected}</span>
          ) : (
            <span className="select-wrapper__placeholder">{placeholder ? placeholder : "select"}</span>
          )}
          <img
            className={`select-wrapper__icon ${isOpen ? "show" : null}`}
            src={arrow}
            alt="more options"
          />
        </div>
        <div
          className={`select-wrapper__options-container ${isOpen ? "show" : null}`}>
          {options?.map((option, i) => (
            <React.Fragment key={i}>
              <hr className="select-wrapper__line" />
              <div
                onClick={() => setSelected(option)}
                className={`select-wrapper__option ${selected === option ? "option-selected" : null}`}>
                <span>{option}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Select