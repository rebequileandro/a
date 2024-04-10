import "./forgot-password.scss";
import { Input, Loader } from "components";
import React, { useState } from "react";
import emailIcon from "assets/email.svg";
import logo from "assets/logo.png";
import formValidate from "utilities/formValidation";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let validate = formValidate.email(email);
    if (!validate) {
      setLoading(true);
      console.log("enviar");
    } else {
      setError(validate);
    }
  };
  return (
    <main className="forgot-password layout-primary " onSubmit={handleSubmit}>
      <img src={logo} alt="logo" className="forgot-password__logo" />
      <form>
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
    </main>
  );
};

export default ForgotPassword;
