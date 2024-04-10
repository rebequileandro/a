import React, { useEffect, useRef } from 'react';
import './styles/Contact.scss';
import { useObserver } from '@/hooks';
import { ContactForm } from './ContactForm';
import linkedin from '@/assets/icons/linkedin.svg';
export interface ContactInterface {
  serInView: React.Dispatch<React.SetStateAction<string>>;
}

const Contact: React.FC<ContactInterface> = ({ serInView }) => {
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.5
  });
  useEffect(() => {
    isIntersecting && serInView('contact');
  }, [isIntersecting]);

  return (
    <>
      <div className="contact" ref={setReference} id="contact">
        <div>
          <h2 className="text-primary--sub contact__title">Contáctame</h2>
        </div>
        <ContactForm />
        <div>
          <img src={linkedin} alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default Contact;
