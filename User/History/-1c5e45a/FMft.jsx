import './PaymentPending.scss';
import loadingAnimation from '../../../../assets/loading.json';
import { QrGenerator } from '../../../global/QrCode/QrGenerator/QrGenerator';
import Lottie from 'lottie-react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function PaymentPending({ showDetails, order }) {
  const { timeLeft, id } = order;
  const [loading, setLoading] = useState(false);
  const minutes = timeLeft ? Math.floor(timeLeft / 60) : null;
  const seconds = timeLeft ? timeLeft % 60 : null;

  return (
    <div className="payment-pending">
      {showDetails ? (
        <QrGenerator ticket={id} />
      ) : (
        <p className="counter">
          {timeLeft ? minutes + ':' + `${seconds}`.padStart(2, '0') : null}
        </p>
      )}
    </div>
  );
}
