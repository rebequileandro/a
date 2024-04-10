import React from 'react';
import { Header } from '../../../components/global/Header/Header';
import './points.scss';
import { useNavigate } from 'react-router-dom';

const Points = ({ action }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Header
        title={`${action === 'charge' ? 'Cargar' : 'Devolución'} puntos`}
        backbutton={() => navigate(-1)}
      />
    </div>
  );
};
export default Points;
