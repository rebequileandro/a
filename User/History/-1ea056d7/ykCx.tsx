import { useState } from "react";
import { Input } from "../../components";
import "./login.scss";
const Login = () => {
  const initalState = {
    email: "",
    password: "",
  };
  const [login, setLogin] = useState(initalState);

  const handleInputChange = (e: any) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="login layout-desktop">
      <h1 className="login__title heading-primary">Iniciar sesión</h1>
      <Input
        type="text"
        name="email"
        value={login.email}
        placeHolder="gonzalo@gmail.com"
        onChange={handleInputChange}
      />
      <Input
        type="password"
        name="password"
        value={login.password}
        placeHolder="*******"
        onChange={handleInputChange}
      />
    </main>
  );
};

export default Login;
