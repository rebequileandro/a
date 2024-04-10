import './GradientButton.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getCart,
  getCartTotal
} from '../../../../../redux/slices/partyUser/marketplace';
import Lottie from 'lottie-react';
import loadingAnim from '../../../../../assets/loading.json';

export default function GradientButton({
  onClick,
  loading,
  action,
  isAmount = true,
  progress
}) {
  const [total, setTotal] = useState();
  const cart = useSelector(getCart);

  const handleClick = () => {
    onClick();
  };

  useEffect(() => {
    setTotal(getCartTotal(cart));
  }, [cart]);

  return (
    <nav className="tabbar-space">
      <div
        onClick={() => handleClick()}
        className="gradient-button"
        // style={{ opacity: progress === 100 || !progress ? 1 : 0.7 }}
      >
        {isAmount && (
          <div
            className="gradient-button__amount-div"
            style={{ display: 'block' }}
          >
            <div className="gradient-button__amount-div__amount">
              <h3 className="heading-tertiary-main">{cart.length}</h3>
            </div>
          </div>
        )}
        <div className="gradient-button__content">
          <h2 className="gradient-button__content__heading-secondary-main action">
            {action === 'next'
              ? 'Siguiente'
              : action === 'validate'
              ? 'Validar el pago'
              : 'Enviar pedido'}
          </h2>
        </div>
        {isAmount && (
          <div className="gradient-button__content">
            <h2 className="gradient-button__content__heading-secondary-main">
              ${total}
            </h2>
          </div>
        )}

        {loading && (
          <Lottie
            animationData={loadingAnim}
            loop={true}
            className="loading-animation"
          />
        )}
        {/* {progress && (
          <div
            className="progres_bar"
            style={{ width: `${100 - progress}%` }}
          />
        )} */}
      </div>
    </nav>
  );
}
