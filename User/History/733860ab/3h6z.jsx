import React, { useState } from 'react';

import './SelectDinksCards.scss';
import { useDispatch } from 'react-redux';
import { updateList } from '../../../../../../redux/slices/organizer/organizer';
import { ToggleSwitch } from '../../../../../../components/owner-manager/ToggleSwitch/ToggleSwitch';
export const SelectDrinkCard = ({
  name,
  price,
  discount,
  image,
  statusDrink,
  typeDrink
}) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(JSON.parse(statusDrink));
  const [input, setInput] = useState({
    price: price,
    discount: discount
  });
  const handleChangeSwitch = (e) => {
    setChecked(e.target.checked);
    dispatch(
      updateList({
        name,
        type: 'activeDrink',
        value: e.target.checked.toString()
      })
    );
  };
  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const updateValue = (type, value) => {
    dispatch(updateList({ name, type, value }));
  };

  return (
    <div className="card-select">
      {typeDrink === 'packs' ? (
        <div className="image-drink">
          <div className="images-packs">
            {image?.map((e) => (
              <img className="img-pack" key={e} src={e} alt="drink" />
            ))}
          </div>
        </div>
      ) : (
        <div className="image-drink">
          <img src={image} alt="drink" />
        </div>
      )}
      <div className="container-right">
        <div className="container-head">
          <h2>{name}</h2>
          <div className="switch-container">
            <p>{checked ? 'Publicado' : 'No Publicado'}</p>
            <ToggleSwitch
              text={true}
              checked={checked}
              onChange={handleChangeSwitch}
            />
          </div>
        </div>
        <div className="container-prices">
          <div>
            <h2>Precio</h2>
            <div className="input-wrapper">
              <div className="input-container">
                <label className="price">$</label>
                <input
                  name="price"
                  type="number"
                  value={input.price}
                  onBlur={() => updateValue('priceDrink', input.price)}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>
          <div>
            <h2>Descuento</h2>
            <div className="input-wrapper">
              <div className="input-container">
                <input
                  name="discount"
                  type="number"
                  value={input.discount}
                  onBlur={() => updateValue('discountDrink', input.discount)}
                  onInput={(e) => (e.target.value = e.target.value.slice(0, 2))}
                  onChange={(e) => handleChange(e)}
                />
                <label className="percent">%</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
