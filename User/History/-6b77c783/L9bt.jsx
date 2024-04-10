import React, { useEffect, useState } from 'react';
import './Scanner.scss';
import { Header } from '../../../components/global/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import {
  getOrderBartender,
  setItems,
  setStatus
} from '../../../redux/slices/bartender/orders';
import { Ticket } from './Ticket';
import { QrScanner } from '../../../components/global/QrCode/QrScanner/QrScanner';
import { StatusPopUp } from '../../../components/global/StatusPopUp/StatusPopUp';
import { TabbarBartender } from '../TabbarBartender/TabbarBartender';

const { REACT_APP_SOCKET } = process.env;

const Scanner = () => {
  const socket = io(REACT_APP_SOCKET);
  const [isOpen, setIsOpen] = useState(true);
  const order = useSelector((state) => state.bartender.orders.order);
  const getStatus = useSelector((state) => state.bartender.orders.status);
  const dispatch = useDispatch();
  const [data, setData] = useState(false);
  const getUser = useSelector((state) => state.global.user);
  useEffect(() => {
    socket.emit('join_room', getUser.id);
  }, [getUser]);
  useEffect(() => {
    socket.on('server:ordenesbebida', (data) => {
      dispatch(setItems(data));
    });
  }, []);

  useEffect(() => {
    if (data) {
      setData(false);
      dispatch(getOrderBartender(data)).then((response) => {
        if (response.status === 200) {
          socket.emit('cliente:pedidoentregado', {
            id: data,
            idBartender: getUser.id,
            totalMinOrder: response.data.data.Order.totalMinOrder,
            room: response.data.data.Order.idClientePayment
          });
        }
      });
    }
  }, [data, getStatus, setData]);

  const statusPopup = () => {
    dispatch(setStatus(false));
    setIsOpen(true);
  };
  return (
    <div className="barman-container">
      <Header welcome={true} />
      {!isOpen && getStatus === 200 ? (
        <div className="ticket-container-bartender">
          <Ticket
            order={order}
            status={JSON.parse(order?.orderDelivered) === false && 'entregar'}
          />
        </div>
      ) : null}
      {getStatus !== 200 && getStatus ? (
        <StatusPopUp title={getStatus} redirect={statusPopup} />
      ) : null}
      {isOpen && <QrScanner setData={setData} setIsOpen={setIsOpen} />}
      <TabbarBartender isOpen={isOpen} setIsOpen={setIsOpen} active={'qr'} />
    </div>
  );
};
export default Scanner;
