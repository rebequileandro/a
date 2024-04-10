import "./toggle-switch.jsx.scss";

export default function ToggleSwitch({
  setSelected,
  selected,
  option1 = "si",
  option2 = "no",
  option3,
  size = "l", //l, m
}) {
  let selectorStyles;
  if (option1 && !option3) {
    selectorStyles = {
      transform: selected === option1 ? "none" : "translateX(100%)",
    };
  }
  if (option3) {
    selectorStyles = {
      transform:
        selected === option1
          ? "translateX(-0.5%)"
          : selected === option2
          ? "translateX(100.5%)"
          : selected === option3
          ? "translateX(204%)"
          : null,
    };
  }
  const handleClick = (e) => {
    if (e.target.id !== selected) {
      setSelected(e.target.id);
      navigator.vibrate(100);
    }
  };
  return (
    <div className={`primary-switch primary-switch--${size}`}>
      <div className="primary-switch__background">
        <div className="primary-switch__flex-container">
          <div
            className={
              !option3
                ? "primary-switch__selector"
                : "primary-switch__selector primary-switch__selector--33w"
            }
            style={selectorStyles}
          ></div>
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
          {option3 ? (
            <button
              className="primary-switch__button"
              onClick={(id) => handleClick(id)}
              style={{ opacity: selected === option3 ? 1 : 0.5 }}
              id={option3}
            >
              {option3}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
