import './security_code.scss';
import { AnimatePresence, motion } from 'framer-motion';
import useScript from '../../../../hooks/useScript';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../../../components/global/Button/Button';
export const SecurityCode = ({
  setIsOpen,
  isOpen,
  setCardToken,
  method,
  reference
}) => {
  const { MercadoPago } = useScript(
    'https://sdk.mercadopago.com/js/v2',
    'MercadoPago'
  );
  const getMyCards = useSelector((state) => state.partyUser.checkout.myCards);
  const [loading, setLoading] = useState(false);
  const [mercadoPago, setMercadoPago] = useState(null);
  const [card, setCard] = useState({});
  const [code, setCode] = useState(['', '', '']);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef();

  useEffect(() => {
    if (MercadoPago) {
      const mp = new MercadoPago(process.env.REACT_APP_MP_PUBLIC_KEY);
      setMercadoPago(mp);
    }
  }, [MercadoPago]);
  useEffect(() => {
    let selectedCard = getMyCards.filter(
      (e) => e.lastFour === method.name.slice(-4)
    );
    setCard(selectedCard[0]);
    if (!code.length) {
      for (let i = 0; i < selectedCard[0]?.securityCodeLength; i++) {
        code.push('');
      }
    }
  }, []);
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeIndex]);
  const createCardToken = async (event) => {
    event.preventDefault();
    if (
      code[0] &&
      code[1] &&
      code[2] &&
      (code.length - 1 > 3 ? code[3] : true)
    ) {
      try {
        if (code.slice(-1)) {
          setLoading(true);
          const token = await mercadoPago.createCardToken({
            cardId: card.idCard,
            securityCode: code.join('')
          });
          if (token.id) {
            setCardToken(token.id);
            setIsOpen(false);
            setLoading(false);
            setTimeout(() => {
              reference.current.click();
            }, 200);
            console.log('EL TOKEN PA!', token.id);
          }
        }
      } catch (e) {
        console.error('error creating card token: ', e);
      }
    }
  };
  const handleOnKeyDown = ({ key }, index) => {
    if (key === 'Backspace') {
      const newCode = [...code];
      newCode[index] = '';
      setCode([...newCode]);
      if (activeIndex > 0) {
        setActiveIndex(index - 1);
      }
    }
  };
  const handleChange = ({ target }, index) => {
    const input = target.value;

    const newCode = [...code];

    if (input) {
      newCode[index] = input.substring(input.length - 1);
      setActiveIndex(activeIndex + 1);
    }
    setCode([...newCode]);
  };
  const handleClose = () => {
    setLoading(false);
    setIsOpen(false);
  };
  console.log(code.length);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="popoup-overlay"
        >
          <motion.div
            initial={{ transform: 'scale(0.5)' }}
            animate={{ transform: 'scale(1)' }}
            exit={{ transform: 'scaleY(0)' }}
            className="popup-security-code"
          >
            <button
              onClick={() => handleClose()}
              className="popup-security-code__cancel"
            >
              x
            </button>
            <h2 className="heading-secondary-sub heading-secondary-sub--upper popup-security-code__title">
              Código de seguridad
            </h2>
            <p className="popup-security-code__description">
              Ingrese el código que se encuentra en la parte posterior de su
              tarjeta
            </p>
            <form
              id="form-checkout"
              className="popup-security-code__form"
              onSubmit={createCardToken}
            >
              <div className="popup-security-code__input-wrapper">
                {code?.map((e, index) => (
                  <input
                    type="number"
                    className="popup-security-code__input"
                    key={index}
                    value={code[index]}
                    ref={index === activeIndex ? inputRef : null}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleOnKeyDown(e, index)}
                    onFocus={() => setActiveIndex(index)}
                  />
                ))}
              </div>
              <div className="popup-security-code__button-container">
                <Button
                  type={'submit'}
                  children={'Aceptar'}
                  loading={loading}
                />
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
