import "./LoginForm.scss";

import Lottie from "lottie-react";
import Validate from "../../../../utils/validation";
import loadingAnimation from "../../../../assets/loading.json";
import { logInUser } from "../../../../redux/store/slices/user";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import InputDiv from "../../../../components/global/InputDiv/InputDiv";
import { useNavigate } from "react-router-dom";
import { getCurrentClub } from "../../../../redux/store/slices/club";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputErrors, setInputErrors] = useState({
    email: false,
    password: false,
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    const emailValidation = Validate.email({ email });
    if (emailValidation) {
      setInputErrors({ ...inputErrors, email: emailValidation });
      return;
    }

    if (!password) {
      setInputErrors({ ...inputErrors, password: "Ingresa tu contraseña" });
      return;
    }

    if (inputErrors.email || inputErrors.password) {
      return;
    }

    (async () => {
      setLoading(true);

      try {
        const rawResponse = await fetch(
          process.env.REACT_APP_API + "/acceso/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          }
        );

        const user = await rawResponse.json();

        if (user.success === false) {
          setInputErrors({ ...inputErrors, password: user.message });
          setLoading(false);
        } else {
          setLoading(false);
          dispatch(logInUser(user));
        }
      } catch (err) {
        setInputErrors({
          ...inputErrors,
          password: "Hubo un error de servidor",
        });
        setLoading(false);
      }
    })();
  };
  return (
    <div className="login-form">
      <form action="/" onSubmit={handleSubmit}>
        <InputDiv
          inputProps={{
            type: "email",
            name: "login_email",
            id: "login_email",
            spellCheck: "false",
            value: email,
          }}
          label="Email"
          setState={setEmail}
          error={inputErrors.email}
          onBlur={() => {
            setInputErrors({
              ...inputErrors,
              email: Validate.email({ email }),
            });
          }}
          onChange={() => setInputErrors({ password: false, email: false })}
        />

        <InputDiv
          inputProps={{
            type: "password",
            name: "login_password",
            id: "login_password",
            value: password,
          }}
          label="Contraseña"
          setState={setPassword}
          error={inputErrors.password}
          onChange={() => setInputErrors({ email: false, password: false })}
        />

        {/* <a className="password-reset" href="/">
          ¿Olvidaste tu contraseña?
        </a> */}

        <div className="submit-wrapper">
          <input
            type="submit"
            value="Aceptar"
            id="login_submit"
            className={
              loading ? "btn btn--primary loading" : "btn btn--primary"
            }
          />
          {loading && (
            <Lottie
              animationData={loadingAnimation}
              className="loading-animation"
              loop={true}
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
