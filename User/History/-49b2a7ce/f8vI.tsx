import React, { useEffect, useRef } from 'react';
import './styles/AboutMe.scss';
import { useObserver } from '@/hooks';
import { dataPage } from '@/utils';
export interface AboutMeInterface {
  serInView: React.Dispatch<React.SetStateAction<string>>;
}

const AboutMe: React.FC<AboutMeInterface> = ({ serInView }) => {
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.5
  });
  useEffect(() => {
    isIntersecting && serInView('about-me');
  }, [isIntersecting]);

  return (
    <section className="aboutme" ref={setReference} id="about-me">
      <div className="aboutme__skill">
        <h2
          className={`text-secondary--main aboutme__skill__title aboutme__skill__title--${
            isIntersecting ? 'in' : 'out'
          }`}
        >
          Algunas de mis Skills
        </h2>
        <ul>
          {dataPage.aboutMe.skills.map((skill: string, index) => (
            <li
              className="text-secondary--sub aboutme__skill__item"
              style={
                isIntersecting
                  ? {
                      animation: `fade-in-translateX-0 1s 1 ${
                        index / 2
                      }s forwards`
                    }
                  : {
                      transform: 'translateX(0)',
                      opacity: 1,
                      animation: 'fade-out 1s 1 forwards'
                    }
              }
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`aboutme__photos aboutme__photos--${
          isIntersecting ? 'in' : 'out'
        }`}
      />
      <div className="aboutme__decription-container">
        <h2
          className={`text-primary--sub aboutme__sub-title aboutme__sub-title--${
            isIntersecting ? 'in' : 'out'
          }`}
        >
          Sobre mi
        </h2>
        <div
          style={{}}
          className={`text-secondary--sub aboutme__description aboutme__description--${
            isIntersecting ? 'in' : 'out'
          }`}
        >
          {dataPage.aboutMe.description}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
