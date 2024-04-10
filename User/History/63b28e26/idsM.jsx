import './OrderReady.scss';

import { QrGenerator } from '../../../global/QrCode/QrGenerator/QrGenerator';

export default function OrderReady({ showDetails, order }) {
  return (
    <>
      <OrderStages order={order} />
      <div className="order-ready">
        <div className={showDetails ? 'qr-div' : 'qr-div'}>
          <p>
            Mostrá el código QR en la <span>Barra FALO</span>{' '}
          </p>
          <QrGenerator ticket={order.id} />
        </div>
      </div>
    </>
  );
}
