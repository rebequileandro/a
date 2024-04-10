import React, { Fragment, useEffect, useId, useRef, useState } from "react";
import "./tabs.css";
import { PropTypes } from "prop-types";

const Tabs = ({ optionsTabs, setState, currentTab, size = "m", fullWidth }) => {
  const tabsRef = useRef(null);
  const id = useId();
  const [currentOption, setCurrentOption] = useState(
    currentTab ?? optionsTabs[0]?.value
  );
  const handleChange = (e, i) => {
    // e.preventDefault();
    tabsRef.current.style.setProperty("--active", i);
    setCurrentOption(e.target.value);
    setState && setState(e.target.value);
  };
  useEffect(() => {
    if (tabsRef?.current && optionsTabs.length) {
      tabsRef.current.style.setProperty("--count", optionsTabs.length);
    }
  }, [optionsTabs.length, tabsRef.current]);

  useEffect(() => {
    if (tabsRef?.current && currentTab) {
      const index = optionsTabs.findIndex((e) => e.value === currentTab);
      tabsRef.current.style.setProperty("--active", index);
    } else if (tabsRef?.current) {
      tabsRef.current.style.setProperty("--active", 0);
    }
  }, []);

  return (
    <div
      className={`tabs-container-xnodui tabs-container-xnodui--${size} ${
        fullWidth ? "tabs-container-xnodui--full-width" : ""
      }`}
    >
      <div className="tabs-xnodui" ref={tabsRef}>
        {optionsTabs?.map((tab, i) => (
          <Fragment key={tab.value + i}>
            <input
              checked={currentOption === tab.value}
              value={tab.value}
              name={`tabs-option-${id}`}
              id={tab.value + id}
              type="radio"
              className="tabs-input-xnodui"
              onChange={(e) => handleChange(e, i)}
            />
            <label htmlFor={tab.value + id} className="tabs-label-xnodui">
              {tab.label}
            </label>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  size: PropTypes.oneOf(["s", "m", "l"]),
  optionsTabs: PropTypes.array,
  setState: PropTypes.func,
  currentTab: PropTypes.string,
  fullWidth: PropTypes.bool,
};

Tabs.defaultProps = {
  size: "m",
};

export default Tabs;
