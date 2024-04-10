import "./forgot-password.scss";
import { Input, Loader } from "components";
import React, { useState } from "react";
import emailIcon from "assets/email.svg";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <main className="forgot-password layout-primary ">
      <div className="forgot-password__input-wrapper">
        <img src={logo} alt="logo" />
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
            maxLength: 10,
          }}
        />
      </div>
      <button type="submit" className="btn btn--secondary">
        {loading ? <Loader /> : "Recuperar"}
      </button>
    </main>
  );
};

export default ForgotPassword;
