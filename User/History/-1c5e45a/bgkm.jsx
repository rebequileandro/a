import './PaymentPending.scss';
import loadingAnimation from '../../../../assets/loading.json';
import { QrGenerator } from '../../../global/QrCode/QrGenerator/QrGenerator';
import Lottie from 'lottie-react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getOrder } from '../../../../redux/slices/partyUser/order';
import { useSelector } from 'react-redux';

export default function PaymentPending({ showDetails, id }) {
  // const [loading, setLoading] = useState(false);
  // const minutes = timeLeft ? Math.floor(timeLeft / 60) : null;
  // const seconds = timeLeft ? timeLeft % 60 : null;
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);

  const orders = useSelector(getOrder);
  useEffect(() => {
    let order = orders?.find((ord) => ord.id === id);
    setMinutes(Math.floor(order?.timeLeft / 60));
    setSeconds(order?.timeLeft % 60);
  }, [orders?.find((ord) => ord.id === id)]);
  console.log(minutes);
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
