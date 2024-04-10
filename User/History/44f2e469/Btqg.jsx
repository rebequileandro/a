import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Profile.scss'

const Profile = () => {
  return (
    <div className="profile-container">
      <Sidebar active={"profile"} />
      <div className="profile-info">
        <div className="row-content">
            <h2>direccion de mail:</h2>
        </div>
        <hr />
        <div className="row-content"></div>
        <hr />
        <div className="row-content">
            <h2>cambiar contraseña:</h2>
        </div>
        <hr />
        <div className="row-content"></div>
        <hr />
        <div className="row-content"></div>
        <hr />
      </div>
    </div>
  );
}

export default Profile