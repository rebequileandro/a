import { useEffect, useState } from 'react';
import shoozaLogo from '../../../../assets/global/shooza_logo.svg';
import './payment_method_card.scss';
const Payment_Method_Card = ({ number, name, dni, venc, code, flip }) => {
  const [replaceNumber, setReplaceNumber] = useState(null);
  useEffect(() => {
    let num = number?.slice(0, number.length - 4);
    let replaceNum = num?.split('').map((e, i) => {
      if (i === 3 || i === 7 || i === 11 || i === 15 || i === 19 || i === 23) {
        return (e = '* ');
      } else {
        return (e = '*');
      }
    });
    setReplaceNumber(replaceNum);
  }, [number]);
  return (
    <div className="payment-method-card">
      <div
        className={
          flip
            ? 'payment-method-card__colum--flip'
            : 'payment-method-card__colum'
        }
      >
        <img
          className="payment-method-card__logo"
          src={shoozaLogo}
          alt="tarjeta"
          loading="lazy"
        />
        <p className="payment-method-card__data">
          {replaceNumber?.join('')} {number.slice(-4)}
        </p>
        <div className="payment-method-card__row">
          <div className="payment-method-card__colum">
            <p className="payment-method-card__data">{name}</p>
            <p className="payment-method-card__data">{dni}</p>
          </div>
          <p className="payment-method-card__data payment-method-card__data--venc">
            {venc}
          </p>
        </div>
      </div>
      <div>{/* <p className="payment-method-card__data">{code}</p> */}</div>
    </div>
  );
};

export default Payment_Method_Card;
