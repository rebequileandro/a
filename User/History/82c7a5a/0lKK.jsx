import "./input.scss";

const Input = ({ inputProps, label }) => {
  return (
    <div className="input-wrapper">
      <div className="input-wrapper__label-input">
        {label && <label className="input-wrapper__label">{label}</label>}
        <input className="input-wrapper__input" {...inputProps} />
      </div>
    </div>
  );
};

export default Input;
