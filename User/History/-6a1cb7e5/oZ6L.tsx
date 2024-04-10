import "./toggle_switch.scss";

const ToggleSwitch = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider">
        <span className="circle"></span>
      </span>
    </label>
  );
};

export default ToggleSwitch;
