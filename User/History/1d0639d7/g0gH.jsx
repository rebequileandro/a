import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductCardsOrganizer } from '../ProductsCardsOrganizer/ProductCardsOrganizer';
import plus from '../../../../assets/icons/Organizer/plus.svg';
import './DetailsCategories.scss';
import {
  catchStatus,
  selectDrinks
} from '../../../../redux/slices/organizer/organizer';
import { SelectDrink } from '../AddDrink/SelectDrink/SelectDrink';
import { Header } from '../../../../components/global/Header/Header';
import { StatusPopUp } from '../../../../components/global/StatusPopUp/StatusPopUp';

export const DetailsCategories = ({ categoryType }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getDetails = useSelector((state) => state.organizer.organizer.details);
  const getAllDrinks = useSelector((state) => state.organizer.organizer.drinks);
  const getAllBottles = useSelector(
    (state) => state.organizer.organizer.bottles
  );
  const getAllPacks = useSelector((state) => state.organizer.organizer.packs);
  const getAllalcoholFree = useSelector(
    (state) => state.organizer.organizer.alcoholFree
  );

  const [route, setRoute] = useState('tragos');
  const [selected, setSelected] = useState(false);
  const [status, setStatus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenStatusPopup, setIsOpenStatusPopup] = useState(false);
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    if (categoryType === 'drink') {
      setDetails(getAllDrinks);
      dispatch(selectDrinks(getAllDrinks));
      setSelected('tragos');
      setRoute('tragos');
    }
    if (categoryType === 'bottle') {
      setDetails(getAllBottles);
      dispatch(selectDrinks(getAllBottles));
      setSelected('botellas');
      setRoute('botellas');
    }
    if (categoryType === 'packs') {
      setDetails(getAllPacks);
      dispatch(selectDrinks(getAllPacks));
      setSelected('packs');
      setRoute('packs');
    }
    if (categoryType === 'alcoholFree') {
      setDetails(getAllalcoholFree);
      dispatch(selectDrinks(getAllalcoholFree));
      setSelected('adicionales');
      setRoute('adicionales');
    }
  }, [categoryType]);

  const handleOnClick = () => {
    setIsOpen(true);
    categoryType === 'drink' && setSelected('tragos');
    categoryType === 'bottle' && setSelected('botellas');
    categoryType === 'packs' && setSelected('packs');
    categoryType === 'alcoholFree' && setSelected('adicionales');
  };
  const cleanCatchStatus = () => {
    dispatch(catchStatus(false));
    setIsOpenStatusPopup(false);
    setIsOpen(false);
    setStatus(false);
  };
  let OrganizerParty = {
    party: getDetails ? getDetails.nameParty : null,
    path: `menu > ${route}`
  };
  return (
    <>
      <div className="container-details-categories">
        <Header
          backbutton={() => navigate(-1)}
          OrganizerParty={OrganizerParty}
        />
        <div className="container-drinks">
          {details?.map((e) => {
            if (JSON.parse(e.activeDrink) === true)
              return (
                <ProductCardsOrganizer
                  key={e.nameDrink}
                  edit={true}
                  image={e.imageDrink}
                  name={e.nameDrink}
                  oldPrice={e.priceDrink}
                  discount={e.discountDrink}
                  status={e.activeDrink}
                  price={e.finalPriceDrink}
                  type={e.typeDrink}
                  id={id}
                />
              );
          })}
          <div className="new-drink-container">
            <div className="new-drink" onClick={() => handleOnClick()}>
              <img src={plus} alt="mas tragos" />
              <p>Añadir bebidas</p>
            </div>
          </div>
        </div>
      </div>
      {isOpen && selected && !status && !isOpenStatusPopup ? (
        <SelectDrink
          selected={selected}
          setStatus={setStatus}
          setSelected={setSelected}
          setIsOpenStatusPopup={setIsOpenStatusPopup}
          id={id}
        />
      ) : null}
      <StatusPopUp
        isOpen={isOpenStatusPopup}
        redirect={() => cleanCatchStatus()}
        title={status === 200 ? 'menu actualizado' : 'ha ocurrido un error'}
        status={status}
        button={'aceptar'}
      />
    </>
  );
};
