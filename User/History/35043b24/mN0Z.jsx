import "./PaymentPending.scss";

import { QrGenerator } from "../../QrCode/QrGenerator/QrGenerator";

export default function PaymentPending({ showDetails, order }) {
  const { timeLeft, id } = order;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="payment-pending">
      {showDetails ? (
        <QrGenerator ticket={id} />
      ) : (
        <p className="counter">
          {minutes}:{`${seconds}`.padStart(2, "0")}
        </p>
      )}
    </div>
  );
}
