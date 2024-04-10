import '../settingsClubs.scss';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Header } from '../../../../components/global/Header/Header';
import arrow from '../../../../assets/icons/icon_arrow-white.svg';

import { useDispatch, useSelector } from 'react-redux';
import {
  getTeam,
  teamParty,
  updateTeam
} from '../../../../redux/slices/organizer/organizer';
import Lottie from 'lottie-react';
import loadingAnimation from '../../../../assets/loading.json';
import DeleteRole from './DeleteRole/DeleteRole';
import InputDiv from '../../../../components/global/InputDiv/InputDiv';
import Select from '../../../../components/global/Select/Select/Select';
import routes from '../../../../models/routes.models';
const EditRole = ({ role }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getBars = useSelector((state) => state.organizer.organizer.barras);
  const getDetails = useSelector(
    (state) => state.organizer.organizer.details[0]
  );
  const [userRole, setUserRole] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const getUser = useSelector((state) => state.global.user);
  const [input, setInput] = useState({
    name: '',
    email: '',
    square: ''
  });
  const handleChange = (e) => () => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };
  const setBarra = (barra) => {
    setInput({
      ...input,
      square: barra
    });
  };
  useEffect(() => {
    if (role !== 'unitManager') {
      getBars?.forEach((e) => {
        let user = e.worker.filter((f) => f._id === id);
        if (user.length) {
          setUserRole(user[0]);
          setInput({
            name: user[0].name,
            email: user[0].email,
            square: e.barra
          });
        }
      });
    } else {
      setInput({
        name: getDetails.unitManager?.name,
        email: getDetails.unitManager?.email
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (role === 'newCashier' || role === 'newBartender') {
      dispatch(
        teamParty({
          name: input.name,
          email: input.email,
          password: input.email,
          rol: `${role === 'newCashier' ? 'cashier' : 'bartender'}`,
          idParty: getDetails._id,
          idOrganizer: getUser?._id,
          idBarra: `${getDetails._id}-barra-${input.square}`,
          square: input.square
        })
      ).then((response) => {
        if (response?.status === 200) {
          dispatch(getTeam(getDetails._id));
          navigate(`${routes.owner.club}/${getDetails._id}`);
        }
      });
    } else {
      let data;
      if (input.email === userRole.email) {
        data = {
          name: input.name,
          square: input.square
        };
      } else {
        data = { ...input };
      }
      dispatch(updateTeam(id ? id : getDetails.unitManager._id, data)).then(
        (response) => {
          if (response?.status === 200) {
            dispatch(getTeam(getDetails._id));
            navigate(`${routes.owner.club}/${getDetails._id}`);
          }
        }
      );
    }
  };
  return (
    <>
      <Header
        backbutton={() => navigate(-1)}
        title={
          role === 'newCashier'
            ? 'Nuevo Cajero'
            : role === 'newBartender'
            ? 'Nuevo Bartender'
            : role === 'bartender'
            ? 'Bartender'
            : 'Cajero'
        }
      />
      <form className="settings-clubs layout-primary">
        <InputDiv
          label="Nombre y apellido:"
          inputProps={{
            type: 'text',
            value: input.name,
            placeholder: 'Nombre',
            name: 'name'
          }}
          setState={handleChange}
        />
        <InputDiv
          label="Correo electrónico:"
          inputProps={{
            type: 'text',
            value: input.email,
            placeholder: 'example@gmail.com',
            name: 'email'
          }}
          setState={handleChange}
        />
        <div>
          {role !== 'unitManager' && (
            <Select
              label="Barra:"
              initialState={input.square}
              placeholder={
                role === 'newCashier' || role === 'newBartender'
                  ? 'Elige una barra'
                  : null
              }
              options={getBars.map((e) => e.barra)}
              onChange={setBarra}
              gradient
              icon
            />
          )}
        </div>
        <div className="settings-clubs__description-container">
          <p className="settings-clubs__description">
            Le enviamos un mail a{' '}
            <span className="settings-clubs__description--bold-capitalize">
              {input.name}
            </span>{' '}
            con las indicaciones para crear su cuenta de WeDrink para
            <span className="settings-clubs__description--bold-capitalize">
              {role === 'bartender' ? ' Bartenders' : ' Cajeros'}
            </span>
            .
          </p>
          <div className="anchor-primary">
            <a>¿No recibió el mail? Volver a enviar</a>
          </div>
        </div>
        <div className="settings-clubs__buttons-container ">
          {(role === 'bartender' || role === 'cashier') && (
            <div className="settings-clubs__menu">
              <div
                className="settings-clubs__content-menu"
                onClick={() => setIsOpen(true)}
              >
                <h3 className="heading-tertiary-main settings-clubs__title">{`Eliminar ${
                  role === 'bartender' ? role : 'cajero'
                }`}</h3>
                <img
                  className="settings-clubs__image-arrow"
                  src={arrow}
                  alt="arrow"
                />
              </div>
            </div>
          )}
          <button
            className="btn-primary--l"
            type="submit"
            onClick={handleSubmit}
          >
            {isLoading ? (
              <Lottie
                animationData={loadingAnimation}
                className="loading-animation"
                loop={true}
              />
            ) : role === 'newCashier' || role === 'newBartender' ? (
              'Aceptar'
            ) : (
              'Guardar cambios'
            )}
          </button>
          <div className="anchor-primary--bold">
            <Link to={-1}>Cancelar</Link>
          </div>
        </div>
      </form>
      <DeleteRole
        isOpen={isOpen}
        id={id}
        setIsOpen={setIsOpen}
        name={input.name}
      />
    </>
  );
};
export default EditRole;
