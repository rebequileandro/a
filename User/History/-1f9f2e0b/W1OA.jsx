import { Input } from "components";
import "./signup-form.scss";
import emailIcon from "assets/email.svg";
import passwordIcon from "assets/password.svg";
import enterpriceIcon from "assets/enterprice.svg";
import userIcon from "assets/user.svg";
import { useDispatch } from "react-redux";
import { useState } from "react";
import formValidate from "utilities/formValidation";
import { signup } from "pages/Login/services/login.services";
import { setUser } from "redux/slices/user.slice";
import Loader from "components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import ROUTES from "models/routes.models";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    nombreCompleto: "",
    nombreEmpresa: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(initialState);
  const [loading, setLoading] = useState(false);

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
    if (
      !err.nombreCompleto &&
      !err.nombreEmpresa &&
      !err.email &&
      !err.password
    ) {
      setLoading(true);
      const result = await signup(formData);
      if (result.status === 201) {
        dispatch(setUser(result.data.user));
        navigate(ROUTES.HOME);
      }
    }
    setLoading(false);
  };
  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="signup-form__input-area-wrapper">
        <Input
          icon={userIcon}
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
          icon={enterpriceIcon}
          label="Nombre de la empresa"
          error={error.nombreEmpresa}
          inputProps={{
            value: formData.nombreEmpresa,
            onChange: handleChange,
            name: "nombreEmpresa",
            type: "text",
            placeholder: "Sonrisa y Salud Dental",
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
        {loading ? <Loader /> : "Crear Cuenta"}
      </button>
    </form>
  );
};

export default SignUpForm;
