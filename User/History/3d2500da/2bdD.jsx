import { getCurrentClub } from '../../../../redux/slices/partyUser/club';
import { useSelector } from 'react-redux';
import { getCart } from '../../../../redux/slices/partyUser/marketplace';
import { useNavigate } from 'react-router-dom';
import './CheckoutPartyCard.scss';

export default function CheckoutPartyCard({ href }) {
  const navigate = useNavigate();
  const currentClub = useSelector(getCurrentClub);
  const cart = useSelector(getCart);
  const minPreparationTime = cart.reduce(
    (a, b) => parseInt(a) + parseInt(b.totalMinOrder) * parseInt(b.amount),
    0
  );
  const maxPreparationTime =
    cart.reduce(
      (a, b) => parseInt(a) + parseInt(b.totalMinOrder) * parseInt(b.amount),
      0
    ) * 2;
  return (
    <div className="checkout-party-card" onClick={() => navigate(href)}>
      <img
        className="logo"
        src={currentClub.imageParty}
        alt="party"
        loading="lazy"
      />
      <div className="party-container">
        <div className="party">
          <h2 className="heading-secondary-main--upper">
            {currentClub.nameParty}
          </h2>
          <p className="heading-tertiary-main">
            {cart.length > 1
              ? cart.length + ' Productos'
              : cart.length + ' Producto'}
          </p>
        </div>
        <div className="preparation-time">
          <p>
            Tiempo estimado de <br />{' '}
            {`preparación: ${minPreparationTime} / ${maxPreparationTime} minutos`}
          </p>
        </div>
      </div>
    </div>
  );
}
