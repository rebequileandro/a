import { ToggleSwitch } from "components";
import "./login.scss";
import { useState } from "react";
import logo from "assets/logo.png";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LoginForm from "./components/LoginForm/LoginForm";
const Login = () => {
  const [selected, setSelected] = useState("Iniciar sesión");
  return (
    <main className="login layout-primary ">
      <div className="login__top-container">
        <img src={logo} alt="logo" />
        <p className="login__description">
          {selected === "Registrarse"
            ? "Regístrate y comienza a trabajar con tu primera asistente personal digital."
            : "Bievenido a tu asistente virtual"}
        </p>
      </div>
      <ToggleSwitch
        setSelected={setSelected}
        selected={selected}
        option1="Registrarse"
        option2="Iniciar sesión"
      />
      {selected === "Registrarse" ? <SignUpForm /> : <LoginForm />}
    </main>
  );
};

export default Login;
