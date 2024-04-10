import './security_code.scss';
import { AnimatePresence, motion } from 'framer-motion';
import useScript from '../../../../hooks/useScript';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../../../components/global/Button/Button';
export const SecurityCode = ({
  setIsOpen,
  isOpen,
  setSecurityCode,
  reference
}) => {
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState(['', '', '']);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeIndex]);

  const handleClick = (e) => {
    e.preventDefault();
    if (code[0] && code[1] && code[2] && (code.length > 3 ? code[3] : true)) {
      setSecurityCode(code.join(''));
      setIsOpen(false);
      reference.current.click();
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
    setSecurityCode([...newCode].join(''));
  };
  const handleClose = () => {
    setLoading(false);
    setIsOpen(false);
  };

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
              onSubmit={handleClick}
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
