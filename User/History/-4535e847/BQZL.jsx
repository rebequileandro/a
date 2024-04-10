import React from 'react';
import './no_inventory.scss';
import noInventory from '../../../assets/Owner/inventory.svg';
import { Link } from 'react-router-dom';
const No_Inventory = () => {
  return (
    <div className="no-inventory layout-primary">
      <img src={noInventory} alt="no hay inventario" />
      <h3 className="heading-tertiary-sub no-inventory__text">
        Todavía no tienes productos disponibles en tu inventario.
      </h3>
      <button className="btn-primary--l">Crear inventario</button>
      <div className="anchor-primary">
        <Link to="/">Volver a inicio</Link>
      </div>
    </div>
  );
};

export default No_Inventory;
