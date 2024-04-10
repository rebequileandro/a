import React from "react";
import "./input.scss";
import { PropTypes } from "prop-types";
import ErrorIcon from "./ErrorIcon/ErrorIcon.jsx";
import { useState } from "react";
const Input = ({
  size = "m",
  inputProps = { type: "text", placeholder: "Input" },
  fullWidth,
  label,
  error,
}) => {
  const [passwordSwitch, setpasswordSwitch] = useState("password");
  return (
    <div
      className={`input-wrapper-xnodui input-wrapper-xnodui--${size} ${
        fullWidth && "input-wrapper-xnodui--full-width"
      }`}
    >
      {label && <label className={`input-label-xnodui`}>{label}</label>}
      <input
        className={`input-xnodui ${fullWidth && "input-xnodui--full-width"} ${
          error && "input-xnodui--error"
        }`}
        {...[
          inputProps.type === "password"
            ? { ...inputProps, type: passwordSwitch }
            : { ...inputProps },
        ]}
      />
      {/* {error && (
        <div className="input-xnodui-error-wrapper">
          <ErrorIcon className={"input-xnodui-error-icon"} color={"#f31260"} />
          <span className="input-xnodui-error">{error}</span>
        </div>
      )} */}
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
