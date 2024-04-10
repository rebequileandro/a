import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import warning from '../../../../../assets/icons/error.svg';
import {
  deleteTeam,
  getTeam
} from '../../../../../redux/slices/organizer/organizer';
import './DeleteRole.scss';
import routes from '../../../../../models/routes.models';
const DeleteRole = ({ isOpen, setIsOpen, name, id }) => {
  const getParty = useSelector((state) => state.organizer.organizer.details[0]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {
    dispatch(deleteTeam(id)).then(() => {
      dispatch(getTeam(getParty._id));
      navigate(`${routes.owner.club}/${getParty._id}`);
    });
  };

  return (
    <div className={`delete-role-overlay ${isOpen ? 'show-overlay' : ''}`}>
      <div className={`popup-wrapper ${isOpen ? 'show' : 'no-show'}`}>
        <div className="delete-popup">
          <img className="icon" src={warning} alt="warning" />
          <div className="title">
            <h2 className="heading-secondary-sub heading-secondary-sub--upper">{`¿quieres eliminar a ${name}?`}</h2>
          </div>
        </div>
        <div className={'buttons-popup'}>
          <button
            onClick={(e) => setIsOpen(false)}
            className="confirm-button cancel-button"
          >
            Cancelar
          </button>
          <button
            onClick={(e) => handleDelete(e)}
            className="confirm-button delete"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteRole;
