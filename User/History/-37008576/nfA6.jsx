import React from "react";
import "./button.css";

const Button = ({
  children,
  type,
  size,
  backgroundColor,
  disabled,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`btn-xnodui  btn-xnodui--${size} btn-xnodui--${
        type ? type : "primary"
      }`}
      style={backgroundColor && { backgroundColor }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "primary",
  onClick: () => {},
  size: "medium",
};

export default Button;
