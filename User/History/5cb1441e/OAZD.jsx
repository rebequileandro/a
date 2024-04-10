import './PaymentMethodCashier.scss';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../../../../components/global/Header/Header';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cash from '../../../../../assets/icons/Checkout/cash.svg';
import mercadoPago from '../../../../../assets/icons/Checkout/mercado-pago.svg';
import card from '../../../../../assets/icons/Checkout/card.svg';
import {
  setMethod,
  getMethod
} from '../../../../../redux/slices/partyUser/checkout';
import routes from '../../../../../models/routes.models';
import {
  getCart,
  getCartTotal
} from '../../../../../redux/slices/partyUser/marketplace';
import PaymentMethodOption from '../../../../../components/global/Checkout/PaymentMethodOption/PaymentMethodOption';

const POS_METHODS = {
  // name == the unique ID for the payment method
  // label == the text that will be displayed to the user
  mercadoPago: {
    name: 'mercadopago',
    label: 'Mercado Pago',
    icon: mercadoPago
  },
  cash: {
    name: 'cash',
    label: 'Efectivo',
    icon: cash
  },
  card: {
    name: 'card',
    label: 'Tarjeta de débito/crédito',
    icon: card
  }
};

export default function PaymentMethodCashier() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector(getCart);
  const method = useSelector(getMethod);

  const [total, setTotal] = useState();
  const [payment, setPayment] = useState(method);

  const handleCLick = () => {
    dispatch(setMethod(payment));
    navigate(routes.partyUser.checkout);
  };

  useEffect(() => {
    setTotal(getCartTotal(cart));
  }, [cart]);

  return (
    <div className="payment-method-cashier layout-primary">
      <Header
        backbutton={() => navigate('/checkout')}
        title={'Métodos de pago'}
      />

      {/* DISPLAY TOTAL */}
      <div className="payment-method-cashier__price">
        <p className="payment-method-cashier__price__total">Total</p>
        <h1 className="heading-primary--total-price">${total}</h1>
      </div>

      {/* PAYMENT METHOD OPTIONS */}
      <div className="payment-method-cashier__popup">
        {/* Map each POS_METHOD into an element */}
        {Object.entries(POS_METHODS).map(([_, m]) => (
          <PaymentMethodOption
            method={m}
            setMethod={setPayment}
            selectedMethod={payment}
            key={m.name}
          />
        ))}
      </div>

      <button
        className="btn-primary--l payment-method-cashier__button"
        onClick={() => handleCLick()}
      >
        Aceptar
      </button>
    </div>
  );
}
