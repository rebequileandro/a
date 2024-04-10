import React, { useEffect, useRef } from 'react';
import './styles/Contact.scss';
import emailjs from '@emailjs/browser';
import { useObserver } from '@/hooks';
import { Input, TextArea } from '@/components';

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

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form: any = event.target;
    emailjs
      .sendForm(
        'leandro_rebequi1398',
        import.meta.env.VITE_TEMPLATE_ID,
        form,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="contact" ref={setReference} id="contact">
      <form className="contact__form" onSubmit={sendEmail} autoComplete="false">
        <Input
          type="text"
          placeHolder="Nombre"
          name="user_name"
          onChange={() => null}
        />
        <Input
          type="email"
          placeHolder="Email"
          name="user_email"
          onChange={() => null}
        />
        <TextArea name="message" placeHolder="Mensaje" />
        <div className="contact__buttons">
          <button
            className="border-gradient contact__buttons--btn"
            type="reset"
          >
            Cancelar
          </button>
          <button className="btn contact__buttons--btn" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
