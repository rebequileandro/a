import './OrderStages.scss';
import orderConfirmed from '../../../../assets/Fiestero/svg/orderStages/paymentConfirmed.svg';
import orderPrep from '../../../../assets/Fiestero/svg/orderStages/orderPrep.svg';
import orderGetReady from '../../../../assets/Fiestero/svg/orderStages/orderGetReady.svg';
import orderPickUp from '../../../../assets/Fiestero/svg/orderStages/orderPickUp.svg';
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
      <img src={orderStatusImg} alt={status} loading="lazy" />
    </div>
  );
}
