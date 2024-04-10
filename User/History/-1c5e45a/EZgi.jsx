import './PaymentPending.scss';
import { QrGenerator } from '../../../global/QrCode/QrGenerator/QrGenerator';
import { useEffect, useState } from 'react';

export default function PaymentPending({ showDetails, id }) {
  const [loading, setLoading] = useState(false);
  // const minutes = timeLeft ? Math.floor(timeLeft / 60) : null;
  // const seconds = timeLeft ? timeLeft % 60 : null;
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);
  useEffect(() => {}, []);

  return (
    <div className="payment-pending">
      {showDetails ? (
        <QrGenerator ticket={id} />
      ) : (
        <p className="counter">
          {minutes ? minutes + ':' + `${seconds}`.padStart(2, '0') : null}
        </p>
      )}
    </div>
  );
}
