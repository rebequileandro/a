import "./login-form.scss";
import { Input } from "components";
import emailIcon from "assets/email.svg";
import passwordIcon from "assets/password.svg";
import formValidate from "utilities/formValidation";
import { useState } from "react";
import { login } from "../../services/login.services";
import { useDispatch } from "react-redux";
import { setUser } from "redux/slices/user.slice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialState = {
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
    setError(initialState);
    let err = { ...initialState };
    let validateEmail = formValidate.email(formData.email);
    let validatePassword = formValidate.password(formData.password);
    validateEmail && (err = { ...err, email: validateEmail });
    validatePassword && (err = { ...err, password: validatePassword });
    setError(err);
    if (!validateEmail && !validatePassword) {
      const result = await login(formData);
      if (result.status === 200) {
        dispatch(setUser(result.data.user));
      }
    }
  };

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
