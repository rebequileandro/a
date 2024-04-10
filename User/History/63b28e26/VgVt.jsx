import './OrderReady.scss';

import { QrGenerator } from '../../../global/QrCode/QrGenerator/QrGenerator';
import OrderStages from '../OrderStages/OrderStages';
import { useEffect, useState } from 'react';

export default function OrderReady({ showDetails, order }) {
  return (
    <div className="order-ready">
      <div className={showDetails ? 'qr-div' : 'qr-div'}>
        <p>
          Mostrá el código QR en la <span>Barra {order.nameBar}</span>{' '}
        </p>
        <QrGenerator ticket={order.id} />
      </div>
    </div>
  );
}
