import React from 'react';
import { Header } from '../../../components/global/Header/Header';
import './points.scss';
export const Poins = ({ action }) => {
  return (
    <div>
      <Header
        title={`${action === 'charge' ? 'Cargar' : 'Devolución'} puntos`}
        backbutton={() => navigate(-1)}
      />
    </div>
  );
};
