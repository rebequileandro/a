import { ToggleSwitch } from "components";
import "./login.scss";
import { useState } from "react";
import logo from "assets/Discord-Logo 1.png";
const Login = () => {
  const [selected, setSelected] = useState();
  return (
    <div className="login layout-primary ">
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
    </div>
  );
};

export default Login;
