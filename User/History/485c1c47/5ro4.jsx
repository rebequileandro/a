import React from 'react';
import { ToggleSwitch } from '../../../../components/owner-manager/ToggleSwitch/ToggleSwitch';

const AccountItem = ({ name, number, status, icon }) => {
  return (
    <div>
      <div>
        <div>
          <img src={icon} alt={name} />
          <h3>{name}</h3>
        </div>
        <p>{number}</p>
      </div>
      <ToggleSwitch checked={status} />
    </div>
  );
};

export default AccountItem;
