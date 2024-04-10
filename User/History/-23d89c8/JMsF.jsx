import { Loader } from "components";
import React, { useState } from "react";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);

  return (
    <main className="forgot-password">
      <div>
        <h2>recupera tu contraseña</h2>
        <p>Ingresa la dirección de mail asociada a tu cuenta:</p>
      </div>
      <button type="submit" className="btn btn--secondary">
        {loading ? <Loader /> : "Iniciar Sesión"}
      </button>
    </main>
  );
};

export default ForgotPassword;
