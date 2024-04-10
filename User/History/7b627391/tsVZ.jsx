import React, { useEffect, useState } from 'react';
import './EditProduct.scss';

import { useDispatch, useSelector } from 'react-redux';
import {
  upDateDrinks,
  catchStatus
} from '../../../../redux/slices/organizer/organizer';
import { StatusPopUp } from '../../../../components/global/StatusPopUp/StatusPopUp';
import { ToggleSwitch } from '../../../../components/owner-manager/ToggleSwitch/ToggleSwitch';
import axios from 'axios';
import { getDrinks } from '../../../../redux/slices/organizer/organizer.js';
import { useParams } from 'react-router-dom';
const { REACT_APP_API } = process.env;
export const EditProduct = ({
  idDrink,
  image,
  name,
  price,
  status,
  setIsEdit,
  discount,
  type
}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [statusPopup, setStatusPopup] = useState(false);
  const getAllDrinks = useSelector((state) => state.organizer.organizer.drinks);
  const getAllBottles = useSelector(
    (state) => state.organizer.organizer.bottles
  );
  const getAllPacks = useSelector((state) => state.organizer.organizer.packs);
  const getAllAdditional = useSelector(
    (state) => state.organizer.organizer.additional
  );
  const getParty = useSelector((state) => state.organizer.organizer.details);
  const getStatus = useSelector((state) => state.organizer.organizer.status);
  const [checked, setChecked] = useState(JSON.parse(status));
  const [input, setInput] = useState({
    price: price,
    discount: discount
  });
  const { id } = useParams();
  const handleChangeSwitch = (e) => {
    setChecked(e.target.checked);
  };
  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };
  const handlePackDelete = async () => {
    console.log(type);
    try {
      const response = await axios.delete(
        `${REACT_APP_API}/organizer/drink/${idDrink}`
      );
      setStatusPopup(response.status);
      setIsOpen(true);
      dispatch(getDrinks(id));
    } catch (err) {
      setStatusPopup(false);
      setIsOpen(true);
      console.log(err);
    }
  };
  const handleSubmit = async () => {
    let discount = Math.round((input.discount / 100) * input.price);
    let finalPrice = input.price - discount;
    const response = await axios.put(
      `${REACT_APP_API}/organizer/drink/${idDrink}`,
      {
        priceDrink: input.price,
        discountDrink: input.discount,
        finalPriceDrink: finalPrice
      }
    );
    console.log('soy el submit', response.status);
    setStatusPopup(response.status);
    setIsOpen(true);
    dispatch(getDrinks(id));
  };
  const cleanCatchStatus = () => {
    dispatch(catchStatus(false));
    setIsEdit(false);
  };

  return (
    <div className="edit-product-overlay">
      <div className="edit-popup-size">
        {!isOpen ? (
          <div className="edit-popup">
            <div className="popup-header">
              <button className="close" onClick={() => setIsEdit(false)}>
                x
              </button>
              <h2>editar producto</h2>
              <p>selecciona los productos disponibles en tu menu</p>
            </div>
            <div className="product-container">
              {type === 'packs' ? (
                <div className="image-pack-container">
                  {image?.map((e) => (
                    <img src={e} alt="" className="pack-image-edit" />
                  ))}
                </div>
              ) : (
                <div className="image">
                  <img src={image} alt="pruducto" />
                </div>
              )}
              <div className="right-container">
                <h2>{name}</h2>
                <div className="form">
                  <div className="input-container">
                    <label>Precio</label>
                    <div className="input-wrapper">
                      <p className="price">$</p>
                      <input
                        type="number"
                        name="price"
                        value={input.price}
                        onChange={(e) => handleOnChange(e)}
                      />
                    </div>
                  </div>
                  <div className="input-container">
                    <label>Descuento</label>
                    <div className="input-wrapper">
                      <p className="discount">%</p>
                      <input
                        type="number"
                        name="discount"
                        value={input.discount}
                        onInput={(e) =>
                          (e.target.value = e.target.value.slice(0, 2))
                        }
                        onChange={(e) => handleOnChange(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`buttons-container ${
                type === 'packs' && 'save-packs'
              }`}
            >
              <button className="save" onClick={(e) => handleSubmit(e)}>
                Aceptar
              </button>
              {type === 'packs' && (
                <button className="remove" onClick={(e) => handlePackDelete(e)}>
                  Eliminar del menu
                </button>
              )}
            </div>
          </div>
        ) : (
          <StatusPopUp
            isOpen={isOpen}
            redirect={cleanCatchStatus}
            title={
              statusPopup === 200
                ? 'producto actualizado'
                : 'ha ocurrido un error'
            }
            status={statusPopup === 200}
            button={'Aceptar'}
          />
        )}
      </div>
    </div>
  );
};
