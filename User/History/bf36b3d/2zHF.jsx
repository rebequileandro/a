import React, { useEffect, useState } from 'react';
import './SelectDrink.scss';
import search from '../../../../../assets/global/search.svg';
import { SelectDrinkCard } from './SelectedDinksCards/SelectDrinkCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  onSearchDrinks,
  upDateDrinks
} from '../../../../../redux/slices/organizer/organizer';
import { CreatePackCard } from './SelectedDinksCards/CreatePackCard';
import { CreatePack } from './CreatePackPopup/CreatePack';
import SearchBar from '../../../../../components/global/SearchBar/SearchBar';
export const SelectDrink = ({
  selected,
  setSelected,
  setStatus,
  setIsOpenStatusPopup,
  id
}) => {
  const drinks = useSelector((state) => state.organizer.organizer.listDrinks);
  const getStatus = useSelector((state) => state.organizer.organizer.status);
  const getAllDrinks = useSelector((state) => state.organizer.organizer.drinks);
  const getAllBottles = useSelector(
    (state) => state.organizer.organizer.bottles
  );
  const getAllPacks = useSelector((state) => state.organizer.organizer.packs);
  const getAllalcoholFree = useSelector(
    (state) => state.organizer.organizer.alcoholFree
  );
  const getParty = useSelector((state) => state.organizer.organizer.details);
  const getSearch = useSelector((state) => state.organizer.organizer.search);
  const dispatch = useDispatch();
  const [inputSearchBar, setinputSearchBar] = useState('');
  const [drinksProducts, setDrinksProduct] = useState([]);
  const [isCreate, setIsCreate] = useState(false);
  const [next, setNext] = useState(false);
  const [createPackData, setCreatePackData] = useState(drinks);
  const [newPack, setNewPack] = useState({
    idParty: id,
    priceDrink: '',
    discountDrink: '',
    finalPriceDrink: '',
    imageDrink: '',
    typeDrink: 'packs',
    nameDrink: '',
    activeDrink: 'false',
    totalMinOrder: '',
    recipe: []
  });

  useEffect(() => {
    if (selected === 'packs') {
      getSearch.length
        ? setDrinksProduct(getSearch)
        : setDrinksProduct(getAllPacks);
    } else {
      getSearch.length ? setDrinksProduct(getSearch) : setDrinksProduct(drinks);
    }
    if (next) {
      setCreatePackData(getAllalcoholFree);
    } else {
      setCreatePackData(drinks);
    }
  }, [getSearch, getAllPacks, next]);

  const handleChangeSearchBar = (e) => {
    e.preventDefault();
    setinputSearchBar(e.target.value);
  };

  useEffect(() => {
    getStatus && getStatus === 200 ? setStatus(200) : setStatus(false);
    getStatus && setIsOpenStatusPopup(true);
  }, [getStatus]);
  return (
    <>
      {isCreate && (
        <CreatePack
          setNext={setNext}
          newPack={newPack}
          setNewPack={setNewPack}
          setIsCreate={setIsCreate}
          id={id}
          setSelected={setSelected}
        />
      )}
      <div className="popup-select-drink-overlay">
        <div className="popup-select-drink">
          <h1>Añadir {selected}</h1>

          <SearchBar
            handleChange={handleChangeSearchBar}
            input={inputSearchBar}
          />
          <div className="container-select-cards">
            {selected === 'packs' &&
              createPackData
                .filter((product) =>
                  product.nameDrink
                    .toLowerCase()
                    .includes(inputSearchBar.toLowerCase())
                )
                ?.map((product, index) => (
                  <CreatePackCard
                    key={product._id}
                    name={product.nameDrink}
                    price={product.finalPriceDrink}
                    oldPrice={product.priceDrink}
                    image={product.imageDrink}
                    setNewPack={setNewPack}
                    newPack={newPack}
                    recipe={product.recipe}
                    totalMinOrder={product.totalMinOrder}
                  />
                ))}
          </div>
          <div className="add-drink-buttons">
            {newPack.imageDrink.length ? (
              !next ? (
                <button className="save" onClick={() => setNext(true)}>
                  Siguiente
                </button>
              ) : (
                <button className="save" onClick={() => setIsCreate(true)}>
                  Crear Pack
                </button>
              )
            ) : null}
            <button className="cancel" onClick={() => setSelected(false)}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
