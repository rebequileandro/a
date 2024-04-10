import React from 'react';
import './linkedAccounts.scss';
import { Header } from '../../../components/global/Header/Header';
import { useNavigate } from 'react-router-dom';
import AccountItem from './AccountItem/AccountItem';
import cashIcon from '../../../../assets/icons/Checkout/cash.svg';
import mercadoPagoIcon from '../../../../assets/icons/Checkout/mercado-pago.svg';
import binance from '../../../../assets/icons/Checkout/binance.svg';
const LinkedAccounts = () => {
  const navigate = useNavigate();
  const PAYMENT_METHODS = {
    // name == the unique ID for the payment method
    // label == the text that will be displayed to the user
    //---------------------//
    mercadoPago: {
      id: 0,
      name: 'mercadopago',
      label: 'Mercado Pago',
      icon: mercadoPagoIcon
    },
    binance: {
      id: 1,
      name: 'binance',
      label: 'binance',
      icon: binance
    },
    cash: {
      id: 2,
      name: 'cash',
      label: 'Efectivo',
      icon: cashIcon
    }
  };
  return (
    <div className="linked-accounts layout-primary">
      <Header backbutton={() => navigate(-1)} title="Mi cuenta" />
      <h2>cuentas vinculadas</h2>
      <p>
        El dinero de todas las ventas realizadas a través de Shooza en tu local
        será Transferido en la siguiente cuenta:
      </p>
      <div>
        <AccountItem name="Mercado Pago" status={true} />
        <AccountItem name="Binance" />
        <AccountItem name="Efectivo" />
      </div>
    </div>
  );
};

export default LinkedAccounts;
