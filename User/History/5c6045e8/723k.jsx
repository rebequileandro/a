import React, { useEffect, useState } from 'react';
import arrow from '../../../assets/buttons/arrow-right.svg';
import gradientArrow from '../../../assets/buttons/gradient-arrow-right.svg';
import './Items.scss';
import { OrderReady } from './OrderReady';
import { io } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { readOrder } from '../../../redux/slices/Bartender';
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
  const getUser = useSelector((state) => state.user);
  let image = read === 'true' ? arrow : gradientArrow;
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
          <p>{time}</p>
          <p>{name}</p>
          <p>#{number}</p>
          <img
            className={isOpen ? 'arrow-open' : 'arrow'}
            src={image}
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
        <hr />
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
