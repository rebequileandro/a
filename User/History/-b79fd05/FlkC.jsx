import React, { useEffect, useState } from 'react';
import './Home.scss';
import { QRScanner } from '../../../components/global/QrCode/QrScanner/QrScanner';
import { OrderCard } from '../../../components/global/Order_Card/Order_Card';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../../redux/slices/cashier/order';
import { TabbarCashier } from '../../../components/cashier/Tabbar/TabbarCashier';
import qrImage from '../../../assets/icons/Checkout/Qr.svg';
import { Header } from '../../../components/global/Header/Header';
import { ChargeCard } from '../../../components/cashier/ChargeCard/ChargeCard';
import axios from 'axios';
import { getCashierClub } from '../../../redux/slices/cashier/club';

const Home = ({ socket }) => {
  const order = useSelector((state) => state.cashier.order.order);
  const currentUser = useSelector((state) => state.global.user);

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [orderId, setOrderId] = useState(false);
  const [orderIdSlices, setOrderIdSlices] = useState([]);
  const [partyUser, setPartyUser] = useState([]);

  const getPartyUser = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/partyuser/user/${orderIdSlices[1]}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dispatch(getCashierClub(currentUser.idParty));
  }, []);

  useEffect(() => {
    socket.emit('join_room', currentUser.id);
    socket.on('connect_error', (err) => {
      console.log(`connect_error due to ${err.message}`);
      socket.emit('join_room', currentUser.id);
    });
    socket.on('reconnect', () => {
      socket.emit('join_room', currentUser.id);
    });
  }, [currentUser]);

  useEffect(() => {
    if (orderId) {
      setOrderIdSlices(orderId.split('-'));
      getPartyUser();
      // dispatch(getOrder(orderId.split('-')[1]));
      setTimeout(() => {
        setOrderId(false);
      }, 1000);
    }
  }, [orderId]);

  return (
    <div className="cashier-container layout-primary">
      <Header />
      {isOpen && <QRScanner setIsOpen={setIsOpen} setData={setOrderId} />}
      {/* {order?.orderPayment?.length && !isOpen ? (
        <div className="layout-primary ticket-cashier-container">
          <OrderCard
            status={
              JSON.parse(order.paymentCompledPayment) === false &&
              JSON.parse(order.qrRead) === false
                ? 'cobrar'
                : 'cobrado'
            }
            order={order}
            socket={socket}
          />
        </div>
      ) : null} */}
      {!isOpen && orderIdSlices.length && orderIdSlices[0] === 'charge' ? (
        <ChargeCard idUser={orderIdSlices[1]} idParty={currentUser.idParty} />
      ) : null}
      <TabbarCashier setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};
export default Home;
