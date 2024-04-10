import './OrderStages.scss';

import { ORDER_STATUS } from '../../../../redux/slices/order';
import { current } from '@reduxjs/toolkit';
import getReadyActive from '../../../../assets/icons/OrderStages/get_ready-active.svg';
import getReadyInactive from '../../../../assets/icons/OrderStages/get_ready-inactive.svg';
import inPreparationActive from '../../../../assets/icons/OrderStages/in_preparation-active.svg';
import inPreparationInactive from '../../../../assets/icons/OrderStages/in_preparation-inactive.svg';
import orderConfirmedActive from '../../../../assets/icons/OrderStages/order_confirmed-active.svg';
import orderConfirmedInactive from '../../../../assets/icons/OrderStages/order_confirmed-inactive.svg';
import orderReadyActive from '../../../../assets/icons/OrderStages/order_ready-active.svg';
import orderReadyInactive from '../../../../assets/icons/OrderStages/order_ready-inactive.svg';

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
  const activeStage = stages.find((stage) => stage.status === status);

  return (
    <div className="order-stages">
      {stages.map((stage) => {
        let className = 'stage';
        let containerClass = 'stage-container';

        let icon = stage.iconActive;

        if (stage.id === activeStage.id) {
          className = className + ' current';
          containerClass = containerClass + ' current';
        } else if (stage.id < activeStage.id) {
          className = className + ' completed';
          containerClass = containerClass + ' completed';
        } else if (stage.id > activeStage.id) {
          className = className + ' remaining';
          icon = stage.iconInactive;
          containerClass = containerClass + ' remaining';
        }

        return (
          <div className={containerClass}>
            <div className={className}>
              <img src={icon} alt="" />
            </div>
            <p className="stage-title">{stage.title}</p>
          </div>
        );
      })}
    </div>
  );
}
