import React from 'react';
import './no_inventory.scss';
import noInventory from '../../../assets/Owner/inventory.svg';
const No_Inventory = () => {
  return (
    <div className="no-inventory">
      <img src={noInventory} alt="no hay inventario" />
      <h3 className="heading-tertiary-sub">
        Todavía no tienes productos disponibles en tu inventario.
      </h3>
    </div>
  );
};

export default No_Inventory;
