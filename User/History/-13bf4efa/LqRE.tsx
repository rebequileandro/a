import React from 'react';
import './styles/CV.scss';
import cv from '@/assets/Leandro Rebequi.pdf';
export interface CVInterface {}

const CV: React.FC<CVInterface> = () => {
  return (
    <div className="cv">
      <object data={cv} />
    </div>
  );
};

export default CV;
