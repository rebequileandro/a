import '../settingsClubs.scss';
import { useEffect, useState } from 'react';
import arrow from '../../../../assets/icons/icon_arrow-white.svg';
import { Header } from '../../../../components/global/Header/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getbyId, getTeam } from '../../../../redux/slices/organizer/organizer';
import { Delete } from './Delete';
import routes from '../../../../models/routes.models';
import { TabbarOrganizer } from '../../../../components/owner-manager/Tabbar/TabbarOrganizer';
const { REACT_APP_MP_CLIENT_ID, REACT_APP_MP_REDIRECT } = process.env;
const Club = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const getMyParty = useSelector((state) => state.organizer.organizer.details);
  const currentUser = useSelector((state) => state.global.user);
  let idReplace = id ? id : currentUser.idParty;
  useEffect(() => {
    dispatch(getbyId(idReplace)).then(() => dispatch(getTeam(idReplace)));
  }, []);
  useEffect(() => {
    try {
      window.localStorage.setItem('idParty', idReplace);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleClick = () => {
    window.location.href = `https://auth.mercadopago.com.ar/authorization?client_id=${REACT_APP_MP_CLIENT_ID}&response_type=code&platform_id=mp&state=${id}&redirect_uri=${REACT_APP_MP_REDIRECT}`;
  };

  return (
    <>
      <Header
        party={getMyParty[0]?.nameParty}
        logoParty={getMyParty[0]?.imageParty}
        backbutton={() => navigate(routes.owner.clubs)}
      />
      <section className="settings-clubs layout-primary">
        <div>
          <div className="settings-clubs__menu">
            <div
              className="settings-clubs__content-menu"
              onClick={() => navigate(`${routes.owner.inventory}/${id}`)}
            >
              <h3 className="heading-tertiary-main settings-clubs__title">
                Inventario
              </h3>
              <img
                className="settings-clubs__image-arrow"
                src={arrow}
                alt="arrow"
              />
            </div>
            <div className="pink-gradient-line-1">&nbsp;</div>
            <div
              className="settings-clubs__content-menu"
              onClick={() => navigate(`${routes.owner.menu}/${id}`)}
            >
              <h3 className="heading-tertiary-main settings-clubs__title">
                Menú
              </h3>
              <img
                className="settings-clubs__image-arrow"
                src={arrow}
                alt="arrow"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="settings-clubs__menu">
            <div
              className="settings-clubs__content-menu"
              onClick={() => navigate(routes.owner.allBartenders)}
            >
              <h3 className="heading-tertiary-main settings-clubs__title">
                Bartenders
              </h3>
              <img
                className="settings-clubs__image-arrow"
                src={arrow}
                alt="arrow"
              />
            </div>
            <div className="pink-gradient-line-1">&nbsp;</div>
            <div
              className="settings-clubs__content-menu"
              onClick={() => navigate(routes.owner.allCashiers)}
            >
              <h3 className="heading-tertiary-main settings-clubs__title">
                Cajeros
              </h3>
              <img
                className="settings-clubs__image-arrow"
                src={arrow}
                alt="arrow"
              />
            </div>
          </div>
        </div>
        <div
          className="settings-clubs__menu settings-clubs__menu"
          onClick={() => navigate(`${routes.owner.linkedAccounts}/${id}`)}
        >
          <div className="settings-clubs__content-menu">
            <h3 className="heading-tertiary-main settings-clubs__title">
              Cuentas vinculadas
            </h3>
            <img
              className="settings-clubs__image-arrow"
              src={arrow}
              alt="arrow"
            />
          </div>
        </div>
      </section>
      <TabbarOrganizer active={'party'} />

      {isOpen && <Delete setIsOpen={setIsOpen} isOpen={isOpen} id={id} />}
    </>
  );
};

export default Club;
