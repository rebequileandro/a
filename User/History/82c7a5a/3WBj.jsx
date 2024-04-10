import "./input.scss";

const Input = ({ inputProps, label }) => {
  return (
    <div className="input-wrapper">
      {label && <label>{label}</label>}
      <input className="input-wrapper__input" {...inputProps} />
    </div>
  );
};

export default Input;
