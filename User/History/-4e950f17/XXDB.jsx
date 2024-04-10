import Input from "../../components/Input/Input";
import "./login.scss";
import logo from "../../assets/shooza.svg";
const Login = () => {
  return (
    <div className="login-container">
      <img src={logo} alt="logo" />
      <form>
        <Input />
        <Input />
      </form>
    </div>
  );
};

export default Login;
