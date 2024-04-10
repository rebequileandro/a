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
        <Welcome/>
      ) : (
        <LoginCarousel setShowLogin={setShowLogin} />
      )}
    </div>
  );
}

export default Login;
