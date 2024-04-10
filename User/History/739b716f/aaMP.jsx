import React from 'react';
import './OrderReady.scss';
import ask from '../../../assets/icons/question.svg';
import { io } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { sendNotification } from '../../../redux/slices/global/notifications';
import { getCurrentUser } from '../../../redux/slices/global/user';

const { REACT_APP_SOCKET } = process.env;

export const OrderReady = ({
  number,
  setIsReady,
  setIsOpen,
  id,
  idClientePayment,
  nameBarra
}) => {
  const socket = io(REACT_APP_SOCKET);
  const user = useSelector(getCurrentUser);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      sendNotification({
        id: idClientePayment,
        title: '¡Tu pedido está listo!',
        message: `Podés retirarlo por la barra ${nameBarra} 🍻🍸`,
        idParty: user.idParty
      })
    );
    socket.emit('cliente:pedidolisto', {
      id: id,
      room: idClientePayment
    });
    setIsReady(false);
    setIsOpen(false);
  };
  return (
    <div className="overlay">
      <div className="ready-popup">
        <img className="icon" src={ask} alt="warning" />
        <div className="ready-popup-title">
          <h2>{`¿el pedido #${number} está listo para ser entregado?`}</h2>
        </div>
        <div className="buttons-popup">
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsReady(false);
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
