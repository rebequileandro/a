import React, { useEffect, useState } from 'react';
import './order_card.scss';
import iconProfile from '../../../assets/global/icon_profile.svg';
import { useDispatch, useSelector } from 'react-redux';
import { cashierPayment, setStatus } from '../../../redux/slices/cashier/order';
import { io } from 'socket.io-client';
import { sendNotification } from '../../../redux/slices/global/notifications';
import axios from 'axios';
import { getCurrentUser } from '../../../redux/slices/global/user';
const { REACT_APP_SOCKET } = process.env;
export const OrderCard = ({ order, status }) => {
  const socket = io(REACT_APP_SOCKET);

  const [isDelivered, setIsDelivered] = useState();
  const getStatusCashier = useSelector((state) => state.cashier.order.status);
  const user = useSelector(getCurrentUser);
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const handleClick = () => {
    if (status === 'cobrar') {
      setProgress(100);
      setIsDisabled(true);
      dispatch(
        cashierPayment(order?._id, {
          idParty: order?.idParty
        })
      ).then((response) => {
        dispatch(
          sendNotification({
            id: response.data.data.idClientePayment,
            title: 'Pagaste tu pedido',
            message:
              'Seguí divirtiéndote, nosotros te avisaremos cuando esté listo tu pedido 🎉',
            idParty: user.idParty
          })
        );
        if (response.status === 200) {
          axios.post();
          socket.emit('cliente:pagocorrecto', {
            id: order?._id,
            titlePush: 'Nuevo pedido',
            messagePush: order.orderPayment.map(
              (e, i) =>
                `${e.title[0].toUpperCase() + e.title.slice(1)} x${e.quantity}${
                  order.length - 1 > i ? ', ' : ' '
                }`
            )
          });
          socket.emit('cliente:pagado', {
            id: order?._id,
            room: response.data.data.idClientePayment
          });
        }
      });
    }
  };
  useEffect(() => {
    setIsDelivered(status);
  }, [status]);
  useEffect(() => {
    if (getStatusCashier === 200) {
      setTimeout(() => {
        setIsDelivered('cobrado');
      }, 4000);
      setTimeout(() => {
        dispatch(setStatus(false));
      }, 4000);
    }
    if (isDelivered === 'entregar') {
      setProgress(100);
      setTimeout(() => {
        setIsDelivered('entregado');
      }, 4000);
    }
  }, [getStatusCashier, isDelivered]);

  let profile = { image: iconProfile, name: 'fiestero' };
  return (
    <div className="ticket-container">
      <div className="ticket-header">
        <div className="profile">
          <div className="profile-image">
            <img
              className={profile.image === iconProfile ? 'icon-profile' : null}
              src={profile.image}
              alt="profile"
            />
          </div>
        </div>
        <h2 className="profile-name">{order?.nameClientePayment}</h2>
        <h2 className="ticket-id">#{order?.idOrder}</h2>
      </div>
      <div className="ticket-order-container">
        {order?.orderPayment?.map((e) => (
          <>
            <div key={e.title} className="order-container">
              <div className="image-amount">
                {e?.typeDrink === 'packs' ? (
                  <div className="image-packs">
                    {e.imageDrink.map((image) => (
                      <img key={image} src={image} alt="pack" />
                    ))}
                  </div>
                ) : (
                  <img src={e.imageDrink} alt="" />
                )}
                <h2>{e.title}</h2>
                <div className="amount">
                  <p>x {e.quantity}</p>
                </div>
              </div>
            </div>
            <div className="grey-line">&nbsp;</div>
          </>
        ))}
        {order?.total && (
          <div className="total">
            <h2>total</h2>
            <h2>${order?.total}</h2>
          </div>
        )}
      </div>
      <button
        disabled={isDisabled}
        onClick={() => handleClick()}
        className={
          isDelivered === 'cobrar' || isDelivered === 'entregar'
            ? 'order-status-deliver'
            : 'order-status-delivered'
        }
      >
        <div
          className="button__progress"
          style={{ width: `${progress}%` }}
        ></div>
        {isDelivered}
      </button>
    </div>
  );
};
