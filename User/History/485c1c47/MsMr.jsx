import React from 'react';

const AccountItem = ({ name, number, status }) => {
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <p>{number}</p>
      </div>
    </div>
  );
};

export default AccountItem;
