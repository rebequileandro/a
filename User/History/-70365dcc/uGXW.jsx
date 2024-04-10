import React, { Fragment, useEffect } from "react";
import "./form.scss";
import Input from "../../../components/Input/Input";
import { useState } from "react";
import Select from "../../../components/Select/Select";
import Loader from "../../../components/Loader/Loader";
import AddImage from "../../../components/AddImage/AddImage";
import axios from "axios";
import trashIcon from "../../../assets/icon_trash.svg";
import category from "./category.json";

const EditProduct = ({
  setOption,
  data,
  getAllDrinks,
  enviroment,
  selectedParty,
}) => {
  const [inputDrink, setInputDrink] = useState({});
  const [image, setImage] = useState(null);
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allCategory, setAllCategory] = useState([]);

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
        formData.append("file", image);
        formData.append("typeDrink", inputDrink.typeDrink.toLowerCase());
        formData.append("nameDrink", inputDrink.nameDrink.toLowerCase());
        formData.append("activeDrink", false);
        formData.append("totalMinOrder", 2);
        formData.append("recipe", JSON.stringify(inputDrink.recipe));
        let response;
        console.log("DATA FORM", formData);
        if (selectedParty !== "All") {
          formData.append("idParty", selectedParty._id);
          response = await axios({
            method: "put",
            url: `${enviroment}/organizer/drink/${data._id}`,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          });
        } else {
          response = await axios({
            method: "put",
            url: `${enviroment}/shooza/drink/${data._id}`,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          });
        }

        response.status === 200 &&
          setDone("¡Listo! Se modificó correctamente la bebida");
        getAllDrinks();
      } catch (error) {
        console.log(error);
        setError("Ocurrió un error al modificar la bebida");
      }
    }
    setLoading(false);
  };
  const handleDelete = async () => {
    // eslint-disable-next-line no-restricted-globals
    const res = confirm(
      `¿Quieres eliminar el siguiente trago: ${inputDrink.nameDrink}?`
    );
    if (res) {
      if (selectedParty !== "All") {
        try {
          const response = await axios.delete(
            `${enviroment}/organizer/drink/delete/${data._id}`
          );
          if (response.status === 200) {
            setDone("¡Listo! Se eliminó correctamente el producto");
            getAllDrinks();
            setInputDrink({
              nameDrink: "",
              recipe: [
                {
                  category: "",
                  botella: "",
                  cantidad: "",
                },
              ],
            });
          }
        } catch (error) {
          console.log(error);
          setError("Ocurrió un error al eliminar la bebida");
        }
      } else {
        try {
          const response = await axios.delete(
            `${enviroment}/shooza/drink/${data._id}`
          );
          if (response.status === 200) {
            setDone("¡Listo! Se eliminó correctamente el producto");
            getAllDrinks();
            setInputDrink({
              nameDrink: "",
              recipe: [
                {
                  category: "",
                  botella: "",
                  cantidad: "",
                },
              ],
            });
          }
        } catch (error) {
          console.log(error);
          setError("Ocurrió un error al eliminar la bebida");
        }
      }
    }
  };
  const getAllCategory = async () => {
    try {
      const response = await axios.get(`${enviroment}/shooza/category/all`);
      setAllCategory(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);
  return (
    <div className="form-card">
      <h3 className="form-card__title">Editar</h3>
      <form className="form-card__form-container" onSubmit={handleSubmit}>
        <div className="form-card__row">
          <div className="form-card__inputs-wrapper">
            <Input
              label={"Nombre:"}
              inputPops={{
                type: "text",
                placeholder: "Gin tonic",
                name: "nameDrink",
                value: inputDrink.nameDrink,
              }}
              onChange={handleChange}
            />
            <div className="form-card__input-select-wrapper">
              <Input
                label={"Categoría:"}
                inputPops={{
                  type: "text",
                  placeholder: "Tragos, Botellas, Comida...",
                  name: "category",
                  value: inputDrink.category,
                }}
                onChange={handleChange}
              />
              {inputDrink.category &&
                !Object.keys(allCategory)?.filter(
                  (e) => e === inputDrink.category.toLocaleLowerCase()
                )[0] && (
                  <ul className="form-card__input-select-options-container">
                    {Object.keys(allCategory)
                      ?.filter((filterCategoty) =>
                        filterCategoty
                          .toLowerCase()
                          .includes(inputDrink.category)
                      )
                      ?.map((element) => (
                        <li
                          key={element}
                          className="form-card__category-list"
                          onClick={() => handleSelect("category", element)}
                        >
                          {element}
                        </li>
                      ))}
                  </ul>
                )}
            </div>
            <div className="form-card__input-select-wrapper">
              <Input
                label={"Sub-categoría:"}
                inputPops={{
                  type: "text",
                  placeholder: "Tragos, Botellas, Comida...",
                  name: "subCategory",
                  value: inputDrink.subCategory,
                }}
                onChange={handleChange}
              />
              {inputDrink.subCategory &&
                !allCategory[inputDrink.category]?.filter(
                  (e) => e === inputDrink.subCategory.toLocaleLowerCase()
                )[0] && (
                  <ul className="form-card__input-select-options-container">
                    {allCategory[inputDrink.category]
                      ?.filter((filterCategoty) =>
                        filterCategoty
                          .toLowerCase()
                          .includes(inputDrink.subCategory)
                      )
                      ?.map((element) => (
                        <li
                          key={element}
                          className="form-card__category-list"
                          onClick={() => handleSelect("subCategory", element)}
                        >
                          {element}
                        </li>
                      ))}
                  </ul>
                )}
            </div>
            {inputDrink.category === "comida" && (
              <TextArea
                label="Descripcion:"
                inputProps={{
                  value: inputDrink.description,
                  name: "description",
                  onChange: handleChange,
                }}
              />
            )}
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

export default EditProduct;
