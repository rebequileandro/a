import '../settingsClubs.scss';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../../../components/global/Header/Header';
import arrow from '../../../../assets/icons/icon_arrow-white.svg';
import routes from '../../../../models/routes.models';

const Roles = ({ role }) => {
  const getParty = useSelector((state) => state.organizer.organizer.details[0]);
  const getBars = useSelector((state) => state.organizer.organizer.barras);
  const navigate = useNavigate();
  const handleClick = (id) => {
    role === 'bartender' && navigate(`${routes.owner.bartender}/${id}`);
    role === 'cashier' && navigate(`${routes.owner.cashier}/${id}`);
  };
  return (
    <>
      <Header
        backbutton={() => navigate(`${routes.owner.club}/${getParty._id}`)}
        title={role === 'bartender' ? 'Bartender' : 'Cajeros'}
      />
      <div className="settings-clubs layout-primary">
        {getBars.map((e, i) => (
          <Fragment key={i}>
            <div className="row-container">
              <h2>{e.barra}</h2>
            </div>

            <div className="settings-clubs__menu">
              {e.worker
                .filter((x) => x.rol === role)
                .map((worker, i) => {
                  return (
                    <Fragment key={i}>
                      <div
                        onClick={() => handleClick(worker._id || worker.id)}
                        className="settings-clubs__content-menu"
                      >
                        <h3 className="heading-tertiary-main settings-clubs__title">
                          {worker.name}
                        </h3>
                        <img
                          className="settings-clubs__image-arrow"
                          src={arrow}
                          alt="flecha"
                        />
                      </div>
                      {e.worker.length - 1 < i && (
                        <div className="pink-gradient-line-1">&nbsp;</div>
                      )}
                    </Fragment>
                  );
                })}
            </div>
          </Fragment>
        ))}
        <hr />
        {role === 'bartender' ? (
          <div
            className="row-container"
            onClick={() => navigate(routes.owner.newBartender)}
          >
            <h2>añadir bartender</h2>
            <img src={arrow} alt="flecha" />
          </div>
        ) : (
          <div
            className="row-container"
            onClick={() => navigate(routes.owner.newCashier)}
          >
            <h2>añadir cajero</h2>
            <img src={arrow} alt="flecha" />
          </div>
        )}
        <hr />
      </div>
    </>
  );
};
export default Roles;
