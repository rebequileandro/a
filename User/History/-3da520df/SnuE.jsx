import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../../../components/global/Header/Header';
import '../settingsSelection.scss';
import row from '../../../../assets/buttons/arrow-right.svg';
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
    <div className="organizer-settings-container">
      <Header
        backbutton={() => navigate(`${routes.owner.club}/${getParty._id}`)}
        OrganizerParty={{
          party: getParty?.nameParty,
          path: role === 'bartender' ? 'bartenders' : 'cajeros'
        }}
      />
      {getBars.map((e, i) => (
        <React.Fragment key={i}>
          <div className="row-container">
            <h2>{e.barra}</h2>
          </div>
          <hr />
          {e.worker?.map((worker, i) => {
            return (
              <React.Fragment key={i}>
                <div
                  onClick={() => handleClick(worker._id)}
                  className="row-container"
                >
                  <p>{worker.name}</p>
                  <img src={row} alt="flecha" />
                </div>
                <hr />
              </React.Fragment>
            );
          })}
          <div className="row-container" />
        </React.Fragment>
      ))}
      <hr />
      {role === 'bartender' ? (
        <div
          className="row-container"
          onClick={() => navigate(routes.owner.newBartender)}
        >
          <h2>añadir bartender</h2>
          <img src={row} alt="flecha" />
        </div>
      ) : (
        <div
          className="row-container"
          onClick={() => navigate(routes.owner.newCashier)}
        >
          <h2>añadir cajero</h2>
          <img src={row} alt="flecha" />
        </div>
      )}
      <hr />
    </div>
  );
};
export default Roles;
