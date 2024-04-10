import "./input.scss";

const Input = ({ inputProps, label }) => {
  return (
    <div className="input-wrapper">
      <div>
        {label && <label>{label}</label>}
        <input className="input-wrapper__input" {...inputProps} />
      </div>
    </div>
  );
};

export default Input;
