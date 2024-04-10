import "./button.scss";

const Button = ({ type, size, label, backgroundColor, disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`btn-xnodui  btn-xnodui--${size} btn-xnodui--${
        type ? type : "primary"
      }`}
      style={backgroundColor && { backgroundColor }}
    >
      {label}
    </button>
  );
};
export default Button;
