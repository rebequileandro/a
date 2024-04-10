import { useState } from "react";
import { Input } from "../../components";
import "./login.scss";
const Login = () => {
  const initalState = {
    email: "",
    password: "",
  };
  const [login, setLogin] = useState(initalState);
  const onInputChange = () => {};
  return (
    <main className="login layout-desktop">
      <h1 className="login__title heading-primary">Iniciar sesión</h1>
      <Input
        type="text"
        name="email"
        value=""
        placeHolder=""
        onChange={onInputChange}
      />
      <Input
        type="password"
        name="password"
        value=""
        placeHolder=""
        onChange={onInputChange}
      />
    </main>
  );
};

export default Login;
