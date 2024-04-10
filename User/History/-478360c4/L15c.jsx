import React, { useState } from 'react';
import './edit-food.scss';
import TextArea from '../../../global/TextArea/TextArea';
import InputDiv from '../../../global/InputDiv/InputDiv';
import { formatPrice } from '../../../../utils/formatNumber';
const EditFood = ({ setIsEdit, name, price, description, discount, id }) => {
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

  const handleSubmit = async () => {
    try {
      let discount = Math.round((input.discount / 100) * input.price);
      let finalPrice = input.price - discount;

      const response = await axios.put(
        `${process.env.REACT_APP_API}/organizer/drink/${idDrink}`,
        {
          priceDrink: input.price,
          discountDrink: input.discount,
          finalPriceDrink: finalPrice,
          recipe: input.recipe,
          totalMinOrder: input.timeOrder,
          drinkMl: input.drinkMl
        }
      );
      setStatusPopup(response.status);
      setIsOpen(true);
      dispatch(getDrinks(id));
    } catch (err) {
      console.log(err);
      setStatusPopup(err.status);
    }
  };

  return (
    <form className="edit-food" onSubmit={handleSubmit}>
      <div>
        <h2 className="edit-food__name">{name}</h2>
        <InputDiv
          label={'Precio:'}
          onChange={handleChange}
          inputProps={{
            type: 'tel',
            value: input.price,
            name: 'price'
          }}
          error={inputErrors?.price}
        />
        <InputDiv
          label={'Descuento %:'}
          onChange={handleChange}
          inputProps={{
            type: 'tel',
            value: input?.discount,
            name: 'discount'
          }}
          error={inputErrors?.discount}
        />
        <div className="edit-food__final-price-wrapper">
          <label className="edit-food__final-price-wrapper__label">
            Precio final:{' '}
          </label>
          <span className="edit-food__final-price-wrapper__price">
            {formatPrice(
              input.price - Math.round((input.discount / 100) * input.price),
              '$'
            )}
          </span>
        </div>
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
      </div>

      <div className="edit-food__btn-wrapper">
        <button type="submit" className="btn-primary btn-primary--m">
          Guardar
        </button>
        <button
          type="reset"
          className="edit-food__cancel"
          onClick={() => setIsEdit(false)}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default EditFood;
