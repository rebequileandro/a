import React, { useEffect, useRef } from 'react';
import './styles/Contact.scss';
import emailjs from '@emailjs/browser';
import { useObserver } from '@/hooks';
import { Input, TextArea } from '@/components';
import { ContactForm } from './PopupForm';

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
      </div>
      <ContactForm />
    </>
  );
};

export default Contact;
