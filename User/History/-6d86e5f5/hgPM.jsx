import React from 'react';
import './linkedAccounts.scss';
import { Header } from '../../../components/global/Header/Header';
import { useNavigate } from 'react-router-dom';
import AccountItem from './AccountItem/AccountItem';
const LinkedAccounts = () => {
  const navigate = useNavigate();
  return (
    <div className="linked-accounts layout-primary">
      <Header backbutton={() => navigate(-1)} title="Mi cuenta" />
      <h2>cuentas vinculadas</h2>
      <p>
        El dinero de todas las ventas realizadas a través de Shooza en tu local
        será Transferido en la siguiente cuenta:
      </p>
      <div>
        <AccountItem />
        <AccountItem />
        <AccountItem />
      </div>
    </div>
  );
};

export default LinkedAccounts;
