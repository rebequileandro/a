import React, { Fragment, useState } from 'react';
import './linkedPopup.scss';
import mercadoPagoIcon from '../../../../../assets/icons/Checkout/mercado-pago.svg';
import binance from '../../../../../assets/icons/Checkout/binance.svg';
import { AnimatePresence, motion } from 'framer-motion';
import loadingAnimation from '../../../../../assets/loading.json';
import Lottie from 'lottie-react';
import { useParams } from 'react-router-dom';
import cardIcon from '../../../../../assets/icons/Checkout/card.svg';
import InputDiv from '../../../../../components/global/InputDiv/InputDiv';
import axios from 'axios';

const { REACT_APP_MP_CLIENT_ID, REACT_APP_MP_REDIRECT, REACT_APP_API } =
  process.env;

const LinkedPopup = ({ isOpen, setIsOpen, action, setStatusPopup, club }) => {
  const { id } = useParams();
  const [option, setOption] = useState('mercadoPago');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [cuit, setCuit] = useState('');

  const cancel = () => {
    setOption('mercadoPago');
    setIsOpen(false);
    setLoading(false);
    setStep(1);
    setCuit('');
  };

  const handleClick = async () => {
    step !== 1 && setLoading(true);
    if (action === 'linked') {
      if (option === 'mercadoPago') {
        window.location.href = `https://auth.mercadopago.com.ar/authorization?client_id=${REACT_APP_MP_CLIENT_ID}&response_type=code&platform_id=mp&state=${id}&redirect_uri=${REACT_APP_MP_REDIRECT}`;
      }
      if (option === 'card') {
        step === 1 && setStep(2);
        if (step === 2) {
          try {
            const response = await axios.put(
              `${REACT_APP_API}/organizer/party/${id}`,
              {
                cuit
              }
            );
            if (response.status === 200) {
              cancel();
              setStatusPopup({
                status: 200,
                title: `As actualizado la CUIT de ${club} con éxito`
              });
            }
          } catch (error) {
            console.log(error);
            setStatusPopup({
              status: false,
              title: 'Ha ocurrido un error inténtalo más tarde.'
            });
          }
        }
      }
    }
  };

  const methods = [
    {
      name: 'mercadoPago',
      label: 'Mercado Pago',
      icon: mercadoPagoIcon
    },
    {
      name: 'binance',
      label: 'Binance',
      icon: binance
    },
    {
      name: 'card',
      label: 'Tarjeta',
      icon: cardIcon
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="linkedPopup__overlay"
        >
          <motion.div
            initial={{ transform: 'scale(0.5)' }}
            animate={{ transform: 'scale(1)' }}
            exit={{ transform: 'scaleY(0)' }}
            className="linkedPopup__popup"
          >
            {step === 1 ? (
              methods?.map((e, i) => (
                <Fragment key={e.name}>
                  <div
                    className="linkedPopup__item"
                    onClick={() => setOption(e.name)}
                  >
                    <img
                      className="linkedPopup__image"
                      src={e.icon}
                      alt={e.label}
                    />
                    <h2 className="heading-secondary-main heading-secondary-main--upper">
                      {e.label}
                    </h2>
                    <div
                      className={`input-radio ${
                        option === e.name && 'checked'
                      }`}
                    />
                  </div>
                  {i < methods.length - 1 && (
                    <div className="white-line">&nbsp;</div>
                  )}
                </Fragment>
              ))
            ) : (
              <div className="linkedPopup__input-container">
                <h2 className="heading-secondary-main linkedPopup__input-container--label">
                  Ingrese su número de CUIT
                </h2>
                <InputDiv
                  inputProps={{
                    type: 'tel',
                    spellCheck: 'false',
                    value: cuit,
                    placeholder: '123456789...'
                  }}
                  // label="Ingrese su número de CUIT"
                  setState={setCuit}
                />
              </div>
            )}

            <button
              className="btn-primary--l linkedPopup__linked"
              onClick={() => handleClick()}
            >
              {loading ? (
                <Lottie
                  animationData={loadingAnimation}
                  className="linkedPopup__loading"
                  loop={true}
                />
              ) : action === 'linked' ? (
                option === 'card' && step === 1 ? (
                  'Siguiente'
                ) : (
                  'Vincular'
                )
              ) : (
                'Desvincular'
              )}
            </button>
            <div
              className="anchor-primary--bold linkedPopup__cancel"
              onClick={cancel}
            >
              <a>Cancelar</a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LinkedPopup;
