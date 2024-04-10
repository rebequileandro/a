import './primarySwitch.scss';

export default function PrimarySwitch({
  setSelected,
  selected,
  option1 = 'si',
  option2 = 'no',
  size //l, m
}) {
  const selectorStyles = {
    transform: selected === option1 ? 'none' : 'translateX(100%)'
  };
  const setOpacity = (page) => ({ opacity: selected === page ? 1 : 0.5 });
  const handleClick = () => {
    selected === option1 ? setSelected(option2) : setSelected(option1);
  };
  return (
    <div className="primary-switch">
      <div className="primary-switch__background">
        <div className="primary-switch__flex-container">
          <div
            className="primary-switch__selector"
            style={selectorStyles}
          ></div>
          <button
            className="primary-switch__button"
            onClick={handleClick}
            style={setOpacity(option1)}
          >
            {option1}
          </button>
          <button
            className="primary-switch__button"
            onClick={handleClick}
            style={setOpacity(option2)}
          >
            {option2}
          </button>
        </div>
      </div>
    </div>
  );
}
