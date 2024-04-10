import { Input } from "components";
import "./login-form.scss";
import emailIcon from "assets/email.svg";
import passwordIcon from "assets/password.svg";
import formValidate from "utilities/formValidation";

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-form__input-area-wrapper">
        <Input
          icon={emailIcon}
          label="Email"
          inputProps={{ type: "email", placeholder: "example@example.com" }}
        />
        <Input
          icon={passwordIcon}
          label="Contraseña"
          inputProps={{
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
