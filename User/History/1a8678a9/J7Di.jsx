import React from 'react';
import './OrderReady.scss';
import ask from '../../../assets/icons/question.svg';
import { useDispatch, useSelector } from 'react-redux';
import { sendNotification } from '../../../redux/slices/global/notifications';
import { getCurrentUser } from '../../../redux/slices/global/user';
import {
  deliverOrder,
  getAllOrders,
  setBartenderOrderStages,
  updateDelivered,
  updateOrderStage
} from '../../../redux/slices/bartender/orders';
import ORDER_STATUS from '../../../models/order-stages.model';

export const OrderReady = ({
  number,
  setIsOpenPopup,
  setIsOpen,
  id,
  idClientePayment,
  nameBarra,
  socket,
  paymentOwner,
  setCancelTimer,
  status
}) => {
  // const { REACT_APP_API } = process.env;
  const dispatch = useDispatch();

  const user = useSelector(getCurrentUser);
  const getUser = useSelector((state) => state.global.user);

  const handleClick = async () => {
    if (status === ORDER_STATUS.ORDER_READY) {
      console.log('entreeee', status);
      dispatch(
        sendNotification({
          id: idClientePayment,
          title: '¡Tu orden está lista!',
          message: `Puedes retirarla por la barra ${nameBarra} 🍻🍸`,
          idParty: getUser.idParty,
          idOrder: id,
          orderStage: ORDER_STATUS.ORDER_READY
        })
      );
    } else if (paymentOwner === 'cashier') {
      try {
        await dispatch(deliverOrder(id, getUser?.square)).then((response) => {
          if (response?.status === 200) {
            // console.log('TRY CAJERO STATUS 200');

            dispatch(
              updateOrderStage({
                status: ORDER_STATUS.ORDER_DELIVERED,
                id: id
              })
            );
            dispatch(
              updateDelivered({
                status: true,
                id: id
              })
            );

            socket.emit('cliente:pedidoentregado', {
              id: id,
              totalMinOrder: order?.totalMinOrder,
              room: order?.idClientePayment
            });
          }
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      setCancelTimer(false);
      dispatch(setBartenderOrderStages(id, ORDER_STATUS.ORDER_READY));
      dispatch(updateOrderStage({ status: ORDER_STATUS.ORDER_READY, id: id }));
      dispatch(
        sendNotification({
          id: idClientePayment,
          title: '¡Tu orden está lista!',
          message: `Puedes retirarla por la barra ${nameBarra} 🍻🍸`,
          idParty: getUser.idParty,
          idOrder: id,
          orderStage: ORDER_STATUS.ORDER_READY
        })
      );
      socket.emit('cliente:pedidolisto', {
        id: id,
        room: idClientePayment
      });
    }
    localStorage.removeItem(`readOrderTime_${id}`);
    setIsOpenPopup(false);
  };
  return (
    <div className="overlay">
      <div className="ready-popup">
        <img className="icon" src={ask} alt="warning" loading="lazy" />
        <div className="ready-popup-title">
          <h2>{`¿el pedido #${number} está listo para ser entregado?`}</h2>
        </div>
        <div className="buttons-popup">
          <button
            onClick={() => {
              setIsOpenPopup(false);
            }}
            className="confirm-button cancel"
          >
            no
          </button>
          <button
            className="confirm-button delete"
            onClick={() => handleClick()}
          >
            si
          </button>
        </div>
      </div>
    </div>
  );
};
