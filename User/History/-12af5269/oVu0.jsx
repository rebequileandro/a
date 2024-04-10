import React from "react";
import "./form_card.scss";
import Input from "../../../components/Input/Input";
import { useState } from "react";
import Checkbox from "../../../components/Checkbox/Checkbox";
const FormCard = ({ option, setOption }) => {
  const [inputsDrinksLength, setInputsDrinksLength] = useState([1]);
  const initialStateDrink = {
    imageDrink: "",
    typeDrink: "drink",
    nameDrink: "",
    recipe: inputsDrinksLength?.map(() => {
      return {
        category: "",
        botella: "",
        cantidad: 50,
      };
    }),
  };
  const initialStateBottle = {};
  const [inputDrink, setInputDrink] = useState(initialStateDrink);
  const [inputBottle, setInputBottle] = useState(initialStateBottle);
  const [menu, setMenu] = useState(false);
  const [inventory, setInventory] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onCancel = () => {
    setOption(false);
  };
  const inputLength = (action) => {
    if (action === "+") {
      setInputsDrinksLength([
        ...inputsDrinksLength,
        inputsDrinksLength.length + 1,
      ]);
    } else {
      let less = [...inputsDrinksLength];
      less.pop();
      // console.log(less);
      setInputsDrinksLength(less);
    }
  };
  return (
    <div className="form-card">
      {option === "bottle" ? (
        <h3 className="form-card__title">Nueva botella</h3>
      ) : (
        <h3 className="form-card__title">Nuevo trago</h3>
      )}
      <form className="form-card__form-container" onSubmit={handleSubmit}>
        <div className="form-card__row">
          <div
            className={`form-card__inputs-wrapper ${
              option !== "bottle" && "form-card__inputs-wrapper--drink"
            }`}
          >
            <Input
              label={
                option === "bottle"
                  ? "Nombre de la botella:"
                  : "Nombre del trago:"
              }
            />
            {(option !== "bottle" || menu) && (
              <Input label="Link de la imagen" />
            )}
            <Select
              placeholder="Elige una categoría"
              label="Bebidas"
              onChange={setInput}
              options={["bottle", "drink", "alcoholFree"]}
              icon
            />
            {option !== "bottle" && (
              <>
                {inputsDrinksLength?.map((e) => (
                  <Input key={e} label={`Bebida ${e}:`} />
                ))}
                <div className="form-card__input-buttons-wrapper">
                  <button
                    className="btn-secondary btn-secondary--s"
                    onClick={() => inputLength("+")}
                  >
                    +
                  </button>
                  <button
                    className="btn-secondary btn-secondary--s"
                    onClick={inputLength}
                  >
                    -
                  </button>
                </div>
              </>
            )}
          </div>
          {option === "bottle" && (
            <div className="form-card__checkbox-container">
              <Checkbox
                label="Menu"
                onChange={(e) => setMenu(e.target.checked)}
              />
              <Checkbox
                label="Inventario"
                onChange={(e) => setInventory(e.target.checked)}
              />
            </div>
          )}
        </div>
        <div className="form-card__buttons-wrapper">
          <button className="btn-primary btn-primary--s" type="submit">
            Guardar
          </button>
          <button className="btn-secondary btn-secondary--s" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormCard;
