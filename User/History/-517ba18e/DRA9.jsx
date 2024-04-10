import {
  getFloorBar,
  INITIAL_LABELS
} from '../../../../redux/slices/partyUser/checkout';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GradientText } from '../../Gradient-Text-Redirect/GradientText';

export default function BarSelector({ href }) {
  const navigate = useNavigate();
  const floorBar = useSelector(getFloorBar);

  const handleRedirect = () => navigate(href);

  return (
    <div className="checkout-select checkout-select--payment">
      <div className="payment-method-header bar">
        <h2 className="heading-secondary-main">elige la barra o tu mesa</h2>
        <div className="change">
          <GradientText text={'Cambiar'} redirect={handleRedirect} />
        </div>
      </div>
      <div
        className={
          floorBar?.bar === INITIAL_LABELS.bar
            ? 'gradient-border'
            : 'gradient-border gradient-border--green'
        }
        onClick={handleRedirect}
      >
        <div className="current-method">
          <h2 className="heading-tertiary-main--upper">{floorBar?.bar}</h2>
        </div>
      </div>
    </div>
  );
}
