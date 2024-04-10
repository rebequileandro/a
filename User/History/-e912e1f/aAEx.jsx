import React, { Fragment, useEffect, useRef } from "react";
import "./form.scss";
import Input from "../../../components/Input/Input";
import { useState } from "react";
import addImage from "../../../assets/add-image.svg";
import Loader from "../../../components/Loader/Loader";
import axios from "axios";
import AddImage from "../../../components/AddImage/AddImage";
import TextArea from "../../../components/TextArea/TextArea";

const AddProduct = ({ setOption, getAllDrinks, enviroment, selectedParty }) => {
  const initialStateDrink = {
    imageDrink: "",
    typeDrink: "",
    nameDrink: "",
    category: "",
    subCategory: "",
    description: "",
    // drinkMl: 300,
  };

  const [inputDrink, setInputDrink] = useState(initialStateDrink);
  const [image, setImage] = useState(addImage);
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allCategory, setAllCategory] = useState([]);
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
        formData.append("category", inputDrink.category.toLowerCase());
        formData.append("subCategory", inputDrink.subCategory.toLowerCase());
        inputDrink.category === "comida" &&
          formData.append("description", inputDrink.description);
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
      <h3 className="form-card__title">Nuevo Producto</h3>
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
                  name: "description",
                }}
              />
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
