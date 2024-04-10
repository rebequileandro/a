import { ToggleSwitch } from "components";
import "./login.scss";
import { useState } from "react";

const Login = () => {
  const [selected, setSelected] = useState();
  return (
    <div>
      <ToggleSwitch
        setSelected={setSelected}
        selected={selected}
        option2="Iniciar sesión"
      />
    </div>
  );
};

export default Login;
