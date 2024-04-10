import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './productsCardEdit.scss';
import Edit from '../../../assets/buttons/edit.svg';
import less from '../../../assets/buttons/card_less.svg';
import plus from '../../../assets/buttons/card_plus.svg';
import trash from '../../../assets/buttons/card_trash.svg';
import { ToggleSwitch } from '../ToggleSwitch/ToggleSwitch';
import { updateList } from '../../../redux/slices/organizer/organizer';
import { EditProduct } from '../../../pages/owner-manager/Menu/EditProduct/EditProduct';
import axios from 'axios';
import { formatNumber } from '../../../utils/formatNumber';
const { REACT_APP_API } = process.env;
export default function Products_card_edit({
  image,
  name,
  price,
  oldPrice,
  id,
  edit,
  add,
  type,
  statusDrink,
  discount,
  recipe,
  timeOrder,
  glassMl,
  drinkMl
}) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(JSON.parse(statusDrink));
  const [isEdit, setIsEdit] = useState(false);
  const handleChangeSwitch = async (e) => {
    setChecked(e.target.checked);
    const response = await axios.put(`${REACT_APP_API}/organizer/drink/${id}`, {
      activeDrink: !checked
    });

    // dispatch(
    //   updateList({
    //     name,
    //     type: 'activeDrink',
    //     value: e.target.checked.toString()
    //   })
    // );
  };

  return (
    <>
      <div className="menu-card-container">
        <div className="edit-card-tranparent-gradient">
          <button onClick={() => setIsEdit(true)} className="edit">
            <img src={Edit} alt="edit" />
          </button>

          {type === 'packs' ? (
            <div className="packs-image-container">
              {image?.map((element) => (
                <img
                  key={element}
                  className="pack-image image"
                  src={element}
                  alt="pack"
                  loading="lazy"
                />
              ))}
            </div>
          ) : (
            <img className="image" src={image} alt="drink" loading="lazy" />
          )}
        </div>
        <div className="edit-card-pink-gradient">
          <h3 className="product-name">{name}</h3>
          <p className="product-ml">{glassMl} ml.</p>
          {price && (
            <div className="edit-card-prices">
              <span className="edit-card-prices__col1">
                {oldPrice && (
                  <h3 className="old-price">${formatNumber(oldPrice)}</h3>
                )}
                <h3 className="heading-tertiary-sub">${formatNumber(price)}</h3>
              </span>
              <span className="edit-card-prices__col2">
                <ToggleSwitch checked={checked} onChange={handleChangeSwitch} />
              </span>
            </div>
          )}
        </div>
      </div>
      {isEdit && (
        <EditProduct
          idDrink={id}
          price={oldPrice ? oldPrice : price}
          image={image}
          name={name}
          setIsEdit={setIsEdit}
          discount={discount}
          type={type}
          status={statusDrink}
          recipe={recipe}
          glassMl={glassMl}
          timeOrder={timeOrder}
        />
      )}
    </>
  );
}
