import { useState } from "react";
import { Input, Loader } from "../../components";
import "./login.scss";
import { sumbitLogin } from "./services/login.services";

interface UserData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const initalState = {
    email: "",
    password: "",
  };

  const [login, setLogin] = useState<UserData>(initalState);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const result: any = await sumbitLogin({
      username: login.email,
      password: login.password,
    });
    setLoading(false);
    // return response;
    if (result.status !== 200) {
      setError(result?.response.data?.message);
    }
  };

  return (
    <main className="login layout-desktop">
      <h1 className="login__title">Login to Dashboard</h1>
      <form className="login__form" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="email"
          value={login.email}
          placeHolder="biza@exaple.com"
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          value={login.password}
          placeHolder="●●●●●●●●●●●●"
          onChange={handleInputChange}
        />
        {error && <p className="login__error">* {error} *</p>}
        <button className="login__submit">
          {loading ? <Loader /> : "Iniciar sesión"}
        </button>
      </form>
    </main>
  );
};

export default Login;
