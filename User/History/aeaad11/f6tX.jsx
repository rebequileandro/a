import "./login-form.scss";
import { Input } from "components";
import emailIcon from "assets/email.svg";
import passwordIcon from "assets/password.svg";
import formValidate from "utilities/formValidation";
import { useState } from "react";

const LoginForm = () => {
  const initialState = {
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
    setError(initialState);
    let validateEmail = formValidate.email(formData.email);
    let validatePassword = formValidate.password(formData.password);

    if (validateEmail) {
      setError({ ...error, email: validateEmail });
    }
    validatePassword && setError({ ...error, password: validatePassword });

    if (!validateEmail && !validatePassword) {
    }
  };
  console.log(error);

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-form__input-area-wrapper">
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
        Iniciar Sesión
      </button>
    </form>
  );
};

export default LoginForm;
