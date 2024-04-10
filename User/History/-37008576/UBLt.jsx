import { medium } from "./Button.stories";
import "./button.scss";
import PropTypes from "prop-types";
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

Button.propTypes = {
  label: PropTypes.node.isRequired,
  type: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  type: "primary",
  size: "medium",
  disabled: false,
};
export default Button;
