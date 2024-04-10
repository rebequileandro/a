import React from 'react';
import './styles/Lights.scss';
export interface LightsInterface {}

const Lights: React.FC<LightsInterface> = () => {
  return <div className="lights" />;
};

export default Lights;
