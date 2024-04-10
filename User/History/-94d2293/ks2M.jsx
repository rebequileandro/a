import './MyAccount.scss';

import Lottie from 'lottie-react';
import loadingAnimation from '../../../assets/loading.json';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { getCurrentUser } from '../../../redux/slices/global/user';
import Validate from '../../../utils/validation';
import { Header } from '../../../components/global/Header/Header';
import InputDiv from '../../../components/global/InputDiv/InputDiv';

const { REACT_APP_API } = process.env;

export default function MyAccount() {
  const navigate = useNavigate();
  const user = useSelector(getCurrentUser);
  return (
    <div className="my-account">
      <Header backbutton={() => navigate('/settings')} title={'Mi cuenta'} />
    </div>
  );
}
