import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import './styles/Landing.scss';
import { useNavigate } from 'react-router-dom';
import loading from '@/assets/lottie-files/icons/loading.json';

export interface LandingInterface {}

const Landing: React.FC<LandingInterface> = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/App');
    }, 6000);
  });
  return (
    <div className="landing">
      <div>
        <Lottie
          options={{
            animationData: loading,
            loop: true
          }}
        />
      </div>
    </div>
  );
};

export default Landing;
