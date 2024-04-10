import "./input.scss";

const Input = ({ inputProps }) => {
  return (
    <div className="input-wrapper">
      <input {...inputProps} />
    </div>
  );
};

export default Input;
