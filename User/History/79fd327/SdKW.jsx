// Two factor authentication component. Sends an email or text to the user (depending on the authentication method) and validates the input.

import './TwoFactorAuth.scss';
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import Button from '../Button/Button';
import { sendCode } from './sendCode';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../../redux/slices/global/user';
import axios from 'axios';
import { verifyUser } from '../../../redux/slices/global/user';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { StatusPopUp } from '../StatusPopUp/StatusPopUp';

const { REACT_APP_API } = process.env;

export default function TwoFactorAuth({ method, setMethod, handleNext }) {
  const currentUser = useSelector(getCurrentUser);
  const [popupContent, setPopupContent] = useState(null);
  const dispatch = useDispatch();
  const phone = currentUser.phone;
  console.log(currentUser.phone);

  const methodLabel = method === 'email' ? 'email' : 'número';
  const contactInfo =
    method === 'email'
      ? currentUser.email
      : `${phone[0].prefix} ${phone[0].number}`;

  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const inputRef = useRef();

  // Send EMAIL or SMS
  useEffect(() => {
    sendCode(method, currentUser);
  }, [method]);

  const stringifyCode = () =>
    `${code[0]}${code[1]}${code[2]}${code[3]}${code[4]}${code[5]}`;

  const handleChange = ({ target }, index) => {
    const input = target.value;
    const newCode = [...code];
    if (input.length > 1) {
      input.split('').map((element, i) => {
        if (i <= 5) newCode[i] = element;
      });
      setActiveIndex(5);
    } else if (input) {
      newCode[index] = input.substring(input.length - 1);
      setActiveIndex(activeIndex + 1);
    }

    setCode([...newCode]);
  };

  const handleOnKeyDown = (event, index) => {
    alert(JSON.stringify(event.charCode));
    if (event.key === 'Backspace' || event.keyCode === 8) {
      const newCode = [...code];
      newCode[index] = '';
      setCode([...newCode]);

      if (activeIndex > 0) {
        setActiveIndex(index - 1);
      }
    }
  };

  const handleSubmit = async () => {
    let validCode = true;

    code.forEach((char) => {
      if (!char) {
        validCode = false;
      }
    });

    if (!validCode) {
      setError('Ingrese un código válido');
      return;
    }

    try {
      setLoading(true);

      let response;

      if (method === 'email') {
        response = await axios.post(
          REACT_APP_API + '/partyuser/register/mailVerified',
          {
            email: currentUser.email,
            codigoValidacion: stringifyCode()
          }
        );
      } else if (method === 'phone') {
        response = await axios.post(
          REACT_APP_API +
            '/partyuser/register/phoneverified/' +
            currentUser._id,
          {
            phone,
            code: stringifyCode()
          }
        );
      }

      if (response.data.status === 'success') {
        dispatch(verifyUser());
      } else {
        setError(response.data.message);
      }
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
    setError('');
  }, [activeIndex]);

  const sendAnotherCode = () => {
    sendCode(method, currentUser);
    setPopupContent({
      title: 'Te enviamos otro código',
      description: `Te enviamos otro código de seguridad al ${methodLabel} ${contactInfo}`,
      button: 'Aceptar',
      status: true,
      redirect: () => setPopupContent(null)
    });
  };

  const switchMethod = () => setMethod(method === 'email' ? 'phone' : 'email');

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="two-factor-auth"
      >
        <h1>Verifica tu cuenta</h1>
        <p className="description">
          Se envió un código de seguridad al {methodLabel}{' '}
          <span className="highlight">{contactInfo}</span>
        </p>
        <div className="code-input">
          {code.map((_, index) => (
            <input
              key={index}
              ref={index === activeIndex ? inputRef : null}
              type="text"
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
              onFocus={() => setActiveIndex(index)}
              value={code[index]}
            />
          ))}
        </div>

        {error && <p className="error">*{error}</p>}

        <Button type="submit" loading={loading} onClick={handleSubmit}>
          Aceptar
        </Button>

        <div className="resend-code">
          <p>¿No recibiste el código?</p>
          <p className="link" onClick={sendAnotherCode}>
            Enviar otro código
          </p>
          <p className="link" onClick={switchMethod}>
            Verificar por {method === 'email' ? 'SMS' : 'email'}
          </p>
        </div>
      </motion.div>
      {popupContent && <StatusPopUp isOpen={popupContent} {...popupContent} />}
    </>
  );
}
