import React, { useEffect, useRef, useState } from "react";
import "./dropdown.css";
import Arrow from "./Icons/Arrow/Arrow.jsx";
import X from "./Icons/X/X.jsx";
import { PropTypes } from "prop-types";
function Dropdown({
  placeHolder,
  options,
  isMulti,
  isSearchable,
  onChange,
  align,
  size = "m",
  fullWidth,
}) {
  // State variables using React hooks
  const [showMenu, setShowMenu] = useState(false); // Controls the visibility of the dropdown menu
  const [selectedValue, setSelectedValue] = useState(isMulti ? [] : null); // Stores the selected value(s)
  const [searchValue, setSearchValue] = useState(""); // Stores the value entered in the search input
  const searchRef = useRef(null); // Reference to the search input element
  const inputRef = useRef(null); // Reference to the custom select input element
  const searchWrapperRef = useRef(null);
  useEffect(() => {
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
      searchWrapperRef?.current.scrollIntoView();
    }
  }, [showMenu]);

  useEffect(() => {
    const handler = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  const handleInputClick = () => {
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (!selectedValue || selectedValue.length === 0) {
      return placeHolder;
    }
    if (isMulti) {
      return (
        <div className="dropdown-tags">
          {selectedValue.map((option, index) => (
            <div key={`${option.value}-${index}`} className="dropdown-tag-item">
              {option.label}
              <span
                onClick={(e) => onTagRemove(e, option)}
                className="dropdown-tag-close"
              >
                <X className="dropdown-tag-close-icon-xnodui" />
              </span>
            </div>
          ))}
        </div>
      );
    }
    return selectedValue.label;
  };

  const removeOption = (option) => {
    return selectedValue.filter((o) => o.value !== option.value);
  };

  const onTagRemove = (e, option) => {
    e.stopPropagation();
    const newValue = removeOption(option);
    setSelectedValue(newValue);
    onChange(newValue);
  };

  const onItemClick = (option) => {
    let newValue;
    if (isMulti) {
      if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
        newValue = removeOption(option);
      } else {
        newValue = [...selectedValue, option];
      }
    } else {
      newValue = option;
    }
    setSelectedValue(newValue);
    onChange(newValue);
  };

  const isSelected = (option) => {
    if (isMulti) {
      return selectedValue.filter((o) => o.value === option.value).length > 0;
    }

    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === option.value;
  };

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const getOptions = () => {
    if (!searchValue) {
      return options;
    }

    return options.filter(
      (option) =>
        option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
    );
  };

  return (
    <div
      className={`dropdown-container-xnodui dropdown-container-xnodui--${size} ${
        isMulti
          ? selectedValue.length
            ? "dropdown-container-xnodui--selected"
            : ""
          : selectedValue
          ? "dropdown-container-xnodui--selected"
          : ""
      } ${fullWidth ? "dropdown-container-xnodui--full-width" : ""}`}
    >
      <div
        ref={inputRef}
        onClick={handleInputClick}
        className="dropdown-input-xnodui"
      >
        <div
          className={`dropdown-selected-value-xnodui ${
            !selectedValue || selectedValue.length === 0 ? "placeholder" : ""
          }`}
        >
          {getDisplay()}
        </div>
        <Arrow
          className={`dropdown-tool-icon-xnodui ${
            showMenu ? "dropdown-tool-icon-xnodui--tanslate" : ""
          }`}
        />
      </div>
      <div
        className={`dropdown-menu-xnodui alignment--${
          align || "auto"
        } dropdown-menu-xnodui--${showMenu ? "show" : "hide"}`}
      >
        {isSearchable && (
          <div ref={searchWrapperRef} className="search-box">
            <input
              className="form-control"
              onChange={onSearch}
              value={searchValue}
              ref={searchRef}
            />
          </div>
        )}
        {getOptions().map((option) => (
          <div
            onClick={() => onItemClick(option)}
            key={option.value}
            className={`dropdown-item-xnodui ${
              isSelected(option) && "selected"
            }`}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  size: PropTypes.oneOf(["s", "m", "l"]),
  fullWidth: PropTypes.bool,
  options: PropTypes.array,
};

Dropdown.defaultProps = {
  size: "m",
  fullWidth: false,
};

export default Dropdown;
