import Input from "../../components/Input/Input";
import "./login.scss";
import logo from "../../assets/shooza.svg";
const Login = () => {
  return (
    <div className="login-container">
      <img src={logo} alt="logo" />
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
      </form>
    </div>
  );
};

export default Login;
