import React, { useEffect, useRef, useState } from 'react';
import './styles/Home.scss';
import Lottie from 'react-lottie';
import programingAnimation from '@/assets/lottie-files/programming.json';
import { useObserver } from '@/hooks';
import { dataPage } from '@/utils';
export interface HomeInterface {
  serInView: React.Dispatch<React.SetStateAction<string>>;
}
const Home: React.FC<HomeInterface> = ({ serInView }) => {
  const [loadFirstAnimation, setLoadFirstAnimation] = useState<boolean>(false);
  const [scroll, setScroll] = useState<number>(window.scrollY);
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.5
  });

  useEffect(() => {
    isIntersecting && serInView('home');
  }, [isIntersecting]);
  useEffect(() => {
    setTimeout(() => {
      setLoadFirstAnimation(true);
    }, 13000);
    window.addEventListener('scroll', () => {
      window.scrollY < 210 && setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        window.scrollY < 210 && setScroll(window.scrollY);
      });
    };
  }, []);
  return (
    <section ref={setReference} className="home" id="home">
      <div>
        <h1
          className={`home__seg-1 home__seg-1--${
            !loadFirstAnimation ? 'first' : isIntersecting ? 'in' : 'out'
          } text-primary--main`}
        >
          {dataPage.home.title.lineOne} <br />
        </h1>
        <h1
          className={`home__seg-2 home__seg-2--${
            !loadFirstAnimation ? 'first' : isIntersecting ? 'in' : 'out'
          } text-primary--main`}
        >
          {dataPage.home.title.lineTwo} <br />
        </h1>
        <h1
          className={`home__seg-2 home__seg-2--${
            !loadFirstAnimation ? 'first' : isIntersecting ? 'in' : 'out'
          } text-primary--main`}
        >
          {dataPage.home.title.lineThree}
        </h1>
        <div
          className={`home__seg-3--${
            !loadFirstAnimation ? 'first' : isIntersecting ? 'in' : 'out'
          } text-secondary--main`}
        >
          {dataPage.home.description}
        </div>
      </div>
      <div
        className="home__animation-container"
        style={{ transform: `translateY(${scroll / 9}%)` }}
      >
        <span className="home__animation-container__glow" />
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: programingAnimation
          }}
        />
      </div>
    </section>
  );
};

export default Home;
