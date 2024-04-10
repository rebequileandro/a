import React, { Fragment, useEffect, useId, useRef, useState } from "react";
import "./tabs.css";
const Tabs = ({ optionsTabs, setState, currentTab }) => {
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
    <div className="tabs-container">
      <div className="tabs" ref={tabsRef}>
        {optionsTabs?.map((tab, i) => (
          <Fragment key={tab.value + i}>
            <input
              checked={currentOption === tab.value}
              value={tab.value}
              name={`tabs-option-${id}`}
              id={tab.value}
              type="radio"
              className="input"
              onChange={(e) => handleChange(e, i)}
            />
            <label htmlFor={tab.value} className="label">
              {tab.label}
            </label>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
