import "./new-password.scss";
import { Input, Loader } from "components";
import React, { useState } from "react";
import passWordIcon from "assets/password.svg";
import logo from "assets/logo.svg";
import formValidate from "utilities/formValidation";
import sendNewPassword from "./services/NewPassword.services";
import { Link, useParams } from "react-router-dom";
import ROUTES from "models/routes.models";

const NewPassword = () => {
  const { id } = useParams();
  const initialState = {
    password: "",
    confirmPassword: "",
  };
  const [loading, setLoading] = useState(false);
  const [newPassword, setNewPassword] = useState(initialState);
  const [error, setError] = useState("");
  const [done, setDone] = useState("");

  const handleChange = (e) => {
    setNewPassword({
      ...newPassword,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();
    let validate = formValidate.password(newPassword.password);
    newPassword.password !== newPassword.confirmPassword &&
      (validate = "Las contraseñas no coinciden");
    if (!validate) {
      setLoading(true);
      const result = await sendNewPassword({
        password: newPassword.password,
        token: id,
      });
      if (result?.status === 200) {
        setNewPassword(initialState);
        setDone(result?.data.message);
      } else {
        if (result?.response?.data?.message) {
          setError(result?.response?.data?.message);
        } else {
          setError("Ha ocurrido un error inesperado");
        }
      }
    } else {
      setError(validate);
    }
    setLoading(false);
  };
  return (
    <form className="new-password layout-primary " onSubmit={handleSubmit}>
      <img src={logo} alt="logo" className="new-password__logo" />
      <div className="new-password__input-wrapper">
        <h2 className="new-password__title">Nueva contraseña</h2>
        <p className="new-password__description">
          Ingresa tu nueva contraseña para continuar
        </p>
        <Input
          icon={passWordIcon}
          label="Contraseña"
          inputProps={{
            value: newPassword.password,
            onChange: handleChange,
            name: "password",
            type: "password",
            placeholder: "●●●●●●●●●●",
            maxLength: 50,
          }}
        />
        <br />
        <Input
          icon={passWordIcon}
          label="Confirmar Contraseña"
          error={error}
          inputProps={{
            value: newPassword.confirmPassword,
            onChange: handleChange,
            name: "confirmPassword",
            type: "password",
            placeholder: "●●●●●●●●●●",
            maxLength: 50,
          }}
        />
        {done && <p className="new-password__done">{done}</p>}
        {done && (
          <Link className="new-password__login" to={ROUTES.LOGIN}>
            Iniciar sesión
          </Link>
        )}
      </div>
      <button type="submit" className="btn btn--secondary">
        {loading ? <Loader /> : "Cambiar contraseña"}
      </button>
    </form>
  );
};

export default NewPassword;
