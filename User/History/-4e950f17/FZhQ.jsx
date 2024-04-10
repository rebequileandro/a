import Input from "../../components/Input/Input";
import "./login.scss";
import logo from "../../assets/shooza.svg";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";

const Login = () => {
  const [loading, setloading] = useState(false);
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
  return (
    <div className="login-container">
      <img src={logo} alt="logo" className="login-container__logo" />
      <form className="login-container__form">
        <Input
          inputPops={{
            type: "email",
            placeholder: "alangato@gmail.com",
            value: user.email,
            require: true,
          }}
          onChange={handleChange}
        />
        <Input
          inputPops={{
            type: "password",
            placeholder: "**********",
            value: user.password,
            require: true,
          }}
          onChange={handleChange}
        />
        <button className="btn-primary btn-primary--s" type="submit">
          {loading ? <Loader /> : "Iniciar sesión"}
        </button>
      </form>
    </div>
  );
};

export default Login;
