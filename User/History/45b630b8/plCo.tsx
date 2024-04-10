import React, { useEffect, useState } from 'react';
import { AboutMe, Contact, Home, Projects } from '.';
import { LightBlue, Tabbar } from '@/components';
import Line1 from '@/components/SVG/Line1';
import Line2 from '@/components/SVG/Line2';
import './main.scss';
import Line3 from '@/components/SVG/Line3';
export interface MainInterface {}

const Main: React.FC<MainInterface> = () => {
  const [inView, serInView] = useState<string>('home');

  return (
    <>
      <div className="main__line0">
        <Line2 />
      </div>
      <div className="main__line0">
        <Line1 />
      </div>
      <div className="main__line1">
        <Line1 />
      </div>

      <div className="main__line1">
        <Line3 />
      </div>
      <div className="main__line1">
        <Line1
          width={'100%'}
          height={'100%'}
          style={{ transform: 'rotate(-100deg)' }}
        />
      </div>
      <div className="main__line2">
        <Line1 />
      </div>

      <div className="main__line3">
        <Line2 />
      </div>
      <div className="main__line4">
        <Line2 />
      </div>

      <Home serInView={serInView} />
      <LightBlue position={'start'} />
      <AboutMe serInView={serInView} />
      <LightBlue position={'end'} />
      <Projects serInView={serInView} />
      <Contact serInView={serInView} />
      <LightBlue position={'center'} />
      <Tabbar inView={inView} />
    </>
  );
};

export default Main;
