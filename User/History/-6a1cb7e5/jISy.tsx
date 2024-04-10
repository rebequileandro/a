import "./toggle_switch.scss";
interface ToggleSwitchInterface {
  value: boolean;
  setValue: (value: any) => void;
}
const ToggleSwitch: React.FC = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleSwitch;
