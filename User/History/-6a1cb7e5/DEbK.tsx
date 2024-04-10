import { ChangeEventHandler } from "react";
import "./toggle_switch.scss";
interface ToggleSwitchInterface {
  value: boolean;
  setValue: (value: any) => void;
}
const ToggleSwitch: React.FC<ToggleSwitchInterface> = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={props.value}
        onChange={(e) => handleChange(e)}
      />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleSwitch;
