import "./toggle_switch.scss";

const ToggleSwitch: React.FC = () => {
  return (
    <>
      <label className="toggleSwitch">
        <input id="checkboxInput" type="checkbox" name="toggle" />
      </label>
    </>
  );
};

export default ToggleSwitch;
