import React, { useEffect, useState } from 'react';
import './order_card.scss';
import iconProfile from '../../../assets/global/icon_profile.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  cashierPayment,
  setCashierOrderStages,
  setStatus
} from '../../../redux/slices/cashier/order';
import { sendNotification } from '../../../redux/slices/global/notifications';
import { getCurrentUser } from '../../../redux/slices/global/user';
import ORDER_STATUS from '../../../models/order-stages.model';
import { StatusPopUp } from '../StatusPopUp/StatusPopUp';
import { formatNumber } from '../../../utils/formatNumber';
import { Loading } from '../../../components/global/Loader/Loader';
import { deliverOrder } from '../../../redux/slices/bartender/orders';

export const OrderCard = ({ order, status, socket }) => {
  const [isDelivered, setIsDelivered] = useState();
  const getStatusCashier = useSelector((state) => state.cashier.order.status);
  const getStatusBartender = useSelector(
    (state) => state.bartender.orders.status
  );
  const user = useSelector(getCurrentUser);
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (status === 'cobrar') {
      setProgress(100);
      setIsDisabled(true);
      dispatch(
        cashierPayment(order?._id, {
          idParty: order?.idParty
        })
      )
        .then((response) => {
          console.log('Soy response', response);
          dispatch(
            sendNotification({
              id: response.data.data.idClientePayment,
              title: 'Pagaste tu pedido',
              message:
                'Seguí divirtiéndote, nosotros te avisaremos cuando esté listo tu pedido 🎉',
              idParty: user.idParty,
              idOrder: order?._id
            })
          );
          if (response.status === 200) {
            socket.emit('cliente:pagocorrecto', {
              id: order?._id,
              titlePush: 'Nuevo pedido',
              messagePush: order.orderPayment.map(
                (e) =>
                  `${e.title[0].toUpperCase() + e.title.slice(1)} x${
                    e.quantity
                  }`
              )
            });
            socket.emit('cliente:pagado', {
              id: order?._id,
              room: response.data.data.idClientePayment
            });
            dispatch(
              setCashierOrderStages(order?._id, ORDER_STATUS.ORDER_CONFIRMED)
            );
          }
        })
        .catch((response) => {
          console.log('SOY EL CATCH', response);
        });
    } else {
      setProgress(100);
      setIsDisabled(true);
      dispatch(deliverOrder(order?._id, user.square)).then((response) => {
        console.log('RESPONSE DELIVER ORDER CARD', response);
        if (response.status === 200) {
          // socket.emit('cliente:pedidoentregado', {
          //   id: order?._id,
          //   totalMinOrder: response.data.data.order.totalMinOrder,
          //   room: response.data.data.order.idClientePayment
          // });
        }
      });
    }
  };
  const handleClosePopUp = () => {
    setIsOpen(false);
    dispatch(setStatus(false));
    setProgress(0);
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
    } else if (getStatusCashier.statusCode === 400) {
      setIsOpen(true);
      // socket.emit('cliente:stockcajero', {
      //   _id: order?._id,
      //   orderPayment: getStatusCashier.missingItem.map(e => e)
      //   // [...{_id:13123,nameDrink:"fernet"}]
      // });
    }
    if (getStatusBartender === 200) {
      setTimeout(() => {
        setIsDelivered('entregado');
      }, 4000);
    }
  }, [getStatusCashier, isDelivered, getStatusBartender]);

  let profile = { image: iconProfile, name: 'fiestero' };
  let firstName = order?.nameClientePayment?.split(' ')[0];
  console.log(order);
  return (
    <>
      {Object.keys(order).length ? (
        <div className="ticket-container">
          <div className="ticket-header">
            <div className="profile">
              <div className="profile-image">
                <img
                  key={order._id}
                  className={
                    profile.image === iconProfile ? 'icon-profile' : null
                  }
                  src={
                    order?.imagePartyUser ? order.imagePartyUser : profile.image
                  }
                  alt="profile"
                  loading="lazy"
                />
              </div>
            </div>
            <h2 className="profile-name">{firstName}</h2>
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
                          <img
                            key={image}
                            src={image}
                            alt="pack"
                            loading="lazy"
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="image-amount__image-container">
                        <img src={e.imageDrink} alt={e.title} loading="lazy" />
                      </div>
                    )}
                    <div className="amount">
                      <h2>{e.title}</h2>
                      <p>
                        x <span>{e.quantity}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grey-line">&nbsp;</div>
              </>
            ))}
            {order?.total && (
              <div className="total">
                <h2>total</h2>
                <h2>${formatNumber(order?.total)}</h2>
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
      ) : (
        <Loading />
      )}
      <StatusPopUp
        isOpen={isOpen}
        button={'Aceptar'}
        redirect={handleClosePopUp}
        description={getStatusCashier.description}
        missingItem={getStatusCashier.missingItems}
      />
    </>
  );
};
