import React from 'react';
import './accountItem.scss';
import { ToggleSwitch } from '../../../../components/owner-manager/ToggleSwitch/ToggleSwitch';

const AccountItem = ({ name, number, status, icon }) => {
  return (
    <div className="accountItem">
      <div>
        <div className="accountItem__name-image-container">
          <img className="accountItem__image" src={icon} alt={name} />
          <h3 className="accountItem__name">{name}</h3>
        </div>
        <p>{number}</p>
      </div>
      <ToggleSwitch checked={status} />
    </div>
  );
};

export default AccountItem;
