import React from "react";
import "./input.scss";
import { PropTypes } from "prop-types";
import ErrorIcon from "./ErrorIcon/ErrorIcon.jsx";
import { useState } from "react";
import EyeIcon from "./EyeIcon/EyeIcon.jsx";
import { useRef } from "react";
const Input = ({
  size = "m",
  inputProps = { type: "text", placeholder: "Input" },
  fullWidth,
  label,
  error,
}) => {
  const inputRef = useRef(null);
  const [passwordSwitch, setpasswordSwitch] = useState(inputProps.type);

  const hadleClickPassword = () => {
    passwordSwitch === "text"
      ? setpasswordSwitch("password")
      : setpasswordSwitch("text");
    inputRef.current.focus();
  };

  return (
    <div
      className={`input-wrapper-xnodui input-wrapper-xnodui--${size} ${
        fullWidth && "input-wrapper-xnodui--full-width"
      } ${
        inputProps.type === "password" ? "input-wrapper-xnodui--password" : ""
      } ${error ? "input-xnodui--error" : ""}`}
    >
      {label && <label className={`input-label-xnodui`}>{label}</label>}
      <input
        ref={inputRef}
        className={`input-xnodui ${fullWidth && "input-xnodui--full-width"}`}
        {...{ ...inputProps, type: passwordSwitch }}
      />
      {inputProps.type === "password" && (
        <button
          className="input-xnodui-password-btn"
          type="button"
          onClick={hadleClickPassword}
        >
          <EyeIcon
            show={passwordSwitch === "text"}
            className="input-xnodui-password-btn-icon"
          />
        </button>
      )}
      {error && (
        <div className="input-xnodui-error-wrapper">
          <ErrorIcon className={"input-xnodui-error-icon"} color={"#f31260"} />
          <span className="input-xnodui-error">{error}</span>
        </div>
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
