import React, { useEffect } from 'react';
import './accountItem.scss';
import { useState } from 'react';
import { ToggleSwitch } from '../../../../../components/owner-manager/ToggleSwitch/ToggleSwitch';

const AccountItem = ({
  name,
  number,
  status,
  icon,
  index,
  setMethod,
  method
}) => {
  // const [statusAccount, setStatusAccount] = useState(status);
  // useEffect(() => {
  //   setStatusAccount(status);
  // }, [status]);

  const onChange = () => {
    setMethod([...method, (method[index].status = !status)]);
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
      <ToggleSwitch checked={status} onChange={() => onChange()} />
    </div>
  );
};

export default AccountItem;
