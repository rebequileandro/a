import React from "react";
interface InputInterface {
  name: string;
  option: [{ value: string }];
}
const Select: React.FC<InputInterface> = (props) => {
  return (
    <select name={props.name}>
      {props?.option.map((option) => (
        <option value={option?.value}>{option?.value}</option>
      ))}
    </select>
  );
};

export default Select;
