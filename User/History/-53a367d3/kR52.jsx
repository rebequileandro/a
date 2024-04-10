import React, { Fragment, useEffect, useState } from 'react';
import './order_card.scss';
import iconProfile from '../../../assets/global/icon_profile.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setStatus } from '../../../redux/slices/cashier/order';
import { getCurrentUser } from '../../../redux/slices/global/user';
import { StatusPopUp } from '../../global/StatusPopUp/StatusPopUp';
import { Loading } from '../../global/Loader/Loader';
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

  const handleClick = async () => {
    setProgress(100);
    setIsDisabled(true);
    if (status === 'entregar') {
      try {
        await dispatch(deliverOrder(order?._id, user?.square)).then(
          (response) => {
            if (response?.status === 200) {
              socket.emit('cliente:pedidoentregado', {
                id: order?._id,
                totalMinOrder: order?.totalMinOrder,
                room: order?.idClientePayment
              });
            }
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleClosePopUp = () => {
    setIsOpen(false);
    dispatch(setStatus(false));
    setProgress(0);
  };

  useEffect(() => {
    setIsDelivered(status);
    return () => setIsDelivered(false);
  }, [status]);

  useEffect(() => {
    if (getStatusBartender === 200) {
      setIsDelivered('entregado');
    }
  }, [getStatusCashier, isDelivered, getStatusBartender]);

  let profile = { image: iconProfile, name: 'fiestero' };
  let firstName = order?.nameClientePayment?.split(' ')[0];
  console.log(user);
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
            {order?.orderPayment?.map((e, i) => (
              <Fragment key={e.title + i}>
                <div key={e.title} className="order-container">
                  <div className="image-amount">
                    {e?.typeDrink === 'packs' ? (
                      <div className="image-packs">
                        {e.imageDrink.map((image, i) => (
                          <img
                            key={`${image}${i}`}
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
                {order?.orderPayment.length - 1 > i && (
                  <div className="grey-line">&nbsp;</div>
                )}
              </Fragment>
            ))}
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
