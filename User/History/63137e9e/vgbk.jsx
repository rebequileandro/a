import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../../../../components/global/Header/Header';

import arrowRight from '../../../../assets/buttons/arrow-right.svg';
import '../settingsSelection.scss';
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
import SelectDiv from '../../../../components/global/Select/SelectDiv/SelectDiv';
import routes from '../../../../models/routes.models';
const EditRole = ({ role }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getBartenders = useSelector(
    (state) => state.organizer.organizer.bartenderSquares
  );
  const getCashiers = useSelector(
    (state) => state.organizer.organizer.cashierSquares
  );
  const getDetails = useSelector(
    (state) => state.organizer.organizer.details[0]
  );
  const [userRole, setUserRole] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const getUser = useSelector((state) => state.global.user);
  const [options, setOptions] = useState({});
  const [input, setInput] = useState({
    name: '',
    email: '',
    square: ''
  });
  const handleChange = (type) => (value) => {
    setInput({
      ...input,
      [type]: value
    });
  };
  const getOptions = (element) => {
    let opt = {};
    element.forEach((e) => {
      opt = {
        ...opt,
        [e.square]: e.square
      };
    });
    setOptions(opt);
  };
  useEffect(() => {
    if (role === 'bartender') {
      getBartenders?.forEach((e) => {
        let user = e.worker.filter((f) => f._id === id);
        if (user.length) {
          setUserRole(user[0]);
          setInput({
            name: user[0].name,
            email: user[0].email,
            square: user[0].square
          });
        }
      });
      getOptions(getBartenders);
    }
    if (role === 'cashier') {
      getCashiers?.forEach((e) => {
        let user = e.worker.filter((f) => f._id === id);
        if (user.length) {
          setUserRole(user[0]);
          setInput({
            name: user[0].name,
            email: user[0].email,
            square: user[0].square
          });
        }
      });

      getOptions(getCashiers);
    }
    if (role === 'unitManager') {
      setInput({
        name: getDetails.unitManager?.name,
        email: getDetails.unitManager?.email
      });
    }
  }, []);

  const handleSubmit = () => {
    setIsLoading(true);
    if (role === 'newCashier' || role === 'newBartender') {
      dispatch(
        teamParty({
          name: input.name,
          email: input.email,
          password: input.email,
          rol: `${role === 'newCashier' ? 'cashier' : 'bartender'}`,
          idParty: getDetails._id,
          idOrganizer: getUser?.id,
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
      }
      console.log(data);
      // dispatch(
      //   updateTeam(id ? id : getDetails.unitManager._id, {
      //     name: input.name,
      //     square: input.square
      //   })
      // ).then((response) => {
      //   if (response?.status === 200) {
      //     dispatch(getTeam(getDetails._id));
      //     navigate(`${routes.owner.club}/${getDetails._id}`);
      //   }
      // });
    }
  };

  return (
    <>
      <div className="organizer-settings-container">
        <Header
          OrganizerParty={{
            party: 'ajustes',
            path: `${
              role === 'bartender' || role === 'newBartender'
                ? 'bartender'
                : role === 'cashier' || role === 'newCashier'
                ? 'cajero'
                : 'gerente de unidad'
            } > ${input.name}`
          }}
          backbutton={() => navigate(-1)}
        />
        <div
          className={
            role === 'unitManager' ||
            role === 'newBartender' ||
            role === 'newCashier'
              ? 'input-edit-unit-manager'
              : 'input-edit-container'
          }
        >
          <InputDiv
            inputProps={{
              type: 'text',
              value: input.name,
              placeholder: 'Nombre'
            }}
            setState={handleChange('name')}
          />
          <InputDiv
            inputProps={{
              type: 'text',
              value: input.email,
              placeholder: 'example@gmail.com'
            }}
            setState={handleChange('email')}
          />
          {role === 'bartender' || role === 'cashier' ? (
            <SelectDiv
              selectProps={{
                name: 'squar',
                value: input.square,
                id: ''
              }}
              setState={handleChange('square')}
              options={options}
            />
          ) : null}
          {(role === 'newBartender' || role === 'newCashier') && (
            <InputDiv
              inputProps={{
                type: 'text',
                value: input.square,
                placeholder: `Nombre de ${
                  role === 'newBartender' ? 'barra' : 'caja'
                }`
              }}
              setState={handleChange('square')}
            />
          )}
        </div>
        {role === 'bartender' || role === 'cashier' ? (
          <>
            <hr />
            <div className="row-container" onClick={() => setIsOpen(true)}>
              <h2>{`eliminar ${role === 'bartender' ? role : 'cajero'}`}</h2>
              <img src={arrowRight} alt="" />
            </div>
            <hr />
          </>
        ) : null}
        <button className="save" onClick={() => handleSubmit()}>
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
        <button className="cancel" onClick={() => navigate(-1)}>
          Cancelar
        </button>
      </div>
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
