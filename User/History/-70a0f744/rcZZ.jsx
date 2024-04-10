import React, { useEffect } from 'react';
import './accountItem.scss';
import { useState } from 'react';
import { ToggleSwitch } from '../../../../../components/owner-manager/ToggleSwitch/ToggleSwitch';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AccountItem = ({ name, number, status, icon, label }) => {
  const [statusAccount, setStatusAccount] = useState(status);
  const { id } = useParams();

  useEffect(() => {
    setStatusAccount(status);
  }, [status]);

  const onChange = async (status) => {
    setStatusAccount(status);
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API}/organizer/payment/methodconfiguration/${id}`,
        {
          [name]: status
        }
      );
      console.log(response);
      console.log(name);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="accountItem">
      <div className="accountItem__data-container">
        <div className="accountItem__name-image-container">
          <img className="accountItem__image" src={icon} alt={name} />
          <h3 className="accountItem__name">{label}</h3>
        </div>
        <p className="heading-tertiary-main ">{number}</p>
      </div>
      <ToggleSwitch
        checked={statusAccount}
        onChange={() => onChange(!statusAccount)}
      />
    </div>
  );
};

export default AccountItem;
