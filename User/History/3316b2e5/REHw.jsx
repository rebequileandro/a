import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './inventory.scss';
import Item from './Item/Item';
import edit from '../../../assets/icons/icon_edit.svg';
import plus from '../../../assets/icons/plus_icon.svg';
import { useParams, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import loadingAnimation from '../../../assets/loading.json';
import {
  clearInventory,
  getInventory,
  updateInventoryBar,
  updateInventoryGeneral
} from '../../../redux/slices/organizer/organizer';
import NewBottle from './popupNewBottle/NewBottle';
import { Header } from '../../../components/global/Header/Header';
import { TabbarOrganizer } from '../../../components/owner-manager/Tabbar/TabbarOrganizer';
import routes from '../../../models/routes.models';
import Select from '../../../components/global/Select/Select/Select';
import SearchBar from '../../../components/global/SearchBar/SearchBar';
import No_Inventory from '../../../components/owner-manager/No_Inventory/No_Inventory';
import { Loading } from '../../../components/global/Loader/Loader';
const Inventory = () => {
  const currentUser = useSelector((state) => state.global.user);
  const getBars = useSelector((state) => state.organizer.organizer.barras);
  const inventory = useSelector((state) => state.organizer.organizer.inventory);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('general');
  const [isNewBottle, setIsnewBottle] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [editDrink, setEditDrink] = useState([]);
  const [editDrinkBar, setEditDrinkBar] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const SelectOptions = () => {
    let options = ['general'];
    getBars?.forEach((e) => options.push(e.barra));
    return options;
  };
  useEffect(() => {
    dispatch(getInventory({ idParty: id })).then(() => setIsLoadingPage(false));
  }, [selected]);
  const handleSubmit = () => {
    setIsLoading(true);
    if (selected !== 'general') {
      if (editDrinkBar.length) {
        editDrinkBar.forEach((e) => {
          dispatch(
            updateInventoryBar(e._id, { ...e.inventorySquare, idParty: id })
          ).then(() => {
            setIsLoading(false);
            setIsEdit(false);
          });
        });
      } else {
        setIsLoading(false);
        setIsEdit(false);
      }
    } else {
      if (editDrink.length) {
        editDrink?.forEach((e) => {
          dispatch(
            updateInventoryGeneral(
              e._id,
              { idParty: id },
              { inventoryGeneral: e.value }
            )
          ).then(() => {
            setIsLoading(false);
            setIsEdit(false);
          });
        });
      } else {
        setIsLoading(false);
        setIsEdit(false);
      }
    }
  };
  const back = () => {
    console.log('s');
    dispatch(clearInventory());
    navigate(`${routes.owner.club}/${id}`);
  };
  if (isLoadingPage) {
    return <Loading />;
  } else {
    return (
      <>
        <NewBottle setIsnewBottle={setIsnewBottle} isNewBottle={isNewBottle} />
        <div className="inventory-container">
          <Header backbutton={() => back()} title={'Inventario'} />
          {!inventory.length ? (
            <No_Inventory setIsnewBottle={setIsnewBottle} />
          ) : (
            <>
              <div className="inventory-header">
                <div className="inventory-header-container">
                  <div className="inventory-select-container">
                    <Select
                      disable={isEdit ? true : false}
                      initialState="general"
                      onChange={setSelected}
                      options={SelectOptions()}
                      icon
                    />
                  </div>
                  <div className="search">
                    <SearchBar
                      input={inputSearch}
                      handleChange={(e) => setInputSearch(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="items-container">
                {inventory
                  ?.filter((item) =>
                    item.category
                      .toLowerCase()
                      .includes(inputSearch.toLowerCase())
                  )
                  .map((e, i) => (
                    <Item
                      key={i}
                      isEdit={isEdit}
                      nameCategory={e.category}
                      content={e.brand}
                      setEditDrink={setEditDrink}
                      editDrink={editDrink}
                      bar={selected}
                      editDrinkBar={editDrinkBar}
                      setEditDrinkBar={setEditDrinkBar}
                    />
                  ))}
                {isEdit && (
                  <div
                    className="add-bottle"
                    onClick={() => setIsnewBottle(true)}
                  >
                    <span>Agregar botella</span>
                    <img src={plus} alt="mas" />
                  </div>
                )}
              </div>
              {isEdit && (
                <div className="save-cancel">
                  <button
                    className="btn-primary--l save"
                    onClick={() => handleSubmit()}
                  >
                    {isLoading ? (
                      <Lottie
                        animationData={loadingAnimation}
                        className="loading-animation"
                        loop={true}
                      />
                    ) : (
                      'Guardar cambios'
                    )}
                  </button>
                  <button
                    className="cancel"
                    onClick={() => {
                      setIsEdit(false);
                      setIsLoading(false);
                      setEditDrinkBar([]);
                      setEditDrink([]);
                    }}
                  >
                    Cancelar
                  </button>
                </div>
              )}
              {!isEdit && (
                <button className="edit" onClick={() => setIsEdit(true)}>
                  <img src={edit} alt="editar" />
                </button>
              )}
              {currentUser.rol === 'unitManager' && <TabbarOrganizer />}
            </>
          )}
        </div>
      </>
    );
  }
};

export default Inventory;
