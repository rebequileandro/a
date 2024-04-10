import "./button.scss";
import PropTypes from "prop-types";
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

Button.propTypes = {
  label: PropTypes.node.isRequired,
};
export default Button;
