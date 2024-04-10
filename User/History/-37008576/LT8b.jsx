import React from "react";
import "./button.css";
import { PropTypes } from "prop-types";

const Button = ({ children, type, size, disabled, onClick, style }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`btn-xnodui  btn-xnodui--${size} btn-xnodui--${
        type ? type : "primary"
      }`}
      style={style}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["s", "m", "l"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  style: PropTypes.object,
};

Button.defaultProps = {
  type: "primary",
  size: "m",
  disabled: false,
};

export default Button;
