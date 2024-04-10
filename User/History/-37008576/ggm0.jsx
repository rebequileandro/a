import "./button.css";

const Button = ({ type, size, label, backgroundColor, disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="btn-xnodui btn-xnodui--primary"
    >
      {label}
    </button>
  );
};
export default Button;
