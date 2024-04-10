import './PageSelector.scss';

export default function PrimarySwitch({
  setSelected,
  selected,
  option1,
  option2
}) {
  const selectorStyles = {
    transform: selected === 'login' ? 'none' : 'translateX(100%)'
  };

  const setOpacity = (page) => ({ opacity: selected === page ? 1 : 0.5 });

  return (
    <div className="page-selector">
      <div className="page-selector__background">
        <div className="page-selector__flex-container">
          <div className="page-selector__selector" style={selectorStyles}></div>
          <button
            className="page-selector__button"
            onClick={() => setSelected(option1)}
            style={setOpacity(option1)}
          >
            {option1}
          </button>
          <button
            className="page-selector__button"
            onClick={() => setSelected(option2)}
            style={setOpacity(option2)}
          >
            option2
          </button>
        </div>
      </div>
    </div>
  );
}
