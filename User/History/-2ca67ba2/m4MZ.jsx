import React from "react";
import "./Statistics.scss";
import smartphone_5 from "../../../assets/smartphone_5.png";
const Statistics = () => {
  return (
    <div className="statistics-container">
      <div className="content">
        <div className="content-left">
          <h1>analiza como un pro</h1>
          <p>
            Lo que no se mide no se mejora. Gracias a la centralización de
            pedidos, podremos decirte las métricas exactas que necesitas para
            incrementar tus ventas y tomar decisiones estratégicas.
          </p>
          <ul>
            <li className="item one">Productos más vendidos</li>
            <li className="item two">Analítica de cada parte del staff</li>
            <li className="item three">Facturación según fechas</li>
            <li className="item four">Conoce en detalle a tu cliente</li>
            <li className="item five">Consulta las estadísticas en directo</li>
          </ul>
          <a href="https://wedrinkapp.com/" target="_blank" className="btn btn--primary">Pruébalo: Es gratuito</a>
        </div>
        <div className="image-container">
          <img
            className="image-stats"
            src={smartphone_5}
            alt="POS"
            loading="lazy"
          />
          <span className="ellipse-pink one" />
          <span className="ellipse-pink two" />
          <span className="ellipse one" />
          <span id="traslate-right-to-left" className="ellipse two" />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
