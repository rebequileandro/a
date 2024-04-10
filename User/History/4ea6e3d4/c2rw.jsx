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
  const handleClick = (e) => {
    if (e.target.id !== selected) {
      setSelected(e.target.id);
      navigator.vibrate(100);
    }
  };
  return (
    <div className="primary-switch">
      <div className="primary-switch__background">
        <div className="primary-switch__flex-container">
          <div className="primary-switch__selector" style={selectorStyles} />
          <button
            className="primary-switch__button"
            onClick={(id) => handleClick(id)}
            style={{ opacity: selected === option1 ? 1 : 0.5 }}
            id={option1}
          >
            {option1}
          </button>
          <button
            className="primary-switch__button"
            onClick={(id) => handleClick(id)}
            style={{ opacity: selected === option2 ? 1 : 0.5 }}
            id={option2}
          >
            {option2}
          </button>
        </div>
      </div>
    </div>
  );
}
