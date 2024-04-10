import React from 'react';
import './edit-food.scss';
const EditFood = ({ setIsEdit, name }) => {
  return (
    <div className="edit-food">
      <h2>{name}</h2>
      <div className="edit-food__btn-wrapper">
        <button className="btn-primary btn-primary--m">Guardar</button>
        <button className="edit-food__cancel" onClick={() => setIsEdit(false)}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default EditFood;
