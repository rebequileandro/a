import React from 'react';
import './no_inventory.scss';
import noInventory from '../../../assets/Owner/inventory.svg';
const No_Inventory = () => {
  return (
    <div>
      <img src={noInventory} alt="no hay inventario" />
    </div>
  );
};

export default No_Inventory;
