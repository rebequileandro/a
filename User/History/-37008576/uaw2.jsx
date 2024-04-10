import "./button.scss";
import PropTypes from "prop-types";
const Button = ({ type, size, label, disabled, onClick }) => {
  //   const mode = type ? "primary" : "secondary";

  return (
    <button
      onClick={!disabled && onClick}
      className={`btn btn--${size} btn--${type ? type : "primary"} ${
        disabled && "btn--disabled"
      }`}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.node.isRequired,
  type: PropTypes.oneOf[("primary", "secondary")],
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  type: "primary",
  disabled: false,
};
export default Button;
