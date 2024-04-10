import './CheckoutCashier.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../../../components/global/Header/Header';
import CheckoutPartyCard from '../../../../components/global/Checkout/CheckoutPartyCard/CheckoutPartyCard';
import PaymentMethodSelector from '../../../../components/global/Checkout/PaymentMethodSelect/PaymentMethodSelector';

import {
  getCart,
  getCartTotal
} from '../../../../redux/slices/partyUser/marketplace';
import {
  getAllDanceFloor,
  getMethod
} from '../../../../redux/slices/partyUser/checkout';

import routes from '../../../../models/routes.models';
import CashCalculator from './CashCalculator/CashCalculator';
import CheckoutCreditCardForm from './CreditCardFrom/CheckoutCreditCardForm';
import GiftCheckout from './GiftChekout/GiftCheckout';
import TransferCheckout from './TransferCheckout/TransferCheckout';
import BarSelector from '../../../../components/global/Checkout/BarSelector/BarSelector';
// import PosMercadoPagoQr from './MercadoPagoQr/PosMercadoPagoQr';

export default function CheckoutCashier({ socket }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const method = useSelector(getMethod);
  const cart = useSelector(getCart);
  const club = useSelector((state) => state.cashier.cashierClub);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(getCartTotal(cart));
  }, [cart]);

  useEffect(() => {
    dispatch(getAllDanceFloor(club?._id));
  }, [club?._id]);
  return (
    <>
      <Header backbutton={() => navigate(routes.cashier.cart)} />

      <div className="checkout layout-primary">
        <CheckoutPartyCard href={routes.cashier.cart} />
        <PaymentMethodSelector href={routes.cashier.paymentMethod} />
        <BarSelector href={routes.cashier.chooseDelivery} />

        {method.name === 'cash' && <CashCalculator total={total} />}
        {method.name === 'card' && <CheckoutCreditCardForm total={total} />}
        {method.name === 'gift' && <GiftCheckout />}
        {method.name === 'transfer' && <TransferCheckout />}
      </div>
    </>
  );
}

/*        
  BINANCE/MP COMENTADO      
  {method.name === 'mercadopago' && (
    <PosMercadoPagoQr total={total} socket={socket} />
  )} 
*/
