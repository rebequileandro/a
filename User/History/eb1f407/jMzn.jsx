import './my_account.scss';
import '../Settings.scss';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentUser,
  logOutUser,
  profileImage
} from '../../../../redux/slices/global/user';
import { Header } from '../../../../components/global/Header/Header';
import profilePicture from '../../../../assets/global/icon_profile.svg';
import arrow from '../../../../assets/icons/icon_arrow-white.svg';
import logout from '../../../../assets/icons/icon_logout.svg';
import routes from '../../../../models/routes.models';
import axios from 'axios';
import { useState } from 'react';
import { useRef } from 'react';
// import { deleteAllCookies } from '../../../../utils/getCookie';
import editImage from '../../../../assets/icons/edit.svg';
import {
  getOrder,
  paymentExpire
} from '../../../../redux/slices/partyUser/order';
import ORDER_STATUS from '../../../../models/order-stages.model';
import { StatusPopUp } from '../../../../components/global/StatusPopUp/StatusPopUp';
import Popup_Alert from '../../../../components/global/Popup_Alert/Popup_Alert';

const { REACT_APP_API } = process.env;

export default function MyAccount() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fileRef = useRef();
  const user = useSelector(getCurrentUser);
  const orders = useSelector(getOrder);
  const [deleteAccountPopup, setDeleteAccountPopup] = useState(false);
  const [image, setImage] = useState(user?.image ? user.image : profilePicture);
  const [isOpen, setIsOpen] = useState(false);
  const ordersBartender = useSelector(
    (state) => state.bartender.orders.allOrders
  );
  let menu = [
    {
      id: 1,
      title: 'Mis datos personales',
      slug: routes.global.personalInformation
    },
    {
      id: 2,
      title: 'Mail y número de teléfono',
      slug: routes.global.mailAndNumber
    },
    {
      id: 3,
      title: 'Cambiar contraseña',
      slug: routes.global.changePassword
    }
  ];
  let userRegisterMethod = user.idGoogle
    ? 'google'
    : user.idApple
    ? 'apple'
    : 'email';
  if (userRegisterMethod !== 'email') {
    menu = menu.filter((item) => item.id !== 3);
  }
  const handleLogout = async () => {
    if (orders.length) {
      orders.map((order) => {
        if (order.status === ORDER_STATUS.PAYMENT_PENDING) {
          dispatch(paymentExpire(order.id));
        }
      });
    }
    // try {
    //   await axios.post(
    //     `${REACT_APP_API}/auth/logout`,
    //     {},
    //     {
    //       headers: {
    //         'Access-Control-Allow-Origin': '*'
    //       }
    //     }
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
    document.cookie = '';
    localStorage.clear();
    window.indexedDB.deleteDatabase('WeDrink');
    dispatch(
      logOutUser({
        navigate: () => navigate('/')
      })
    );
    window.location.reload();
  };

  const handleDeleteAccount = async () => {
    const { _id } = user;
    try {
      const response = await axios.put(
        `${REACT_APP_API}/partyuser/user/${_id}`,
        {
          withCredentials: true
        }
      );
      window.indexedDB.deleteDatabase('WeDrink');
      dispatch(
        logOutUser({
          navigate: () => navigate('/')
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const upLoadImage = (e) => {
    const file = e.target.files[0];

    if (file && file.type.substring(0, 5) === 'image') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
    const formDataImage = new FormData();
    formDataImage.append('file', file);
    dispatch(profileImage(user._id || user.id, formDataImage));
  };

  return (
    <div className="my-account layout-primary">
      <Header backbutton={() => navigate('/settings')} title={'Mi cuenta'} />
      {user.rol !== 'cashier' && user.rol !== 'bartender' ? (
        <div className="my-account__profile-container">
          <div
            className="my-account__profile-picture-wrapper"
            onClick={() => {
              fileRef.current.click();
            }}
          >
            <button className="my-account__edit-button ">
              <img
                className="my-account__edit-button__image"
                src={editImage}
                alt="editar"
                loading="lazy"
              />
            </button>
            <div className="my-account__profile-picture-bg">
              <div className="my-account__profile-picture">
                <img
                  className={`my-account__${
                    image === profilePicture ? 'icon' : 'image'
                  }`}
                  src={image}
                  alt="foto de perfil"
                  loading="lazy"
                />
                <input
                  className="my-account__input-file"
                  accept="image/*"
                  type="file"
                  ref={fileRef}
                  onChange={upLoadImage}
                />
              </div>
            </div>
          </div>
          <h3 className="heading-tertiary-sub my-account__user-name">
            {user.name}
          </h3>
        </div>
      ) : null}
      <div className="my-account__menu-wrapper">
        <div className="settings-paryUser__menu-container">
          {menu?.map((item, i) => (
            <Fragment key={item.id}>
              <div
                className="settings-paryUser__menu-item"
                onClick={() => navigate(item.slug)}
              >
                <h3 className="heading-tertiary-main settings-paryUser__title--sub">
                  {item.title}
                </h3>
                <img
                  className="settings-paryUser__arrow"
                  src={arrow}
                  alt="arrow"
                  loading="lazy"
                />
              </div>
              {i < menu.length - 1 ? (
                <hr className="settings-paryUser__line" />
              ) : null}
            </Fragment>
          ))}
        </div>
        <div
          className="settings-paryUser__row-container"
          onClick={handleLogout}
        >
          <div className="settings-paryUser__wrapper-icon">
            <div className="settings-paryUser__wrapper-icon-bg">
              <div className="settings-paryUser__icon-bg">
                <img
                  loading="lazy"
                  className="settings-paryUser__icon"
                  src={logout}
                  alt=""
                />
              </div>
            </div>
          </div>
          <h3 className="heading-tertiary-sub settings-paryUser__title--sub">
            Cerrar sesión
          </h3>
          <img
            loading="lazy"
            className="settings-paryUser__arrow"
            src={arrow}
            alt="arrow"
          />
        </div>
      </div>
      <div
        className="my-account__delete-account"
        onClick={() => setDeleteAccountPopup(true)}
      >
        <p className="my-account__delete-account">
          ¿Quieres eliminar tu cuenta?
        </p>
      </div>
      <StatusPopUp
        isOpen={deleteAccountPopup}
        title={'¿ESTAS SEGURO QUE QUIERES ELIMINAR TU CUENTA?'}
        close={'Cancelar'}
        closeFunction={() => setDeleteAccountPopup(false)}
        button={'Eliminar mi cuenta'}
        redirect={handleDeleteAccount}
      />
      {isOpen && (
        <Popup_Alert
          title="Elige un club para ver sus estadísticas."
          button="Seleccionar"
          redirect={() => navigate('/')}
        />
      )}
    </div>
  );
}
