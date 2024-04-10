import React, { useEffect } from "react";
import "./form.scss";
import Input from "../../../components/Input/Input";
import { useState } from "react";
import Select from "../../../components/Select/Select";
import Loader from "../../../components/Loader/Loader";
import AddImage from "../../../components/AddImage/AddImage";
import axios from "axios";
import trashIcon from "../../../assets/icon_trash.svg";
const FormEdit = ({ setOption, data }) => {
  const [inputDrink, setInputDrink] = useState({});
  const [image, setImage] = useState(null);
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInputDrink({ ...inputDrink, [e.target.name]: e.target.value });
  };

  const handleChangeRecipe = (e, i) => {
    const recipeCopy = [...inputDrink.recipe];
    recipeCopy[i].category = e.target.value;
    setInputDrink({ ...inputDrink, recipe: recipeCopy });
  };

  const onCancel = () => {
    setOption(false);
    setError(false);
    setDone(false);
  };
  const inputLength = (action) => {
    if (action === "+") {
      setInputDrink({
        ...inputDrink,
        recipe: [
          ...inputDrink.recipe,
          {
            category: "",
            botella: "",
            cantidad: "",
          },
        ],
      });
    } else if (action === "-" && inputDrink.recipe.length > 1) {
      let inputDrinkCopy = { ...inputDrink };
      inputDrinkCopy.recipe.pop();
      setInputDrink(inputDrinkCopy);
    }
  };
  useEffect(() => {
    setInputDrink({
      imageDrink: data.imageDrink,
      typeDrink: data.typeDrink,
      nameDrink: data.nameDrink,
      recipe:
        typeof data.recipe === "string" ? JSON.parse(data.recipe) : data.recipe,
    });
    setImage(data.imageDrink);
    setError(false);
    setDone(false);
  }, [data]);
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!inputDrink.nameDrink) {
      setError("Falta el nombre del Trago");
    } else if (!inputDrink.typeDrink) {
      setError("Indica si contiene alcohol");
    } else if (!image) {
      setError("Selecciona una imagen");
    } else {
      try {
        const formData = new FormData();
        data.imageDrink !== inputDrink.imageDrink &&
          formData.append("file", image);
        formData.append("typeDrink", inputDrink.typeDrink.toLowerCase());
        formData.append("nameDrink", inputDrink.nameDrink.toLowerCase());
        formData.append("activeDrink", false);
        formData.append("totalMinOrder", 2);
        formData.append("recipe", JSON.stringify(inputDrink.recipe));
        formData.append("drinkMl", 350);

        const response = await axios({
          method: "put",
          url: `${process.env.REACT_APP_API}/shooza/drink/${data._id}`,
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log(response);
        response.status === 200 &&
          setDone("¡Listo! Se modificó correctamente la bebida");
      } catch (error) {
        console.log(error);
        setError("Ocurrió un error al modificar la bebida");
      }
    }
    setLoading(false);
  };

  return (
    <div className="form-card">
      <h3 className="form-card__title">Editar</h3>
      <form className="form-card__form-container" onSubmit={handleSubmit}>
        <div className="form-card__row">
          <div className="form-card__inputs-wrapper">
            <Input
              label={"Nombre de la bebida:"}
              inputPops={{
                type: "text",
                placeholder: "Gin tonic",
                name: "nameDrink",
                value: inputDrink.nameDrink,
              }}
              onChange={handleChange}
            />
            <Select
              placeholder="Elige una opción"
              label="Tipo de bebida"
              initialState={inputDrink.typeDrink}
              options={["drink", "bottle", "alcoholFree"]}
              onChange={(value) =>
                setInputDrink({ ...inputDrink, typeDrink: value })
              }
              icon
              gradient
            />
            <>
              {inputDrink.recipe?.map((e, i) => (
                <Input
                  key={i}
                  label={`Bebida ${i + 1}:`}
                  inputPops={{
                    type: "text",
                    value: inputDrink.recipe[i].category,
                  }}
                  onChange={(e) => handleChangeRecipe(e, i)}
                />
              ))}
              {inputDrink.typeDrink !== "bottle" && (
                <div className="form-card__input-buttons-wrapper">
                  <button
                    type="button"
                    className="btn-secondary btn-secondary--s"
                    onClick={() => inputLength("+")}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="btn-secondary btn-secondary--s"
                    onClick={() => inputLength("-")}
                  >
                    -
                  </button>
                </div>
              )}
            </>
          </div>
          <div className="form-card__right-container">
            <AddImage setState={setImage} img={inputDrink.imageDrink} />
            <button
              className="form-card__trash-button"
              type="button"
              onClick={() => handleDelete()}
            >
              <img src={trashIcon} alt="eliminar" />
            </button>
          </div>
        </div>
        {error && <p className="form-card__error">{error}</p>}
        {done && <p className="form-card__done">{done}</p>}
        <div className="form-card__buttons-wrapper">
          <button className="btn-primary btn-primary--s" type="submit">
            {loading ? <Loader /> : "Guardar cambios"}
          </button>
          <button
            className="btn-secondary btn-secondary--s"
            type="reset"
            onClick={onCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEdit;
