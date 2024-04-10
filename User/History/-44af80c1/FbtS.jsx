import './notFound.scss';
import notFound from '../../../assets/global/404 _no_found.svg';
const NotFound = () => {
  return (
    <div className="not-found">
      <img className="not-found__image" src={notFound} alt="404" />
      <h2 className="not-found__title">No se encontró lo que estas buscando</h2>
      <p className="not-found__text">
        Intenta usar otra palabra para hacer la busqueda.
      </p>
    </div>
  );
};

export default NotFound;
