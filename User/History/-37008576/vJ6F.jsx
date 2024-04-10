import "./button.scss";
const Button = ({ primary, size, label, backgroundColor }) => {
  const mode = primary ? "primary" : "secondary";

  return (
    <button
      className={`btn btn--${size} btn--${mode}`}
      style={backgroundColor && { backgroundColor }}
    >
      {label}
    </button>
  );
};

export default Button;
