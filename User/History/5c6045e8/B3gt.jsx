import React, { useEffect, useState } from 'react';
import arrow from '../../../assets/buttons/arrow.svg';
import arrowGreen from '../../../assets/buttons/gradient-arrow-right.svg';
import './Items.scss';
import { OrderReady } from './OrderReady';
import { io } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { readOrder } from '../../../redux/slices/bartender/orders';
import { sendNotification } from '../../../redux/slices/global/notifications';
const { REACT_APP_SOCKET } = process.env;

export const Items = ({
  name,
  hour,
  number,
  order,
  id,
  idClientePayment,
  read,
  delivered,
  nameBarra
}) => {
  const socket = io(REACT_APP_SOCKET);
  const [time, setTime] = useState();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const getUser = useSelector((state) => state.global.user);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (delivered === 'false') {
      if (read === 'false') {
        dispatch(readOrder(id));
        dispatch(
          sendNotification({
            id: idClientePayment,
            title: 'Tu pedido esta en preparación',
            message: 'Dentro de poco tu pedido estará listo 🎉',
            idParty: getUser.idParty
          })
        );
        socket.emit('cliente:enpreparacion', {
          id: id,
          room: idClientePayment
        });
      }
    }
  };
  useEffect(() => {
    socket.emit('join_room', getUser.id);
  }, [getUser]);
  useEffect(() => {
    setTime(
      new Date(hour).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    );
  }, [hour, read]);
  return (
    <>
      <div className="item-container">
        <div
          className={`item ${read === 'false' && 'green-text'}`}
          onClick={() => handleClick()}
        >
          <p className="item-container__time">{time}</p>
          <p className="item-container__name">{name}</p>
          <p className="item-container__orderNum">#{number}</p>
          <img
            className={isOpen ? 'arrow-open' : 'arrow'}
            src={read === 'false' ? arrowGreen : arrow}
            alt="arrow"
          />
        </div>
        <div
          className={`items-details-container ${isOpen && 'show-container'}`}
        >
          <div className="white-line">&nbsp;</div>
          {order?.map((e) => (
            <React.Fragment key={e.title}>
              <div className="items-details-container__row">
                <div className="items-details-container__row__sub">
                  <img
                    className="items-details-container__drinkImage"
                    src={e.imageDrink}
                    alt="drink"
                  />
                  <div className="bartender-container-for-separation">
                    <h2 className="items-details-container__drinkName">
                      {e.title}
                    </h2>
                    <h2 className="items-details-container__drinkQty">
                      x {e.quantity}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="white-line">&nbsp;</div>
            </React.Fragment>
          ))}

          <div className="btn-container">
            <button
              className={`order-ready ${
                delivered === 'true' ? 'order-delivered' : null
              }`}
              onClick={() => delivered === 'false' && setIsReady(true)}
            >
              Pedido listo
            </button>
          </div>
        </div>
        <div className="pink-gradient-line-2">&nbsp;</div>
      </div>
      {isReady && (
        <OrderReady
          idClientePayment={idClientePayment}
          nameBarra={nameBarra}
          id={id}
          number={number}
          setIsReady={setIsReady}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
};
