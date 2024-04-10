import "./forgot-password.scss";
import { Input, Loader } from "components";
import React, { useState } from "react";
import emailIcon from "assets/email.svg";
import logo from "assets/logo.png";
import formValidate from "utilities/formValidation";
import sendForgotPassword from "./services/forgotPassword.services";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(
    "Te hemos enviado un mail con las instrucciones para recuperar tu contraseña"
  );

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let validate = formValidate.email(email);
    if (!validate) {
      setLoading(true);
      const result = await sendForgotPassword(email);
      if (result?.status === 200) {
        setDone(
          "Te hemos enviado un mail con las instrucciones para recuperar tu contraseña"
        );
      }
    } else {
      setError(validate);
    }
  };
  return (
    <form className="forgot-password layout-primary " onSubmit={handleSubmit}>
      <img src={logo} alt="logo" className="forgot-password__logo" />
      <div className="forgot-password__input-wrapper">
        <h2 className="forgot-password__title">Recupera tu contraseña</h2>
        <p className="forgot-password__description">
          Ingresa la dirección de email de tu cuenta
        </p>
        <Input
          icon={emailIcon}
          label="Email"
          error={error}
          inputProps={{
            value: email,
            onChange: handleChange,
            name: "email",
            type: "email",
            placeholder: "example@example.com",
            maxLength: 50,
          }}
        />
      </div>
      <button type="submit" className="btn btn--secondary">
        {loading ? <Loader /> : "Recuperar"}
      </button>
    </form>
  );
};

export default ForgotPassword;
