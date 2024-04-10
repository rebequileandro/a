import React, { useState } from 'react';
import './edit-food.scss';
import TextArea from '../../../global/TextArea/TextArea';
import InputDiv from '../../../global/InputDiv/InputDiv';
import { formatPrice } from '../../../../utils/formatNumber';
import axios from 'axios';
import { StatusPopUp } from '../../../global/StatusPopUp/StatusPopUp';
import { getDrinks } from '../../../../redux/slices/organizer/organizer';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '../../../global/Button/Button';

const EditFood = ({
  setIsEdit,
  name,
  price,
  description,
  discount,
  idProduct
}) => {
  const initialState = {
    price,
    description,
    discount
  };
  const { id } = useParams();
  const dispatch = useDispatch();
  const [input, setInput] = useState(initialState);
  const [inputErrors, setInputErrors] = useState();
  const [statusPopup, setStatusPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let discount = Math.round((input.discount / 100) * input.price);
      let finalPrice = input.price - discount;

      const response = await axios.put(
        `${process.env.REACT_APP_API}/organizer/drink/${idProduct}`,
        {
          priceDrink: input.price,
          discountDrink: input.discount,
          finalPriceDrink: finalPrice,
          description: input.description
        }
      );
      console.log(response);
      setStatusPopup(response.status);
      dispatch(getDrinks(id));
    } catch (err) {
      console.log(err);
      setStatusPopup(err.status);
    }
    setLoading(false);
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
        <Button children="Guardar" loading={loading} type="submit" />
        <button
          type="reset"
          className="edit-food__cancel"
          onClick={() => setIsEdit(false)}
        >
          Cancelar
        </button>
      </div>
      <StatusPopUp
        isOpen={statusPopup}
        redirect={() =>
          statusPopup === 200 ? setIsEdit(false) : setStatusPopup(false)
        }
        title={
          statusPopup === 200 ? 'producto actualizado' : 'ha ocurrido un error'
        }
        status={statusPopup === 200}
        button={'Aceptar'}
      />
    </form>
  );
};

export default EditFood;
