import React from 'react';
import './styles/Lights.scss';
export interface LightsInterface {
  position: string;
}

const LightBlue: React.FC<LightsInterface> = ({ position }) => {
  return (
    <div
      className={`light-blue ${
        position === 'end'
          ? 'light-blue--end'
          : position === 'center' && 'light-blue--center'
      }`}
    />
  );
};

export default LightBlue;
