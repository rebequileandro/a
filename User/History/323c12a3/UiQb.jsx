import './PaymentMethodSelector.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getMethod } from '../../../../redux/slices/partyUser/checkout';
import routes from '../../../../models/routes.models';
import { GradientText } from '../../Gradient-Text-Redirect/GradientText';
import { INITIAL_LABELS } from '../../../../redux/slices/partyUser/checkout';

export default function PaymentMethodSelector({ href }) {
  const method = useSelector(getMethod);

  const initialState = INITIAL_LABELS.method;

  const navigate = useNavigate();
  return (
    <div className="checkout-select checkout-select--payment">
      <div className="payment-method-header">
        <h2 className="heading-secondary-main">Metodo de pago</h2>
        <div className="change">
          <GradientText text={'Cambiar'} redirect={() => navigate(href)} />
        </div>
      </div>
      <div
        className={
          method.name === initialState
            ? 'gradient-border'
            : 'gradient-border gradient-border--green'
        }
        onClick={() => navigate(routes.partyUser.paymentMethod)}
      >
        <div className="current-method">
          <img
            className="icon-method"
            src={method.icon}
            alt="method"
            loading="lazy"
          />
          {/* El valor que debe recibir el backend es cash/mercadopago, asi que para que pueda renderizar mercado pago/efectivo se utiliza el ternario */}
          <h2 className="heading-tertiary-main--upper">
            {method.name === 'mercadopago'
              ? 'mercado pago'
              : method.name === 'cash'
              ? 'efectivo'
              : method.name === 'card'
              ? 'Tarjeta de crédito/débito'
              : method.name}
          </h2>
        </div>
      </div>
    </div>
  );
}
