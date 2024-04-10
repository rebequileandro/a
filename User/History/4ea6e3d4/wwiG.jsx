import { useEffect } from "react";
import "./toggle-switch.jsx.scss";

export default function ToggleSwitch({
  setSelected,
  selected,
  option1 = "si",
  option2 = "no",
}) {
  let selectorStyles = {
    transform: selected === option1 ? "none" : "translateX(100%)",
  };
  const handleClick = () => {
    option1 === selected ? setSelected(option2) : setSelected(option1);
    navigator.vibrate(100);
  };
  return (
    <div className="primary-switch">
      <div className="primary-switch__flex-container">
        <div className="primary-switch__selector" style={selectorStyles} />
        <button
          className="primary-switch__button"
          onClick={handleClick}
          id={option1}
        >
          {option1}
        </button>
        <button
          className="primary-switch__button"
          onClick={handleClick}
          id={option2}
        >
          {option2}
        </button>
      </div>
    </div>
  );
}
