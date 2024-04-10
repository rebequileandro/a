import { useState } from "react";

import LoginCarousel from "./LoginCarousel/LoginCarousel";
import LoginForm from "./LoginForm/LoginForm";

import "./Login.scss";
import Welcome from "./Welcome/Welcome";

function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [login, setLogin] = useState(false)
  return (
    <div>
      {showLogin ? (
        login ? (
          <LoginForm />
        ) : (
          <Welcome setLogin={setLogin}/>
        )
      ) : (
        <LoginCarousel setShowLogin={setShowLogin} />
      )}
    </div>
  );
}

export default Login;
