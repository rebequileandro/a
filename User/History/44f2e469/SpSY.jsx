import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Profile.scss'
import logout from '../../assets/logout.svg'
const Profile = () => {
  return (
    <div className="profile-container">
      <Sidebar active={"profile"} />
      <div className="profile-info">
        <div className="row-content">
          <h2>direccion de mail:</h2>
        </div>
        <hr />
        <div className="row-content">
          <input type="text" />
        </div>
        <hr />
        <div className="row-content">
          <h2>cambiar contraseña:</h2>
        </div>
        <hr />
        <div className="row-content">
          <input type="text" />
        </div>
        <hr />
        <div className="row-content">
          <input type="text" />
        </div>
        <hr />
      </div>
      <button className='logout'>
          <img src={logout} alt="cerrar sesión" />
          cerrar sesión
      </button>
    </div>
  );
}

export default Profile