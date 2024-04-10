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
            type: "text",
            placeholder: "alangato@gmail.com",
            //    value: inputDrink.recipe[i].botella,
          }}
          //  onChange={(e) => handleChangeRecipe(e, i)}
        />
        <Input
          inputPops={{
            type: "password",
            placeholder: "**********",
            //    value: inputDrink.recipe[i].botella,
          }}
        />
        <button className="btn-primary btn-primary--s" type="submit">
          {loading ? <Loader /> : "Iniciar sesión"}
        </button>
      </form>
    </div>
  );
};

export default Login;
