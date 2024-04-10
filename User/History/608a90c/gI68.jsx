import { ToggleSwitch } from "components";
import "./login.scss";
import { useState } from "react";
import logo from "assets/Discord-Logo 1.png";
const Login = () => {
  const [selected, setSelected] = useState();
  return (
    <div className="login">
      <div>
        <img src={logo} alt="logo" />
        <p>
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
