import React from "react";
import "./form_card.scss";
import Input from "../../../components/Input/Input";
import { useState } from "react";
const FormCard = ({ option, setOption }) => {
  const initialStateDrink = {
    imageDrink: "",
    typeDrink: "drink",
    nameDrink: "",
    recipe: [
      {
        category: "",
        botella: " ",
        cantidad: 50,
      },
    ],
  };
  const initialStateBottle = {};
  const [inputDrink, setInputDrink] = useState(initialStateDrink);
  const [inputBottle, setInputBottle] = useState(initialStateBottle);
  const [inputsDrinksLength, setInputsDrinksLength] = useState([1]);
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
        <div className="form-card__inputs-wrapper">
          <Input
            label={
              option === "bottle"
                ? "Nombre de la botella:"
                : "Nombre del trago:"
            }
          />
          {option !== "bottle" &&
            inputsDrinksLength?.map((e) => (
              <Input key={e} label={`Bebida ${e}:`} />
            ))}
          <div>
            <button onClick={() => inputLength("+")}>+</button>
            <button onClick={inputLength}>-</button>
          </div>
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
