import React from 'react';
import { useEffect } from 'react';
import InputDiv from '../../../components/global/InputDiv/InputDiv';
import useScript from '../../../hooks/useScript';
const Formpruebamp = () => {
  const { MercadoPago } = useScript(
    'https://sdk.mercadopago.com/js/v2',
    'MercadoPago'
  );
  useEffect(() => {
    if (MercadoPago) {
      const mp = new MercadoPago('TEST-2bf9f710-6a6e-47c8-a207-79f5e73b464c');

      const securityCodeElement = mp.fields
        .create('securityCode', {
          placeholder: 'CVV'
        })
        .mount('form-checkout__securityCode-container');

      const customerCards = [
        {
          id: '3502275482333',
          last_four_digits: '9999',
          payment_method: {
            name: 'amex'
          },
          security_code: {
            length: 4
          }
        }
      ];

      function appendCardToSelect() {
        const selectElement = document.getElementById('form-checkout__cardId');
        const tmpFragment = document.createDocumentFragment();
        customerCards.forEach(({ id, last_four_digits, payment_method }) => {
          const optionElement = document.createElement('option');
          optionElement.setAttribute('value', id);
          optionElement.textContent = `${payment_method.name} ended in ${last_four_digits}`;
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
