import { ChangeEventHandler } from "react";
import "./toggle_switch.scss";
interface ToggleSwitchInterface {
  value: boolean;
  setValue: (value: any) => void;
}
const ToggleSwitch: React.FC<ToggleSwitchInterface> = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setValue(event.target.checked);
  };
  return (
    <input
      type="checkbox"
      checked={props.value}
      onChange={(e) => handleChange(e)}
      className="toggle"
    />
  );
};

export default ToggleSwitch;
