import { useEffect, useState } from 'react';
import './OrderStages.scss';
import orderConfirmed from '../../../../assets/Fiestero/svg/orderStages/paymentConfirmed.svg';
import orderPrep from '../../../../assets/Fiestero/svg/orderStages/orderPrep.svg';
import orderGetReady from '../../../../assets/Fiestero/svg/orderStages/orderGetReady.svg';
import orderPickUp from '../../../../assets/Fiestero/svg/orderStages/orderPickUp.svg';
import TABLE_STAGES from '../../../../models/order-table-stages.model';
import tableStageConfirm from '../../../../assets/Fiestero/svg/orderStages/table-stage_confirm.svg';
import tableStageCommanded from '../../../../assets/Fiestero/svg/orderStages/table-stage_commanded.svg';
import tableStageDelivered from '../../../../assets/Fiestero/svg/orderStages/table-stage_delivered.svg';

export default function OrderStages({ order }) {
  const [statusImg, setStatusImg] = useState(orderConfirmed);

  useEffect(() => {
    if (order?.nameTable) {
      console.log('table styave');
      if (
        order.tableStage === TABLE_STAGES.CONFIRMED ||
        order.tableStage === TABLE_STAGES.READ
      ) {
        setStatusImg(tableStageConfirm);
      }
      if (order.tableStage === TABLE_STAGES.COMMANDED) {
        setStatusImg(tableStageCommanded);
      }
      if (order.tableStage === TABLE_STAGES.DELIVERED) {
        setStatusImg(tableStageDelivered);
      }
    } else {
      if (order.status === 'ORDER_CONFIRMED') {
        setStatusImg(orderConfirmed);
      }
      if (order.status === 'IN_PREPARATION') {
        setStatusImg(orderPrep);
      }
      if (order.status === 'GET_READY') {
        setStatusImg(orderGetReady);
      }
      if (order.status === 'ORDER_READY') {
        setStatusImg(orderPickUp);
      }
    }
  }, [order.status, order.tableStage]);

  return (
    <div className="order-stages">
      <img src={statusImg} alt={order.status} loading="lazy" />
    </div>
  );
}
