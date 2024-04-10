import '../settingsClubs.scss';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../../../components/global/Header/Header';
import arrow from '../../../../assets/icons/icon_arrow-white.svg';
import routes from '../../../../models/routes.models';
import plus from '../../../../assets/icons/Organizer/plus.svg';

const Roles = ({ role }) => {
  const getParty = useSelector((state) => state.organizer.organizer.details[0]);
  const getBars = useSelector((state) => state.organizer.organizer.barras);
  const navigate = useNavigate();
  const handleClick = (id) => {
    role === 'bartender' && navigate(`${routes.owner.bartender}/${id}`);
    role === 'cashier' && navigate(`${routes.owner.cashier}/${id}`);
  };
  console.log(getBars);
  return (
    <>
      <Header
        backbutton={() => navigate(`${routes.owner.club}/${getParty._id}`)}
        title={role === 'bartender' ? 'Bartender' : 'Cajeros'}
      />
      <div className="settings-clubs layout-primary">
        {getBars.map((e, i) => (
          <Fragment key={i}>
            <div className="settings-clubs__content-menu--start">
              <h3 className="heading-tertiary-sub heading-tertiary-sub--upper">
                {e.barra}
              </h3>
            </div>

            <div className="settings-clubs__menu">
              {e.worker?.length ? (
                e.worker
                  ?.filter((x) => x.rol === role)
                  .map((worker, i, a) => {
                    return (
                      <Fragment key={i}>
                        <div
                          onClick={() => handleClick(worker._id || worker.id)}
                          className="settings-clubs__content-menu"
                        >
                          <h3 className="heading-tertiary-main settings-clubs__title--capitalize">
                            {worker.name}
                          </h3>
                          <img
                            className="settings-clubs__image-arrow"
                            src={arrow}
                            alt="flecha"
                          />
                        </div>
                        {a.length - 1 > i && (
                          <div className="pink-gradient-line-1">&nbsp;</div>
                        )}
                      </Fragment>
                    );
                  })
              ) : (
                <p>No hay staff en esta barra.</p>
              )}
            </div>
          </Fragment>
        ))}
        <div className="settings-clubs__menu">
          {role === 'bartender' ? (
            <div
              className="settings-clubs__content-menu"
              onClick={() => navigate(routes.owner.newBartender)}
            >
              <h3 className="heading-tertiary-main settings-clubs__title">
                Añadir bartender
              </h3>
              <img src={plus} alt="flecha" />
            </div>
          ) : (
            <div
              className="settings-clubs__content-menu"
              onClick={() => navigate(routes.owner.newCashier)}
            >
              <h3 className="heading-tertiary-main settings-clubs__title">
                Añadir cajero
              </h3>
              <img src={plus} alt="flecha" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Roles;
