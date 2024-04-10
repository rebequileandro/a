import loadingAnimation from '../../../assets/loading.json';
import Lottie from 'lottie-react';

import './Button.scss';

export default function Button({ children, type, id, loading, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (loading) return;
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div className={'button'} id={id}>
      <button
        type={type}
        className={loading ? 'btn-primary--l loading' : 'btn-primary--l'}
        //onClick={handleClick}
      >
        {children}
      </button>
      {loading && (
        <Lottie
          animationData={loadingAnimation}
          className="loading-animation"
          loop={true}
        />
      )}
    </div>
  );
}
