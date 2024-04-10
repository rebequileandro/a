import React, { useEffect } from 'react';
import './accountItem.scss';
import { useState } from 'react';
import { ToggleSwitch } from '../../../../../components/owner-manager/ToggleSwitch/ToggleSwitch';

const AccountItem = ({ name, number, status, icon }) => {
  const [statusAccount, setStatusAccount] = useState();
  useEffect(() => {
    setStatusAccount(status);
  }, [status]);

  const onChange = () => {
    setStatusAccount(!statusAccount);
  };
  return (
    <div className="accountItem">
      <div className="accountItem__data-container">
        <div className="accountItem__name-image-container">
          <img className="accountItem__image" src={icon} alt={name} />
          <h3 className="accountItem__name">{name}</h3>
        </div>
        <p className="heading-tertiary-main ">{number}</p>
      </div>
      <ToggleSwitch checked={statusAccount} onChange={() => onChange()} />
    </div>
  );
};

export default AccountItem;
