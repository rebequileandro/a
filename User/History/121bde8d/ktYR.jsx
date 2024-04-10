import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../../utils/formatNumber';
import { getCurrentClub } from '../../../redux/slices/partyUser/club';
import Edit from '../../../assets/buttons/edit.svg';
import './food-card-edit.scss';
import axios from 'axios';
import { ToggleSwitch } from '../../global/ToggleSwitch/ToggleSwitch';
import EditFood from './EditFood/EditFood';
export default function FoodCardEdit({
  image,
  name,
  price,
  oldPrice,
  id,
  descripcion,
  status
}) {
  const dispatch = useDispatch();
  const [exists, setExists] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [checked, setChecked] = useState(JSON.parse(status));
  const [isEdit, setIsEdit] = useState(false);

  const getCart = useSelector((state) => state.partyUser.marketplace.cart);
  const club = useSelector(getCurrentClub);

  const truncatedDescription =
    descripcion?.length > 140
      ? descripcion.substr(0, 140) + '...'
      : descripcion;

  useEffect(() => {
    let cartFilter = getCart.filter((e) => e._id === id);
    setExists(cartFilter);
  }, [getCart]);

  const handleChangeSwitch = async (e) => {
    setChecked(e.target.checked);
    await axios.put(`${process.env.REACT_APP_API}/organizer/drink/${id}`, {
      activeDrink: !checked
    });
  };
  // useEffect(() => {
  //   if (isEdit) {
  //     document.body.style.overflowY = 'hidden';
  //   } else {
  //     document.body.style.overflowY = 'scroll';
  //   }
  // }, [isEdit]);

  return (
    <>
      <div className="foodCard">
        <button onClick={() => setIsEdit(true)} className="foodCard__edit">
          <img src={Edit} alt="edit" className="foodCard__edit--icon" />
        </button>

        <div className="foodCard__info">
          <h3 className="title">{name}</h3>
          <p
            className={`description ${
              showFullDescription ? 'description--expanded' : ''
            }`}
          >
            {showFullDescription ? descripcion : truncatedDescription}
          </p>
          {descripcion?.length > 140 && (
            <div>
              <button
                className="foodCard__description-btn"
                onClick={() => setShowFullDescription(!showFullDescription)}
              >
                {showFullDescription ? 'Leer menos' : 'Leer mas'}
              </button>
            </div>
          )}
          <p className="price">{formatPrice(price, '$')}</p>
        </div>
        <div className="foodCard__img">
          <img src={image} alt={name} />
        </div>
        <div className="foodCard__toggle-wrapper">
          <ToggleSwitch checked={checked} onChange={handleChangeSwitch} />
        </div>
      </div>
      {isEdit && <EditFood />}
    </>
  );
}
