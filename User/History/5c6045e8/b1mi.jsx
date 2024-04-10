import React, { useEffect, useState } from 'react';
import arrow from '../../../assets/buttons/arrow.svg';

import './Items.scss';
import { OrderReady } from './OrderReady';
import { io } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { readOrder } from '../../../redux/slices/bartender/orders';
const { REACT_APP_SOCKET } = process.env;

export const Items = ({
  name,
  hour,
  number,
  order,
  id,
  idClientePayment,
  read,
  delivered
}) => {
  const socket = io(REACT_APP_SOCKET, {
    transports: ['websocket', 'polling', 'flashsocket']
  });
  const [time, setTime] = useState();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const getUser = useSelector((state) => state.global.user);

  const handleClick = () => {
    if (delivered === 'false') {
      setIsOpen(!isOpen);
      if (read === 'false') {
        dispatch(readOrder(id));
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
  }, []);
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
            src={arrow}
            alt="arrow"
          />
        </div>
        <div
          className={`items-details-container ${isOpen && 'show-container'}`}
        >
          {order?.map((e) => (
            <React.Fragment key={e.title}>
              <div className="item-detail">
                <div className="image-amount">
                  <img src={e.imageDrink} alt="drink" />
                  <div className="amount">
                    <p>x</p>
                    <h2>{e.quantity}</h2>
                  </div>
                </div>
                <h2 className="drink">{e.title}</h2>
              </div>
              <hr />
            </React.Fragment>
          ))}
          <div className="btn-container">
            <button
              className={`order-ready ${
                delivered === 'true' ? 'order-delivered' : null
              }`}
              onClick={() => setIsReady(true)}
            >
              Pedido listo
            </button>
          </div>
        </div>
        <div className="pink-gradient-division">&nbsp;</div>
      </div>
      {isReady && (
        <OrderReady
          idClientePayment={idClientePayment}
          id={id}
          number={number}
          setIsReady={setIsReady}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
};
