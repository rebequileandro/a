import React, { useEffect, useRef, useState } from "react";
import "./dropdown.css";
import Arrow from "./Icons/Arrow/Arrow.jsx";
import X from "./Icons/X/X.jsx";

function Dropdown({
  placeHolder,
  options,
  isMulti,
  isSearchable,
  onChange,
  align,
}) {
  // State variables using React hooks
  const [showMenu, setShowMenu] = useState(false); // Controls the visibility of the dropdown menu
  const [selectedValue, setSelectedValue] = useState(isMulti ? [] : null); // Stores the selected value(s)
  const [searchValue, setSearchValue] = useState(""); // Stores the value entered in the search input
  const searchRef = useRef(); // Reference to the search input element
  const inputRef = useRef(); // Reference to the custom select input element

  // useEffect(() => {
  //   setSearchValue("");
  //   if (showMenu && searchRef.current) {
  //     searchRef.current.focus();
  //   }
  // }, [showMenu]);

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
                <X color={"var(--primary-color)"} />
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
      className={`custom--dropdown-container ${
        isMulti
          ? selectedValue.length
            ? "custom--dropdown-container--selected"
            : ""
          : selectedValue
          ? "custom--dropdown-container--selected"
          : ""
      }`}
    >
      <div ref={inputRef} onClick={handleInputClick} className="dropdown-input">
        <div
          className={`dropdown-selected-value ${
            !selectedValue || selectedValue.length === 0 ? "placeholder" : ""
          }`}
        >
          {getDisplay()}
        </div>
        <Arrow
          className={`dropdown-tool-icon ${
            showMenu ? "dropdown-tool-icon--tanslate" : ""
          }`}
        />
      </div>
      <div
        className={`dropdown-menu alignment--${
          align || "auto"
        } dropdown-menu--${showMenu ? "show" : "hide"}`}
      >
        {isSearchable && (
          <div className="search-box">
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
            className={`dropdown-item ${isSelected(option) && "selected"}`}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
