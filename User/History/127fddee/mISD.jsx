import React from 'react';
import { useDispatch } from 'react-redux';
import { addPack } from '../../../../../../redux/slices/organizer/organizer';
import './CreatePack.scss';
export const CreatePack = ({
  newPack,
  setNewPack,
  setIsCreate,
  id,
  setNext
}) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewPack({
      ...newPack,
      nameDrink: e.target.value
    });
  };
  const createPack = () => {
    dispatch(addPack(newPack));
    setNewPack({
      idParty: id,
      imageDrink: '',
      typeDrink: 'packs',
      nameDrink: '',
      priceDrink: '',
      discountDrink: '',
      finalPriceDrink: '',
      activeDrink: 'true',
      statusDrink: 'true'
    });
    setIsCreate(false);
    setNext(false);
  };
  return (
    <div className="create-pack-overlay">
      <div className="create-pack-popup">
        <h2>elige un nombre para este pack</h2>
        <div className="wrapper">
          <input
            value={newPack.nameDrink}
            className="input-name"
            type="text"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="save-pack" onClick={() => createPack()}>
          Aceptar
        </button>
      </div>
    </div>
  );
};
