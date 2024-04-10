import { Input } from "components";
import "./login-form.scss";
import emailIcon from "assets/email.svg";
import passwordIcon from "assets/password.svg";

const LoginForm = () => {
  return (
    <form className="login-form">
      <div>
        <Input
          icon={emailIcon}
          label="Email"
          inputProps={{ type: "text", placeholder: "example@example.com" }}
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
