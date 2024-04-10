import { Input } from "components";
import "./signup-form.scss";
import emailIcon from "assets/email.svg";
import passwordIcon from "assets/password.svg";

const SignUpForm = () => {
  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="signup-form__input-area-wrapper">
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

export default SignUpForm;
