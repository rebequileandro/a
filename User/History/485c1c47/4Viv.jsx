import React from 'react';
import './accountItem.scss';
import { ToggleSwitch } from '../../../../components/owner-manager/ToggleSwitch/ToggleSwitch';
import { useState } from 'react';

const AccountItem = ({ name, number, status, icon }) => {
  const [statusAccount, setStatusAccount] = useState(false);
  return (
    <div className="accountItem">
      <div className="accountItem__data-container">
        <div className="accountItem__name-image-container">
          <img className="accountItem__image" src={icon} alt={name} />
          <h3 className="accountItem__name">{name}</h3>
        </div>
        <p className="heading-tertiary-main ">{number}</p>
      </div>
      <ToggleSwitch
        checked={statusAccount}
        onChange={() => setStatusAccount(!statusAccount)}
      />
    </div>
  );
};

export default AccountItem;
