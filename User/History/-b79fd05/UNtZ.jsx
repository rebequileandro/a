import React, { useEffect, useState } from 'react';
import './Home.scss';
import { QRScanner } from '../../../components/global/QrCode/QrScanner/QrScanner';
import { OrderCard } from '../../../components/global/Order_Card/Order_Card';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../../redux/slices/cashier/order';
import { TabbarCashier } from '../../../components/cashier/Tabbar/TabbarCashier';
import { Header } from '../../../components/global/Header/Header';
import axios from 'axios';
import { getCashierClub } from '../../../redux/slices/cashier/club';
import { useNavigate } from 'react-router-dom';
import routes from '../../../models/routes.models';

const Home = ({ socket }) => {
  // const order = useSelector((state) => state.cashier.order.order);
  const currentUser = useSelector((state) => state.global.user);
  const getClub = useSelector((state) => state.cashier.cashierClub);

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [orderId, setOrderId] = useState(false);
  const navigate = useNavigate();
  let namePoint = getClub.nameParty.split(' ')[0];

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
      let id = orderId.split('-');
      if (id[0] === 'charge') {
        navigate(`${routes.cashier.chargePoints}/${id[1]}`);
      } else {
        navigate(`${routes.cashier.returnPoints}/${id[1]}`);
      }
      setTimeout(() => {
        setOrderId(false);
      }, 1000);
    }
  }, [orderId]);

  return (
    <div className="cashier-container layout-primary">
      <Header />
      {isOpen && <QRScanner setIsOpen={setIsOpen} setData={setOrderId} />}
      {!isOpen && (
        <>
          <div className="cashier-container__points-wrapper">
            <div className="cashier-container__points">
              <h3>Under points cargados</h3>
              <h2>U 100.000</h2>
            </div>
            <div className="cashier-container__points">
              <h3>Under points Devueltos</h3>
              <h2>U 100.000</h2>
            </div>
          </div>
          <div className="cashier-container__total-points"></div>
        </>
      )}
      <TabbarCashier setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};
export default Home;
