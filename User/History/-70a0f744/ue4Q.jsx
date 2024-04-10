import React, { useEffect } from 'react';
import './accountItem.scss';
import { useState } from 'react';
import { ToggleSwitch } from '../../../../../components/owner-manager/ToggleSwitch/ToggleSwitch';

const AccountItem = ({ name, number, status, icon }) => {
  const [statusAccount, setStatusAccount] = useState(status);
  useEffect(() => {
    setStatusAccount(status);
  }, [status]);

  const onChange = async () => {
    setStatusAccount(!statusAccount);
    try {
      const response = await axios(
        `${process.env.REACT_APP_API}/organizer/payment/allmethods/${id}`
      );
      initialState.map((e, i) => {
        response.data.methods.map((s) => {
          initialState[i].status = s[e.name];
        });
      });
      setMethod(initialState);
    } catch (error) {
      console.log(error);
    }
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
