import { Fragment, useEffect, useState } from 'react';
import { Header } from '../../../../components/global/Header/Header';
import row from '../../../../assets/buttons/arrow-right.svg';
import '../settingsClubs.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  editParty,
  getAllMyParty
} from '../../../../redux/slices/organizer/organizer';
import { Loading } from '../../../../components/global/Loader/Loader';
import axios from 'axios';
import routes from '../../../../models/routes.models';
import { StatusPopUp } from '../../../../components/global/StatusPopUp/StatusPopUp';
const {
  REACT_APP_MP_CLIENT_ID,
  REACT_APP_MP_CLIENT_SECRET,
  REACT_APP_MP_REDIRECT
} = process.env;

const Clubs = () => {
  const allParty = useSelector((state) => state.organizer.organizer.myParty);
  const getUser = useSelector((state) => state.global.user);
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMyParty({ idOrganizer: getUser?._id })).then(() =>
      setLoading(false)
    );
  }, []);
  const search = useLocation().search;
  const code = new URLSearchParams(search).get('code');
  useEffect(() => {
    if (code) {
      axios
        .post(
          'https://api.mercadopago.com/oauth/token',
          {
            client_id: REACT_APP_MP_CLIENT_ID,
            client_secret: REACT_APP_MP_CLIENT_SECRET,
            code: code,
            redirect_uri: REACT_APP_MP_REDIRECT,
            grant_type: 'authorization_code'
          },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        )
        .then((result) => {
          if (result.status === 200) {
            dispatch(
              editParty(
                { accessToken: result.data.access_token },
                window.localStorage.getItem('idParty')
              )
            ).then((response) => {
              response.response
                ? setStatus(response.response)
                : setStatus(response);
            });
          } else {
            setStatus({ status: 404 });
          }
        });
    }
  }, []);
  const redirectStatusPopup = () => {
    let id = window.localStorage.getItem('idParty');
    window.localStorage.setItem('idParty', null);
    navigate(`${routes.owner.club}/${id}`);
  };
  return (
    <>
      <div className="settings-clubs layout-primary ">
        <Header
          backbutton={() => navigate(routes.global.settings)}
          notification={true}
        />
        {loading ? (
          <div className="loading-premises">
            <Loading />
          </div>
        ) : (
          <>
            <div className="settings-clubs__menu">
              {allParty?.map((e) => (
                <Fragment key={e._id}>
                  <div
                    onClick={() => navigate(`${routes.owner.club}/${e._id}`)}
                  ></div>
                </Fragment>
              ))}
            </div>
            <div
              className="settings-clubs__menu"
              onClick={() => navigate(routes.owner.newClub)}
            ></div>
          </>
        )}
      </div>
      {status && (
        <StatusPopUp
          title={
            status.status === 200
              ? 'Mercado pago conectado con éxito'
              : 'Algo salió mal inténtelo más tarde'
          }
          redirect={() => redirectStatusPopup()}
          button={'Aceptar'}
          status={status.status === 200}
        />
      )}
    </>
  );
};

export default Clubs;
