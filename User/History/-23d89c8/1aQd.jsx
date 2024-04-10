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
    <main className="forgot-password">
      <div className="forgot-password__input-wrapper">
        <h2>recupera tu contraseña</h2>
        <p>Ingresa la dirección de mail asociada a tu cuenta:</p>
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
          }}
        />
      </div>
      <button type="submit" className="btn btn--secondary">
        {loading ? <Loader /> : "Recuperar contraseña"}
      </button>
    </main>
  );
};

export default ForgotPassword;
