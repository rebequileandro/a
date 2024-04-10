import "./ComoPedir.scss";

import { Header } from "../../../components/global/Header/Header";
import { useNavigate } from "react-router-dom";

export default function ComoPedir() {
  const navigate = useNavigate();

  return (
    <div className="como-pedir-page">
      <Header backbutton={() => navigate("/ayuda")} />
      <div className="body">
        <h1>Cómo pedir</h1>
        <div className="content">
          <p>1. Elegí el boliche en el que te encontrás</p>
          <p>2. Elegí tu bebida favorita</p>
          <p>3. Elegí la barra donde querés retirar tu pedido</p>
          <p>4. Pagá con tu tarjeta de crédito, débito o efectivo</p>
          <p>5. Retirá tu bebida cuando esté lista</p>
        </div>
      </div>
    </div>
  );
}
