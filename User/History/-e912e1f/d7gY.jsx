import React, { Fragment, useRef } from "react";
import "./form.scss";
import Input from "../../../components/Input/Input";
import { useState } from "react";
import addImage from "../../../assets/add-image.svg";
import Loader from "../../../components/Loader/Loader";
import axios from "axios";
import AddImage from "../../../components/AddImage/AddImage";
import subCategory from "./category.json";
import TextArea from "../../../components/TextArea/TextArea";

const AddProduct = ({ setOption, getAllDrinks, enviroment, selectedParty }) => {
  const initialStateDrink = {
    imageDrink: "",
    typeDrink: "",
    nameDrink: "",
    category: "",
    subCategory: "",
    // drinkMl: 300,
  };

  const [inputDrink, setInputDrink] = useState(initialStateDrink);
  const [image, setImage] = useState(addImage);
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const onCancel = () => {
    setOption(false);
  };
  const handleChange = (e) => {
    e === "Si"
      ? setInputDrink({ ...inputDrink, typeDrink: "drink" })
      : e === "No"
      ? setInputDrink({ ...inputDrink, typeDrink: "alcoholFree" })
      : setInputDrink({ ...inputDrink, [e.target.name]: e.target.value });
  };

  const handleSelect = (type, option) => {
    setInputDrink({ ...inputDrink, [type]: option });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!inputDrink.nameDrink) {
      setError("Falta el nombre del Trago");
    } else if (!inputDrink.typeDrink) {
      setError("Indica si contiene alcohol");
    } else if (image === addImage) {
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
        formData.append("drinkMl", 350);

        let response;
        if (selectedParty !== "All") {
          formData.append("idParty", selectedParty._id);
          response = await axios.post(
            `${enviroment}/organizer/drink/add`,
            formData
          );
        } else {
          response = await axios({
            method: "post",
            url: `${enviroment}/shooza/drink/add`,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          });
        }

        response.status === 200 &&
          setDone("¡Listo! Se agregó correctamente al Menú");
        getAllDrinks();
      } catch (error) {
        console.log(error);
        setError("Ocurrió un error al añadir al Menú");
      }
    }
    setLoading(false);
  };

  const category = ["tragos", "botellas", "comida"];
  console.log(
    subCategory.filter(
      (e) => e === inputDrink.subCategory.toLocaleLowerCase()
    )[0]
  );
  return (
    <div className="form-card">
      <h3 className="form-card__title">Nuevo trago</h3>
      <form className="form-card__form-container" onSubmit={handleSubmit}>
        <div className="form-card__row">
          <div className="form-card__inputs-wrapper">
            <Input
              label={"Nombre del trago:"}
              inputPops={{
                type: "text",
                placeholder: "Gin tonic",
                name: "nameDrink",
                value: inputDrink.nameDrink,
              }}
              onChange={handleChange}
            />
            {/* <Select
              placeholder="Selecciona una categoría"
              label="¿Contiene alcohol?"
              options={["Si", "No"]}
              onChange={handleChange}
              icon
              gradient
            /> */}
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
              {inputDrink.category && (
                <ul className="form-card__input-select-options-container">
                  {category
                    ?.filter((filterCategoty) =>
                      filterCategoty.toLowerCase().includes(inputDrink.category)
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
                inputDrink.subCategory !==
                  subCategory[inputDrink.subCategory] && (
                  <ul className="form-card__input-select-options-container">
                    {subCategory
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
            {inputDrink.category === "Comida" && (
              <TextArea label="Descripcion" />
            )}
          </div>
          <div className="form-card__right-container">
            <AddImage setState={setImage} />
          </div>
        </div>
        {error && <p className="form-card__error">{error}</p>}
        {done && <p className="form-card__done">{done}</p>}
        <div className="form-card__buttons-wrapper">
          <button className="btn-primary btn-primary--s" type="submit">
            {loading ? <Loader /> : "Guardar"}
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

export default AddProduct;
