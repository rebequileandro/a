import './EditProduct.scss';

import axios from 'axios';
import Lottie from 'lottie-react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import React, { Fragment, useState } from 'react';

import { catchStatus } from '../../../../redux/slices/organizer/organizer';
import { getDrinks } from '../../../../redux/slices/organizer/organizer.js';

import { StatusPopUp } from '../../../../components/global/StatusPopUp/StatusPopUp';
import searchAnimateIcon from '../../../../assets/animations/search.json';
// import { ToggleSwitch } from '../../../../components/owner-manager/ToggleSwitch/ToggleSwitch';

const { REACT_APP_API } = process.env;

export const EditProduct = ({
  idDrink,
  image,
  name,
  price,
  status,
  setIsEdit,
  discount,
  type,
  timeOrder,
  recipe,
  glassMl
}) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  //---------UseSelector states that's not used------------
  // const getAllDrinks = useSelector((state) => state.organizer.organizer.drinks);
  // const getAllBottles = useSelector(
  //   (state) => state.organizer.organizer.bottles
  // );
  // const getAllPacks = useSelector((state) => state.organizer.organizer.packs);
  // const getAllalcoholFree = useSelector(
  //   (state) => state.organizer.organizer.alcoholFree
  // );
  // const getParty = useSelector((state) => state.organizer.organizer.details);
  // const getStatus = useSelector((state) => state.organizer.organizer.status);

  const [focus, setFocus] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [indexCheck, setIndexCheck] = useState();
  const [statusPopup, setStatusPopup] = useState(false);
  const [productOptions, setProductOptions] = useState([]);
  // --------UseState variables and seters that is not used---------
  // const [active, setActive] = useState(false);
  // const [alreadySelected, setAlreadySelected] = useState([]);
  // const [checked, setChecked] = useState(JSON.parse(status));

  const [displayInput, setDisplayInput] = useState({
    recipe: recipe.map((product) => {
      return {
        category: product.category,
        botella: product.botella,
        cantidad: product.cantidad,
        eraseIcon: false
      };
    })
  });
  const [input, setInput] = useState({
    price: price,
    discount: discount,
    timeOrder: timeOrder,
    drinkMl: glassMl,
    recipe: recipe.map((product) => {
      return {
        category: product.category,
        botella: product.botella,
        cantidad: product.cantidad
      };
    })
  });

  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const eraseFunction = (index) => {
    let updatedStateDisplay = { ...displayInput };
    updatedStateDisplay.recipe[index].botella = '';
    let updatedState = { ...input };
    updatedState.recipe[index].botella = '';
    setInput(updatedState);
    setDisplayInput(updatedStateDisplay);
  };

  const handleChangeRecipeMl = (e, index) => {
    let updatedState = { ...input };
    if (e.target.value > 0) {
      updatedState.recipe[index].cantidad = parseInt(`${e.target.value}`);
      parseInt(updatedState.recipe[index].cantidad);
      setInput(updatedState);
    } else if (!e.target.value) {
      updatedState.recipe[index].cantidad = 0;
      setInput(updatedState);
    } else {
      updatedState.recipe[index].cantidad = 1;
      setInput(updatedState);
    }
  };

  const handleDropdownSelection = (index, brand) => {
    let updatedStateDisplay = { ...displayInput };
    updatedStateDisplay.recipe[index].botella = brand;
    let updatedState = { ...input };
    updatedState.recipe[index].botella = brand;
    // console.log(index);
    setIndexCheck('');
    setInput(updatedState);
    setDisplayInput(updatedStateDisplay);
    setProductOptions([]);
  };

  const handleChangeRecipeProduct = (index) => async (e) => {
    setIndexCheck(index);
    let updatedState = { ...displayInput };
    updatedState.recipe[index].botella = e.target.value;
    setDisplayInput(updatedState);
    const response = await axios.post(
      `${REACT_APP_API}/organizer/inventory/category/bottle`,
      {
        idParty: id,
        category: updatedState.recipe[index].category
      }
    );
    let brands = response.data.data
      .filter((e) => e.active === 'true')
      .map((e) => e.brand);
    setProductOptions(brands);
    // console.log('brands', brands);
    setFocus(updatedState.recipe[index].category);
  };

  const handlePackDelete = async () => {
    // console.log(type);
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
  console.log(idDrink);
  let discountShow = Math.round((input.discount / 100) * input.price);
  let finalPriceShow = input.price - discountShow;

  //------------- AQUI SE LE PASA EL INPUT PARA EL CAMBIO Y EL POST -----------------
  const handleSubmit = async () => {
    try {
      let discount = Math.round((input.discount / 100) * input.price);
      let finalPrice = input.price - discount;

      const response = await axios.put(
        `${REACT_APP_API}/organizer/drink/${idDrink}`,
        {
          priceDrink: input.price,
          discountDrink: input.discount,
          finalPriceDrink: finalPrice,
          recipe: input.recipe,
          totalMinOrder: input.timeOrder,
          drinkMl: input.drinkMl
        }
      );
      setStatusPopup(response.status);
      setIsOpen(true);
      dispatch(getDrinks(id));
    } catch (err) {
      console.log(err);
      setStatusPopup(err.status);
    }
  };

  //metodo que se envía en el redirect del <statusPopup />
  const cleanCatchStatus = () => {
    dispatch(catchStatus(false));
    setIsEdit(false);
  };

  //almacena la altura del primer elemento div del documento HTML.
  const screenSize = document.getElementsByTagName('div')[0].clientHeight;

  //--- function not used -----
  // const handleChangeSwitch = (e) => {
  //   setChecked(e.target.checked);
  // };
  //------------------------------------------------------------------------------------------------

  return (
    <div
      className="edit-product-overlay"
      style={{ minHeight: `${screenSize}px` }}
    >
      {/* Este div contiene dos secciones dependiendo del boolean isOpen */}
      <div className="edit-popup-size">
        {!isOpen ? (
          <div className="edit-popup">
            <div className="product-container">
              <div className="right-container">
                <h2>{name}</h2>
                <div className="form">
                  <div className="input-container">
                    <label>Precio</label>
                    <div className="input-wrapper">
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
                  <div className="input-container">
                    <label htmlFor="">Precio final:</label>
                    <p className="input-container__price">${finalPriceShow}</p>
                  </div>
                </div>

                {recipe.length ? (
                  <>
                    <h2 className="recipe-title">Receta</h2>
                    {/* Arriba de las recetas del trago (recipe.map()) esta el input encargado del totalMinOrder */}
                    <div className="dropdown-section-column">
                      {/* CAPACIDAD DEL VASO  */}
                      <div className="dropdown-section-column__capacity">
                        <label className="product-label">
                          Capacidad del vaso en ml:
                        </label>

                        <div className="input-wrapper  input-wrapper--width-capacity">
                          <input
                            type="text"
                            placeholder="ml"
                            value={input.drinkMl}
                            name="drinkMl"
                            onChange={(e) => handleOnChange(e)}
                          />
                          {input.drinkMl && (
                            <span className="input-wrapper__text-absolute">
                              ml
                            </span>
                          )}
                        </div>
                      </div>
                      {/* TIEMPO DE ENTREGA DEL TRAGO  */}
                      <div className="dropdown-section-column__minutes">
                        <label className="product-label">
                          Tiempo de preparación:
                        </label>
                        <div className="input-wrapper  input-wrapper--width-time">
                          <input
                            type="text"
                            placeholder="min"
                            name="timeOrder"
                            value={input.timeOrder}
                            onChange={(e) => handleOnChange(e)}
                          />
                          {input.timeOrder && (
                            <span className="input-wrapper__text-absolute">
                              min
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Aqui comienzan las recetas  */}
                    {recipe.map((product, index) => {
                      return (
                        <div className="dropdown-section" key={index}>
                          <div className="dropdown-section__product">
                            <label className="product-label">
                              {input.recipe[index].category}:
                            </label>

                            <div
                              style={
                                displayInput.recipe[index].category === focus &&
                                index === indexCheck
                                  ? { zIndex: '3' }
                                  : null
                              }
                              className="input-wrapper  input-wrapper--width"
                              key={index}
                            >
                              <input
                                disabled={input.recipe[index].botella.length}
                                type="text"
                                placeholder="Buscar inventario"
                                name={Object.keys(displayInput.recipe)[1]}
                                value={displayInput.recipe[index].botella}
                                onChange={handleChangeRecipeProduct(index)}
                              />

                              {input.recipe[index].botella.length ? (
                                <Lottie
                                  animationData={searchAnimateIcon}
                                  className="input-wrapper__eraseIcon"
                                  loop={false}
                                  initialSegment={[9, 32]}
                                  onClick={() => eraseFunction(index)}
                                />
                              ) : null}
                            </div>
                            <label className="product-bottle">
                              {input.recipe[index].botella}
                            </label>
                          </div>
                          <div className="dropdown-section__ml">
                            <label className="product-label-ml">ml:</label>
                            <div className="input-wrapper  input-wrapper--width-ml">
                              <input
                                type="number"
                                placeholder="ml."
                                name={Object.keys(displayInput.recipe)[2]}
                                value={input.recipe[index].cantidad}
                                onChange={(e) => handleChangeRecipeMl(e, index)}
                              />
                            </div>
                          </div>
                          {productOptions.length &&
                          displayInput.recipe[index].category === focus &&
                          index === indexCheck ? (
                            <div className="dropdown-options-recipe">
                              {productOptions &&
                              displayInput.recipe[index].category === focus &&
                              index === index
                                ? productOptions
                                    .filter((filter) =>
                                      filter
                                        .toLowerCase()
                                        .includes(
                                          displayInput.recipe[
                                            index
                                          ].botella.toLowerCase()
                                        )
                                    )
                                    .map((brand) => {
                                      return (
                                        <Fragment key={brand}>
                                          <div
                                            className="dropdown-options-recipe__option"
                                            onClick={() =>
                                              handleDropdownSelection(
                                                index,
                                                brand
                                              )
                                            }
                                          >
                                            <p>{brand}</p>
                                          </div>
                                          <div className="pink-gradient-line-custom">
                                            &nbsp;
                                          </div>
                                        </Fragment>
                                      );
                                    })
                                : null}
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </div>
            </div>
            <div
              className={`buttons-container ${
                type === 'packs' && 'save-packs'
              }`}
            >
              <button className="save" onClick={(e) => handleSubmit(e)}>
                Guardar
              </button>
              <button className="close" onClick={() => setIsEdit(false)}>
                Cancelar
              </button>
              {type === 'packs' && (
                <button className="remove" onClick={(e) => handlePackDelete(e)}>
                  Eliminar del menu
                </button>
              )}
            </div>
          </div>
        ) : (
          // Aqui comienza la segunda seccion, si isOpen es true renderiza el popup
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
