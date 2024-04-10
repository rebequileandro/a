import React from 'react';
import { Header } from '../../../components/global/Header/Header';
import { useNavigate } from 'react-router-dom';

export const ReturnPoints = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header title={'Devolución puntos'} backbutton={() => navigate(-1)} />
      <section className="return-points"></section>
    </>
  );
};
