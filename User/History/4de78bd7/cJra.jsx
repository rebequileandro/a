import './CashCalculator.scss';
import { useState } from 'react';
import GradientButton from '../GradientButton/GradientButton';
import routes from '../../../../../models/routes.models';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CashCalculator({ total }) {
  const navigate = useNavigate();
  const club = useSelector((state) => state.cashier.cashierClub);
  const [change, setChange] = useState(0);
  const [price, setPrice] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setPrice(value);
    setChange(Math.max(0, Number(value) - total));
  };

  const handleNext = () => {
    navigate(routes.cashier.checkoutFinalForm);
  };

  return (
    <>
      <div className="cash-calculator">
        <div className="cash-calculator__header">
          <div className="cash-calculator__header__amount">
            <p>Paga con: {club.currency}</p>
            <div className="cash-calculator__header__amount__input-container">
              <input onChange={handleChange} value={price} type="number" />
            </div>
          </div>

          <div className="cash-calculator__header__total">
            Total: <br /> €{total}
          </div>
        </div>

        <div className="cash-calculator__result">
          <p>Vuelto</p>
          <p>€{change}</p>
        </div>
      </div>

      <GradientButton onClick={handleNext} action="next" />
    </>
  );
}
