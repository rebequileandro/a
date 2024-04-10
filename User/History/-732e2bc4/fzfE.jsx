import React, { useEffect } from 'react';
import {
  deliverOrder,
  updateStatus
} from '../../../redux/slices/partyUser/order';
import ORDER_STATUS from '../../../models/order-stages.model';
import { io } from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../../../models/routes.models';
const { ORDER_CONFIRMED, IN_PREPARATION, ORDER_READY, GET_READY } =
  ORDER_STATUS;

export const SocketReques = ({ socket }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.global.user);

  useEffect(() => {
    socket.emit('join_room', user._id);
    socket.on('server:pagado', (data) => {
      console.log('RECIBIDO EL PAGO PIBE', data);
      dispatch(updateStatus({ status: ORDER_CONFIRMED, id: data.id }));
    });

    socket.on('server:enpreparacion', (data) => {
      dispatch(updateStatus({ status: IN_PREPARATION, id: data.id }));
      const minutes = data.minutos;
      const now = new Date();
      const nowTimestamp = now.getTime();
      const milliseconds = minutes * 60000;
    });
    socket.on('server:preparate', (data) => {
      dispatch(updateStatus({ status: GET_READY, id: data.id }));
    });
    socket.on('server:confirmandoretiro', (data) => {
      dispatch(updateStatus({ status: ORDER_READY, id: data.id }));
    });

    socket.on('server:pedidoentregado', (data) => {
      navigate(routes.partyUser.marketplace);
      dispatch(deliverOrder(data.id));
    });
  }, []);
  return <></>;
};
