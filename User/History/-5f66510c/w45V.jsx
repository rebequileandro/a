import React from "react";
import "./button.scss";
import { PropTypes } from "prop-types";
import Loader from "../Loader/Loader";

const Button = ({
  className,
  children,
  type,
  size,
  disabled,
  onClick,
  style,
  fullWidth,
  btnProps,
  loading = true,
}) => {
  return (
    <button
      {...btnProps}
      disabled={disabled}
      onClick={onClick}
      className={`btn-xnodui  btn-xnodui--${size} btn-xnodui--${
        type ? type : "primary"
      } ${fullWidth && "btn-xnodui--full-width"} ${className}`}
      style={style}
    >
      {loading ? (
        <div style={{ width: "5%", display: "inline-block" }}>
          <Loader size="l" />
        </div>
      ) : (
        children
      )}
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
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  type: "primary",
  size: "m",
  disabled: false,
  fullWidth: false,
};

export default Button;
