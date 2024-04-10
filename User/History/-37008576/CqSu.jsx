import "./button.scss";
import PropTypes from "prop-types";
const Button = ({ type, size, label, backgroundColor, disabled }) => {
  //   const mode = type ? "primary" : "secondary";

  return (
    <button
      className={`btn btn--${size} btn--${type ? type : "primary"} ${
        disabled && "btn--disabled"
      }`}
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
Button.defaultProps = {
  type: "primary",
};
export default Button;
