import Input from "../../components/Input/Input";
import "./login.scss";
import logo from "../../assets/shooza.svg";
const Login = () => {
  return (
    <div className="login-container">
      <img src={logo} alt="logo" />
      <form>
        <Input
          label={"Usuario:"}
          inputPops={{
            type: "text",
            placeholder: "Gin",
            //    value: inputDrink.recipe[i].botella,
          }}
          //  onChange={(e) => handleChangeRecipe(e, i)}
        />

        <Input label={"Contraseña:"} />
      </form>
    </div>
  );
};

export default Login;
