import React from 'react';
import Lottie from 'react-lottie';
import './styles/NotFound.scss';
import bear from '@/assets/lottie-files/bear.json';
export interface NotFoundInterface {}

const NotFound: React.FC<NotFoundInterface> = () => {
  return (
    <div className="not-found">
      <h2 className="not-found__text">404</h2>
      <Lottie
        options={{
          animationData: bear,
          loop: true
        }}
      />
    </div>
  );
};

export default NotFound;
