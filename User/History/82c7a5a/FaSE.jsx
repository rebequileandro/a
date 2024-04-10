import { useRef } from "react";
import "./input.scss";
import openEye from "assets/show-password.svg";
import closeEye from "assets/hidden_password.svg";
const Input = ({ inputProps, label, icon, error }) => {
  const inputRef = useRef();
  const changeVisibility = () => {
    inputRef.current.type === "password"
      ? (inputRef.current.type = "text")
      : (inputRef.current.type = "password");
  };
  return (
    <div className="input-container">
      <div className="input-wrapper">
        <img src={icon} alt="icon" />
        <div className="input-wrapper__label-input">
          {label && <label className="input-wrapper__label">{label}</label>}
          <input
            ref={inputRef}
            className="input-wrapper__input"
            {...inputProps}
          />
        </div>
        {inputProps?.type === "password" && (
          <button
            className="input-wrapper__password-btn"
            onClick={changeVisibility}
            type="button"
          >
            <img
              src={inputRef.current?.type === "text" ? openEye : closeEye}
              alt="icon"
            />
          </button>
        )}
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Input;
