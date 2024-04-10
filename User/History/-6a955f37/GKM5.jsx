import React from 'react';
import { Header } from '../../../components/global/Header/Header';

export const Poins = () => {
  return (
    <div>
      <Header title={'Cargar puntos'} backbutton={() => navigate(-1)} />
    </div>
  );
};
