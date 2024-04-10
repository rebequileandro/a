import React from "react";
import "./button.scss";
import { PropTypes } from "prop-types";
import Loader from "../Loader/Loader";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

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
  const [firstSize, setFirstSize] = useState(null);
  const btnRef = useRef();
  useEffect(() => {
    if (btnRef.current && children) {
      setFirstSize(btnRef.current.getBoundingClientRect());
    }
  }, [btnRef.current, children]);

  return (
    <button
      ref={btnRef}
      {...btnProps}
      disabled={disabled}
      onClick={onClick}
      className={`btn-xnodui  btn-xnodui--${size} btn-xnodui--${
        type ? type : "primary"
      } ${fullWidth && "btn-xnodui--full-width"} ${className}`}
      style={{ ...style, width: firstSize?.width, height: firstSize?.height }}
    >
      {loading ? (
        <div style={{ width: firstSize?.height, height: firstSize?.height }}>
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
