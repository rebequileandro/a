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

Button.PropTypes = {
  label: PropTypes.node.isRequired,
};
export default Button;
