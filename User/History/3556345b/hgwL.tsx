import React from "react";
interface InputInterface {
  name: string;
  option: [{ value: string }];
  value: string;
  onChange: () => void;
}
const Select: React.FC<InputInterface> = (props) => {
  return (
    <select name={props.name} value={props.value} onChange={props.onChange}>
      {props?.option.map((option) => (
        <option value={option?.value}>{option?.value}</option>
      ))}
    </select>
  );
};

export default Select;
