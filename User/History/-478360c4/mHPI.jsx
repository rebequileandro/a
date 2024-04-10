import React, { useState } from 'react';
import './edit-food.scss';
import TextArea from '../../../global/TextArea/TextArea';
const EditFood = ({ setIsEdit, name, price, description, discount }) => {
  const initialState = {
    price,
    description,
    discount
  };
  const [input, setInput] = useState(initialState);
  const [inputErrors, setInputErrors] = useState();

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="edit-food">
      <h2>{name}</h2>
      <TextArea
        label={'Cuéntanos en qué podemos ayudarte:'}
        onChange={handleChange}
        inputProps={{
          name: 'description',
          placeholder: 'Mensaje',
          maxLength: '1000'
        }}
        error={inputErrors?.description}
      />
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
