import "./input.scss";

const Input = ({ inputProps, label }) => {
  return (
    <div className="input-wrapper">
      {label && <label>{label}</label>}
      <input {...inputProps} />
    </div>
  );
};

export default Input;
