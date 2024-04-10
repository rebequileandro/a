import { Input } from "components";
import "./signup-form.scss";
import emailIcon from "assets/email.svg";
import passwordIcon from "assets/password.svg";
import { useDispatch } from "react-redux";
import { useState } from "react";

const SignUpForm = () => {
  const dispatch = useDispatch();

  const initialState = {
    nombreCompleto: "",
    nombreEmpresa: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(initialState);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="signup-form__input-area-wrapper">
        <Input
          icon={emailIcon}
          label="Nombre completo"
          error={error.nombreCompleto}
          inputProps={{
            value: formData.nombreCompleto,
            onChange: handleChange,
            name: "nombreCompleto",
            type: "text",
            placeholder: "alan tapia",
          }}
        />
        <Input
          icon={emailIcon}
          label="Nombre de la empresa"
          error={error.nombreEmpresa}
          inputProps={{
            value: formData.nombreEmpresa,
            onChange: handleChange,
            name: "nombreEmpresa",
            type: "text",
            placeholder: "zuta studio",
          }}
        />
        <Input
          icon={emailIcon}
          label="Email"
          error={error.email}
          inputProps={{
            value: formData.email,
            onChange: handleChange,
            name: "email",
            type: "email",
            placeholder: "example@example.com",
          }}
        />
        <Input
          icon={passwordIcon}
          label="Contraseña"
          error={error.password}
          inputProps={{
            value: formData.password,
            onChange: handleChange,
            name: "password",
            type: "password",
            placeholder: "●●●●●●●●●●",
          }}
        />
      </div>
      <button type="submit" className="btn btn--secondary">
        Crear Cuenta
      </button>
    </form>
  );
};

export default SignUpForm;
