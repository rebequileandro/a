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
      <input
        type="number"
        name="discount"
        value={input.discount}
        onInput={(e) => (e.target.value = e.target.value.slice(0, 2))}
        onChange={handleChange}
      />
      <TextArea
        label={'Descripción:'}
        onChange={handleChange}
        inputProps={{
          name: 'description',
          placeholder: 'pizza con...',
          maxLength: '1000',
          value: input.description
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
