import React, { useEffect, useRef, useState } from "react";
import "./input.css";
import { PropTypes } from "prop-types";
import ErrorIcon from "./ErrorIcon/ErrorIcon";
const Input = ({
  size = "m",
  inputProps = { type: "text", placeholder: "Input" },
  fullWidth,
  label,
  error,
}) => {
  const inputRef = useRef(null);
  const [containetWidth, setContainerWidth] = useState(null);
  useEffect(() => {
    if (inputRef?.current) {
      setContainerWidth(inputRef.current.getBoundingClientRect().width);
    }
  }, [inputRef?.current, size]);

  return (
    <div
      style={containetWidth && { width: containetWidth }}
      className={`input-wrapper-xnodui input-wrapper-xnodui--${size} ${
        fullWidth && "input-wrapper-xnodui--full-width"
      }`}
    >
      {label && <label className={`input-label-xnodui`}>{label}</label>}
      <input
        ref={inputRef}
        className={`input-xnodui ${fullWidth && "input-xnodui--full-width"} ${
          error && "input-xnodui--error"
        }`}
        {...inputProps}
      />
      {error && (
        <span className="input-xnodui-error">
          <ErrorIcon className={"input-xnodui-error-icon"} color={"#f31260"} />{" "}
          {error}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  size: PropTypes.oneOf(["s", "m", "l"]),
  inputProps: PropTypes.object,
  fullWidth: PropTypes.bool,
};

Input.defaultProps = {
  type: "primary",
  size: "m",
  fullWidth: false,
};
export default Input;
