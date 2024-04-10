import "./select.scss";
interface InputInterface {
  name: string;
  option: { value: string }[];
  value: string;
  onChange: (e: any) => void;
}
const Select: React.FC<InputInterface> = (props) => {
  return (
    <select
      className="select"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    >
      {props?.option.map((option, i) => (
        <option key={option.value + i} value={option?.value}>
          {option?.value}
        </option>
      ))}
    </select>
  );
};

export default Select;
