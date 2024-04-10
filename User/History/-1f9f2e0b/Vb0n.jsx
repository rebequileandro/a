import { Input } from "components";
import "./signup-form.scss";
import emailIcon from "assets/email.svg";
import passwordIcon from "assets/password.svg";
import { useDispatch } from "react-redux";
import { useState } from "react";
import formValidate from "utilities/formValidation";
import { signup } from "pages/Login/services/login.services";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let err = { ...initialState };
    err = {
      ...err,
      nombreCompleto: formValidate.name(formData.nombreCompleto),
    };
    err = {
      ...err,
      nombreEmpresa:
        formData.nombreEmpresa < 3 ? "Ingresa un nombre más largo" : null,
    };
    err = { ...err, email: formValidate.email(formData.email) };
    err = { ...err, password: formValidate.password(formData.password) };
    setError(err);
    console.log(err);
    if (
      !err.nombreCompleto &&
      !err.nombreEmpresa &&
      !err.email &&
      !err.password
    ) {
      const result = await signup(formData);
    } else {
      return;
    }
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
