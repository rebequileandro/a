import React, { useEffect, useState } from 'react';
import {
  deliverOrder,
  ORDER_STATUS,
  updateStatus
} from '../../../redux/slices/partyUser/order';

import { io } from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const { REACT_APP_SOCKET } = process.env;
const { REACT_APP_API } = process.env;
const { ORDER_CONFIRMED, IN_PREPARATION, ORDER_READY, GET_READY } =
  ORDER_STATUS;

export const SocketReques = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.global.user);
  useEffect(() => {
    const socket = io(REACT_APP_SOCKET, {
      transports: ['websocket', 'polling', 'flashsocket']
    });

    socket.emit('join_room', user.id);

    console.log('SOCKET', socket);

    socket.on('server:pagado', (data) => {
      console.log('RECIBIDO EL PAGO PIBE', data);
      //dispatch(updateStatus({ status: ORDER_CONFIRMED, id: data.id }));
    });

    socket.on('server:enpreparacion', (data) => {
      dispatch(updateStatus({ status: IN_PREPARATION, id: data.id }));
      const minutes = data.minutos;
      const now = new Date();
      const nowTimestamp = now.getTime();
      const milliseconds = minutes * 60000;
      fetch(`${REACT_APP_API}/webpush/new-message`, {
        method: 'POST',
        body: JSON.stringify({
          title: '¡Tu pedido está en preparación!',
          message:
            'Continúa divirtiéndote y nosotros te avisaremos cuando esté listo 🎉'
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    });

    socket.on('server:confirmandoretiro', (data) => {
      dispatch(updateStatus({ status: ORDER_READY, id: data.id }));
      fetch(`${REACT_APP_API}/webpush/new-message`, {
        method: 'POST',
        body: JSON.stringify({
          title: '¡Tu pedido está listo! 🍸🍻',
          message: 'Acercate a la barra para retirarlo'
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    });

    socket.on('server:pedidoentregado', (data) => {
      navigate('/');
      dispatch(deliverOrder(data.id));
      fetch(`${REACT_APP_API}/webpush/new-message`, {
        method: 'POST',
        body: JSON.stringify({
          title: '¡Tu pedido ha sido entregado! 🎉',
          message: 'gracias, vuelva prontos'
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    });
  }, []);

  return <></>;
};
