import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useScript from '../../../hooks/useScript';
const Formpruebamp = () => {
  const [customerCards, setCustomerCards] = useState([]);
  const { MercadoPago } = useScript(
    'https://sdk.mercadopago.com/js/v2',
    'MercadoPago'
  );
  const getAllCards = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/partyuser/mercadopago/allcards/6339b99a417ab37501248f10`
    );
    setCustomerCards(response.data.data);
    console.log('response back', response.data.data);
  };
  useEffect(() => {
    getAllCards();
  }, []);
  useEffect(() => {
    if (MercadoPago) {
      const mp = new MercadoPago(
        'APP_USR-8a5d98ee-dc15-4008-8ed8-159e332f0d8c'
      );

      const securityCodeElement = mp.fields
        .create('securityCode', {
          placeholder: 'CVV'
        })
        .mount('form-checkout__securityCode-container');
      // const customerCards = [
      //   {
      //     id: '3502275482333',
      //     last_four_digits: '9999',
      //     payment_method: {
      //       name: 'amex'
      //     },
      //     security_code: {
      //       length: 4
      //     }
      //   }
      // ];

      function appendCardToSelect() {
        const selectElement = document.getElementById('form-checkout__cardId');
        const tmpFragment = document.createDocumentFragment();
        customerCards.forEach(({ idCard, lastFour, paymentId }) => {
          const optionElement = document.createElement('option');
          optionElement.setAttribute('value', idCard);
          optionElement.textContent = `${paymentId} ended in ${lastFour}`;
          tmpFragment.appendChild(optionElement);
        });
        selectElement.appendChild(tmpFragment);
      }
      appendCardToSelect();

      const formElement = document.getElementById('form-checkout');
      formElement.addEventListener('submit', (e) => createCardToken(e));
      const createCardToken = async (event) => {
        try {
          const tokenElement = document.getElementById('token');
          if (!tokenElement.value) {
            event.preventDefault();
            const token = await mp.fields.createCardToken({
              cardId: document.getElementById('form-checkout__cardId').value
            });
            tokenElement.value = token.id;
            console.log(tokenElement);
          }
        } catch (e) {
          console.error('error creating card token: ', e);
        }
      };
    }
  }, [MercadoPago]);

  return (
    <div
      className="layout-primary"
      style={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <form id="form-checkout">
        <select
          style={{
            width: '100%',
            height: '4rem',
            borderRadius: '2rem',
            paddingLeft: '2rem'
          }}
          type="text"
          id="form-checkout__cardId"
        ></select>
        <div
          id="form-checkout__securityCode-container"
          className="container"
        ></div>
        <input name="token" id="token" hidden />
        <button type="submit" className="btn-primary--l">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formpruebamp;
