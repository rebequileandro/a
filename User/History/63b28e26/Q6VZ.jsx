import "./OrderReady.scss";

import { QrGenerator } from "../../../global/QrCode/QrGenerator/QrGenerator";

export default function OrderReady({ showDetails, order }) {
  return (
    <div className="order-ready">
      <div
        className={showDetails ? "qr-div" : "qr-div flex"}
        style={{ display: !showDetails ? "flex" : "block" }}
      >
        <p>Mostrá el código QR en la barra</p>
        <QrGenerator ticket={order.id} />
      </div>
    </div>
  );
}
