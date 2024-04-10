import { useRef } from "react";
import "./input.scss";
import eye from "assets/show-password.svg";

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
        {inputProps.type === "password" && (
          <button
            className="input-wrapper__password-btn"
            onClick={changeVisibility}
            type="button"
          >
            <img src={eye} alt="icon" />
          </button>
        )}
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Input;
