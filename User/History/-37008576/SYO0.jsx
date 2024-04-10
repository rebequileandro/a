import "./button.scss";
import PropTypes from "prop-types";
const Button = ({ type, size, label, backgroundColor }) => {
  const mode = type ? "primary" : "secondary";

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
  type: PropTypes.oneOf[("primary", "secondary")],
};
export default Button;
