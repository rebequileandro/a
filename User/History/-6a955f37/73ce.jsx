import React from 'react';
import { Header } from '../../../components/global/Header/Header';
import './points.scss';
import { useNavigate } from 'react-router-dom';
import { PointCard } from './PointCard/PointCard';

const Points = ({ action }) => {
  const navigate = useNavigate();
  return (
    <div className="points layout-primary">
      <Header
        title={`${action === 'charge' ? 'Cargar' : 'Devolución'} puntos`}
        backbutton={() => navigate(-1)}
      />
      <PointCard action={action} />
    </div>
  );
};
export default Points;
