import './PaymentPending.scss';
import { QrGenerator } from '../../../global/QrCode/QrGenerator/QrGenerator';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getOrder } from '../../../../redux/slices/partyUser/order';

export default function PaymentPending({ showDetails, id }) {
  const orders = useSelector(getOrder);

  // const minutes = timeLeft ? Math.floor(timeLeft / 60) : null;
  // const seconds = timeLeft ? timeLeft % 60 : null;
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    let order = orders?.find((ord) => ord.id === id);
    setMinutes(Math.floor(order.timeLeft / 60));
    setSeconds(order.timeLeft % 60);
  }, [orders?.find((ord) => ord.id === id)]);

  return (
    <div className="payment-pending">
      {showDetails ? (
        <QrGenerator ticket={id} />
      ) : (
        <p className="counter">
          {minutes + ':' + `${seconds}`.padStart(2, '0')}
        </p>
      )}
    </div>
  );
}
