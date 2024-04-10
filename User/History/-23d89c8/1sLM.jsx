import { Loader } from "components";
import React from "react";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);

  return (
    <main className="forgot-password">
      <button type="submit" className="btn btn--secondary">
        {loading ? <Loader /> : "Iniciar Sesión"}
      </button>
    </main>
  );
};

export default ForgotPassword;
