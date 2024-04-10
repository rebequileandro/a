import React from 'react';
import './linkedAccounts.scss';
import { Header } from '../../../components/global/Header/Header';
import { useNavigate } from 'react-router-dom';
const LinkedAccounts = () => {
  const navigate = useNavigate();
  return (
    <div className="linked-accounts layout-primary">
      <Header backbutton={navigate(-1)} />
    </div>
  );
};

export default LinkedAccounts;
