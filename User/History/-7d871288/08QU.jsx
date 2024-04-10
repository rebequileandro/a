import React from "react";
import "./Inventory.scss";
import smartphone_3 from "../../../assets/smartphone_3.png";
import smartphone_4 from "../../../assets/smartphone_4.png";

const Inventory = () => {
  return (
    <div className="inventory-container">
      <div className="smartphone-container">
        <img
    
          className="smartphone_4"
          src={smartphone_4}
          alt="smartphone wedrink"
          loading="lazy"
        />
        <img
          className="smartphone_3"
          src={smartphone_3}
          alt="smartphone wedrink"
          loading="lazy"
        />
        <span id="spin" className="ellipse-pink one" />
        <span id="spin" className="ellipse-pink two" />
        <span id="spin" className="ellipse-pink three" />
        <span id="spin" className="ellipse-pink four" />
        <span id="spin" className="ellipse-pink five" />
        <span id="spin" className="ellipse-pink six" />
        <span id="spin" className="ellipse-pink seven" />
      </div>
      <div className="content-right">
        <h1>Tu inventario ahora en automático</h1>
        <p>
          ¡Leíste bien! Una vez subido el inventario inicial, cada pedido
          descontará automáticamente y a final de la noche tendrás el número
          exacto de inventario restante.
        </p>
        <ul>
          <li className="item one">
            Personaliza tu carta en cuestión de segundos
          </li>
          <li className="item two">Arma los mejores packs para tus clientes</li>
          <li className="item three">
            Cada pedido se resta automáticamente del inventario
          </li>
          <li className="item four">
            Notificaciones cuando hay escasez de mercadería
          </li>
        </ul>
        <a href="https://wedrinkapp.com/" target="_blank" className="btn btn--primary">Pruébalo: Es gratuito</a>
      </div>
    </div>
  );
};

export default Inventory;
