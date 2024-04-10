import React, { useState } from 'react';

import './TypeOfDrink.scss';
import drink from '../../../../../assets/icons/Organizer/drink.svg';
import bottle from '../../../../../assets/icons/Organizer/bottle.svg';
import pack from '../../../../../assets/icons/Organizer/pack.svg';
import additional from '../../../../../assets/icons/Organizer/adit.svg';
import additional2 from '../../../../../assets/icons/Organizer/adit2.svg';
import { SelectDrink } from '../SelectDrink/SelectDrink';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  catchStatus,
  selectDrinks
} from '../../../../../redux/slices/organizer/organizer';
import { allDrinks } from '../../drinks/drinks';
import { ProductCardsOrganizer } from '../../ProductsCardsOrganizer/ProductCardsOrganizer';
import { StatusPopUp } from '../../../../../components/global/StatusPopUp/StatusPopUp';

export const TypeOfDrink = ({ setIsOpen, id }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);
  const [status, setStatus] = useState(false);
  const [isOpenStatusPopup, setIsOpenStatusPopup] = useState(false);
  const getAllDrinks = useSelector((state) => state.organizer.drinks);
  const getAllBottles = useSelector((state) => state.organizer.bottles);
  const getAllAdditional = useSelector((state) => state.organizer.additional);

  const handleClick = (value) => {
    let addIdParty = allDrinks.drinkParty.map((element) => {
      return {
        ...element,
        idParty: id
      };
    });
    if (value === 'tragos') {
      let drinksAll = addIdParty.filter((e) => e.typeDrink === 'drink');
      dispatch(selectDrinks(getAllDrinks.length ? getAllDrinks : drinksAll));
    }
    if (value === 'botellas') {
      let bottlesAll = addIdParty.filter((e) => e.typeDrink === 'bottle');
      dispatch(selectDrinks(getAllBottles.length ? getAllBottles : bottlesAll));
    }
    if (value === 'packs') {
      let bottlesAll = addIdParty.filter((e) => e.typeDrink === 'bottle');
      dispatch(selectDrinks(getAllBottles.length ? getAllBottles : bottlesAll));
    }
    if (value === 'sin alcohol') {
      let additionalAll = addIdParty.filter(
        (e) => e.typeDrink === 'additional'
      );
      dispatch(
        selectDrinks(getAllAdditional.length ? getAllAdditional : additionalAll)
      );
    }
    setTimeout(() => {
      setSelected(value);
    }, 1000);
  };
  const cleanCatchStatus = () => {
    dispatch(catchStatus(false));
    setIsOpenStatusPopup(false);
    setIsOpen(false);
  };
  return (
    <div className="overlay-type-of-drink">
      {!status && !selected ? (
        <div className="type-of-products-popup">
          <div className="header-popup">
            <h2>elige el tipo de producto</h2>
            <p>Selecciona las categorias disponibles</p>
          </div>
          <div className="type-of-products">
            <div
              className="card-container"
              onClick={() => handleClick('tragos')}
            >
              <ProductCardsOrganizer image={drink} name={'tragos'} />
            </div>
            <div
              className="card-container"
              onClick={() => handleClick('botellas')}
            >
              <ProductCardsOrganizer image={bottle} name={'botellas'} />
            </div>
            <div
              className="card-container"
              onClick={() => handleClick('sin alcohol')}
            >
              <ProductCardsOrganizer image={additional} name={'sin alcohol'} />
            </div>
            <div
              className="card-container"
              onClick={() => handleClick('packs')}
            >
              <ProductCardsOrganizer image={pack} name={'packs'} />
            </div>
          </div>
          <button className="cancel" onClick={() => setIsOpen(false)}>
            Cancelar
          </button>
        </div>
      ) : !status && !isOpenStatusPopup ? (
        <SelectDrink
          selected={selected}
          setStatus={setStatus}
          setSelected={setSelected}
          setIsOpenStatusPopup={setIsOpenStatusPopup}
          id={id}
        />
      ) : null}
      {isOpenStatusPopup && (
        <StatusPopUp
          redirect={() => cleanCatchStatus()}
          title={status === 200 ? 'menu actualizado' : 'ha ocurrido un error'}
          status={status}
          button={'aceptar'}
        />
      )}
    </div>
  );
};
