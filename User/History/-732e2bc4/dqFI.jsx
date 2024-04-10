import React, { useEffect } from 'react';
import {
  deliverOrder,
  updateStatus
} from '../../../redux/slices/partyUser/order';
import ORDER_STATUS from '../../../models/order-stages.model';
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
      dispatch(updateStatus({ status: ORDER_CONFIRMED, id: data.id }));
      navigator.vibrate(100);
    });

    socket.on('server:enpreparacion', (data) => {
      dispatch(updateStatus({ status: IN_PREPARATION, id: data.id }));
      const minutes = data.minutos;
      const now = new Date();
      const nowTimestamp = now.getTime();
      const milliseconds = minutes * 60000;
      navigator.vibrate(100);
    });
    socket.on('server:preparate', (data) => {
      dispatch(updateStatus({ status: GET_READY, id: data.id }));
      navigator.vibrate(500);
    });
    socket.on('server:confirmandoretiro', (data) => {
      dispatch(updateStatus({ status: ORDER_READY, id: data.id }));
      navigator.vibrate(500);
    });

    socket.on('server:pedidoentregado', (data) => {
      navigate(routes.partyUser.marketplace);
      dispatch(deliverOrder(data.id));
      navigator.vibrate(500);
    });
  }, []);
  return <></>;
};
