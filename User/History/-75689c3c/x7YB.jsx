import './new_card.scss';
import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../../../../components/global/Header/Header';
import Payment_Method_Card from '../../../../../components/partyUser/Payment_Method_Settings/Payment_Method_Card/Payment_Method_Card';
import InputDiv from '../../../../../components/global/InputDiv/InputDiv';
import dataNewCard from './newCard.json';
import creditCardValidation from '../../../../../utils/credit-card-validation';
import Validate from '../../../../../utils/validation';
import Button from '../../../../../components/global/Button/Button';
import { getCurrentUser } from '../../../../../redux/slices/global/user';
import { useSelector } from 'react-redux';
import { StatusPopUp } from '../../../../../components/global/StatusPopUp/StatusPopUp';

const New_Card = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://res.mobbex.com/js/sdk/mobbex@1.1.0.js';
    script.async = true;
    script.integrity =
      'sha384-7CIQ1hldcQc/91ZpdRclg9KVlvtXBldQmZJRD1plEIrieHNcYvlQa2s2Bj+dlLzQ';
    script.crossorigin = 'anonymous';
    document.head.appendChild(script);

    script.onload = () => {
      window.MobbexJS.setPublicKey('6REGSly205PjQrSLWnRvjsuedN9m0ONbnxC_');

      window.MobbexJS.card.init('INTENT TOKEN');
      console.log(window.MobbexJS);
    };
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const user = useSelector(getCurrentUser);
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const initialState = {
    cardNumber: '',
    name: '',
    lastName: '',
    cardExpirationMonth: '',
    cardExpirationYear: '',
    cvc: '',
    dni: '',
    venc: ''
  };
  const [input, setInput] = useState(initialState);
  const [inputError, setInputError] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [flip, setFlip] = useState(false);
  const [statuspopup, setStatuspopup] = useState(null);

  const cardDetect = async (value) => {
    try {
      const intent = await window.MobbexJS.card.detect(value.substring(0, 6), {
        installments: 1
      });
      console.log('intent', intent);
    } catch (error) {
      let err = JSON.stringify(error);
      console.log('ERRORCITO', JSON.parse(err));
    }
  };
  const handleChange = (e) => {
    if (
      e.target.name === 'venc' &&
      e.nativeEvent.data &&
      e.nativeEvent.data !== ' '
    ) {
      setInput({
        ...input,
        [e.target.name]:
          e.target.value.length === 2 ? e.target.value + '/' : e.target.value,
        cardExpirationYear: e.target.value.slice(-2),
        cardExpirationMonth: e.target.value.slice(0, 2)
      });
    } else if (e.target.name === 'cardNumber') {
      setInput({
        ...input,
        cardNumber:
          e.target.value &&
          e.target.value
            .replace(/\s+/g, '')
            .match(/.{1,4}(.$)?/g)
            .join(' ')
      });
      let value = e.target.value.replace(/\s+/g, '');
      if (value.length >= 6) {
        cardDetect(value);
      }
    } else if (
      e.target.name !== 'cardholderName' ||
      e.target.name === 'cardholderName'
    ) {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInputError(initialState);
    let validation1;
    let validation2;
    if (step === 0) {
      setInput({
        ...input,
        cardNumber: input.cardNumber.replace(/\s+/g, '')
      });

      validation1 = creditCardValidation.number(
        input.cardNumber.replace(/\s+/g, '')
      );
      validation1 && setInputError({ ...inputError, cardNumber: validation1 });
      !validation1 && setStep(1);
    }

    if (step === 1) {
      input.name.length < 4 && (validation1 = 'Ingrese su nombre');
      setInputError({ ...inputError, name: validation1 });

      if (!validation1) {
        validation2 = creditCardValidation.dni(input.dni);
        validation2 && setInputError({ ...inputError, dni: validation2 });
      }
      if (!validation1 && !validation2) {
        setStep(2);
      }
    }
    if (step === 2) {
      validation1 = creditCardValidation.expiration(input.venc);
      validation1 && setInputError({ ...inputError, venc: validation1 });
      if (!validation1) {
        validation2 = creditCardValidation.code(input.cvc);
        validation2 && setInputError({ ...inputError, cvc: validation2 });
      }
      if (!validation1 && !validation2) {
        setLoading(true);
        try {
          // const cardToken = await axios.post(
          //   'https://api.mobbex.com/p/sources/token',
          //   {
          //     source: {
          //       card: {
          //         number: '5010150000000000010',
          //         month: '12',
          //         year: '34',
          //         identification: '12123123',
          //         name: 'Demo',
          //         cvv: '200'
          //       }
          //     }
          //   },
          //   {
          //     headers: {
          //       'x-api-key': 'zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj',
          //       'Content-Type': 'application/json'
          //     }
          //   }
          // );
          const cardToken = await window.MobbexJS.card.createToken({
            card: {
              number: input.cardNumber,
              name: input.name,
              identification: input.dni,
              month: input.cardExpirationMonth,
              year: input.cardExpirationYear
            }
          });
          console.log('Token', cardToken);
        } catch (error) {
          console.error('ERROR', error);

          if (error.response.data.message) {
            setStatuspopup({
              title: 'Error',
              description: error.response.data.message,
              status: false
            });
          } else {
            setStatuspopup({
              title: 'Error',
              description: 'Algo salió mal inténtelo de nuevo',
              status: false
            });
          }
          setLoading(false);
        }
      }
    }
  };
  console.log(window.MobbexJS);
  return (
    <>
      <Header
        title="Nueva tarjeta"
        backbutton={() => (step > 0 ? setStep(step - 1) : navigate(-1))}
      />
      <form
        className="new-card layout-primary"
        onSubmit={handleSubmit}
        // id="form-checkout"
        autoComplete="off"
        id="checkout"
      >
        <Payment_Method_Card
          number={input.cardNumber}
          name={input.cardholderName}
          dni={input.dni}
          venc={input.venc}
          code={input.cvc}
          flip={flip}
        />
        <div
          className={
            step === 2 ? 'new-card__step--row' : 'new-card__step--colum'
          }
        >
          {dataNewCard[step]?.map((e, i) => (
            <Fragment key={e.id}>
              <InputDiv
                label={e.inputLabel}
                inputProps={{
                  'data-mobbex': 'card_number',
                  type: e.inputType,
                  id: e.id,
                  placeholder: e.inputPlaceholder,
                  name: e.inputName,
                  value: input[e.inputName],
                  maxLength: e.maxLength,
                  onFocus: e.inputName === 'cvc' ? () => setFlip(true) : null,
                  autoComplete: 'off'
                }}
                onBlur={() => setFlip(false)}
                onChange={handleChange}
                error={inputError[e.inputName] && inputError[e.inputName]}
              />
            </Fragment>
          ))}
        </div>
        <Button
          type={'submit'}
          children={step === 2 ? 'Guardar' : 'Siguiente'}
          loading={loading}
        />
      </form>
      <StatusPopUp
        isOpen={statuspopup}
        status={statuspopup?.status}
        title={statuspopup?.title}
        button="Aceptar"
        redirect={() => {
          statuspopup?.status ? navigate(-1) : setStatuspopup(null);
        }}
        description={statuspopup?.description}
      />
    </>
  );
};
export default New_Card;
