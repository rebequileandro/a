import Input from "../../components/Input/Input";
import "./login.scss";
import logo from "../../assets/shooza.svg";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";
import { loginRequest } from "./services/login.services";

const Login = ({ setCurrentUser }) => {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    if (user.email.length && user.password.length) {
      const response = await loginRequest(user);
      if (response === "Usuario no válido") {
        setError(response);
      } else {
        setCurrentUser(response);
      }
    } else {
      setError("Completa los campos");
    }
    setloading(false);
  };
  return (
    <div className="login-container">
      <img src={logo} alt="logo" className="login-container__logo" />
      <form className="login-container__form" onSubmit={handleSubmit}>
        <Input
          inputPops={{
            type: "email",
            name: "email",
            placeholder: "alangato@gmail.com",
            value: user.email,
          }}
          onChange={handleChange}
        />
        <Input
          inputPops={{
            type: "password",
            name: "password",
            placeholder: "**********",
            value: user.password,
          }}
          onChange={handleChange}
        />
        {error && <span className="error">{error}</span>}
        <button className="btn-primary btn-primary--s" type="submit">
          {loading ? <Loader /> : "Iniciar sesión"}
        </button>
      </form>
    </div>
  );
};

export default Login;
