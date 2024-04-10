import { useRef, useState } from "react";
import "./input.scss";
import openEye from "assets/show-password.svg";
import closeEye from "assets/hidden_password.svg";

const Input = ({ inputProps, label, icon, error }) => {
  const inputRef = useRef();

  const [passwordImage, setPassWordImage] = useState(closeEye);
  const changeVisibility = () => {
    if (inputRef.current.type === "password") {
      inputRef.current.type = "text";
      setPassWordImage(openEye);
    } else {
      inputRef.current.type = "password";
      setPassWordImage(closeEye);
    }
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
            <img key={passwordImage} src={passwordImage} alt="icon" />
          </button>
        )}
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Input;
