import "./button.scss";

const Button = ({ type, size, label, backgroundColor, disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`btn btn--${size} btn--${type ? type : "primary"}`}
      style={backgroundColor && { backgroundColor }}
    >
      {label}
    </button>
  );
};
export default Button;
