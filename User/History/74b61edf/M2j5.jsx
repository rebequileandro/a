import React from 'react';
import './ProfileImg.scss';
import profilePicture from '../../../assets/global/icon_profile.svg';

const ProfileImg = ({ img }) => {
  return (
    <div className="profile-img">
      <div className="profile-img__profile-picture-bg">
        <div className="profile-img__profile-picture">
          <img
            className={`profile-img__${!img ? 'icon' : 'image'}`}
            src={img ? img : profilePicture}
            alt="foto de perfil"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileImg;
