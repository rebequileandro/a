import './OrderStages.scss';

import ORDER_STATUS from '../../../../models/order-stages.model';
import { current } from '@reduxjs/toolkit';
import getReadyActive from '../../../../assets/icons/OrderStages/get_ready-active.svg';
import getReadyInactive from '../../../../assets/icons/OrderStages/get_ready-inactive.svg';
import inPreparationActive from '../../../../assets/icons/OrderStages/in_preparation-active.svg';
import inPreparationInactive from '../../../../assets/icons/OrderStages/in_preparation-inactive.svg';
import orderConfirmedActive from '../../../../assets/icons/OrderStages/order_confirmed-active.svg';
import orderConfirmedInactive from '../../../../assets/icons/OrderStages/order_confirmed-inactive.svg';
import orderReadyActive from '../../../../assets/icons/OrderStages/order_ready-active.svg';
import orderReadyInactive from '../../../../assets/icons/OrderStages/order_ready-inactive.svg';
import orderConfirmed from '../../../../assets/Fiestero/svg/orderStages/paymentConfirmed.svg';
import orderPrep from '../../../../assets/Fiestero/svg/orderStages/orderPrep.svg';
import orderGetReady from '../../../../assets/Fiestero/svg/orderStages/orderGetReady.svg';
import orderPickUp from '../../../../assets/Fiestero/svg/orderStages/orderPickUp.svg';
const stages = [
  {
    id: 1,
    status: ORDER_STATUS.ORDER_CONFIRMED,
    iconActive: orderConfirmedActive,
    iconInactive: orderConfirmedInactive,
    title: 'Confirmación del pago'
  },
  {
    id: 2,
    status: ORDER_STATUS.IN_PREPARATION,
    iconActive: inPreparationActive,
    iconInactive: inPreparationInactive,
    title: 'Bebidas en preparación'
  },
  {
    id: 3,
    status: ORDER_STATUS.GET_READY,
    iconActive: getReadyActive,
    iconInactive: getReadyInactive,
    title: 'Preparate para buscar tu pedido'
  },
  {
    id: 4,
    status: ORDER_STATUS.ORDER_READY,
    iconActive: orderReadyActive,
    iconInactive: orderReadyInactive,
    title: 'Puedes retirar tus bebidas'
  }
];

export default function OrderStages({ order }) {
  const status = order.status;
  let orderStatusImg;
  if (status === 'ORDER_CONFIRMED') {
    orderStatusImg = orderConfirmed;
  }
  if (status === 'IN_PREPARATION') {
    orderStatusImg = orderPrep;
  }
  if (status === 'GET_READY') {
    orderStatusImg = orderGetReady;
  }
  if (status === 'ORDER_READY') {
    orderStatusImg = orderPickUp;
  }
  return (
    <div className="order-stages">
      <img src={orderStatusImg} alt="#" />
    </div>
  );
}
