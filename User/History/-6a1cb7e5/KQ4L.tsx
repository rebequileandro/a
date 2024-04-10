import "./toggle_switch.scss";

const ToggleSwitch: React.FC = () => {
  return (
    <>
      <input id="checkboxInput" type="checkbox" />
      <label className="toggleSwitch" htmlFor="checkboxInput"></label>
    </>
  );
};

export default ToggleSwitch;
