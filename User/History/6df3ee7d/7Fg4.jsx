import React from "react";
import "./form.scss";
import Input from "../../../components/Input/Input";
import { useState } from "react";
import Checkbox from "../../../components/Checkbox/Checkbox";
import Select from "../../../components/Select/Select";
import axios from "axios";
import { useRef } from "react";
import addImage from "../../../assets/add-image.svg";
import Loader from "../../../components/Loader/Loader";
import { number, object, string } from "yup";
const FormBottle = ({ setOption }) => {
  const initialStateBottle = {
    imageDrink: "",
    typeDrink: "",
    nameDrink: "",
    category: "",
    mlByBottle: "",
  };
  const schemaInventory = object().shape({
    nameDrink: string().required("Falta el nombre de la botella"),
    category: string().required("Falta Categoría"),
    mlByBottle: number().required("Falta Mililitros"),
  });
  const [inputBottle, setInputBottle] = useState(initialStateBottle);
  const [menu, setMenu] = useState(false);
  const [inventory, setInventory] = useState(false);
  const [image, setImage] = useState(addImage);
  const [error, setError] = useState(false);
  const [doneMenu, setDonMenu] = useState(false);
  const [doneInventory, setDonInventory] = useState(false);
  const [loading, setLoading] = useState(false);

  const fileRef = useRef(null);

  const handleChange = (e) => {
    e === "Si"
      ? setInputBottle({ ...inputBottle, typeDrink: "bottle" })
      : e === "No"
      ? setInputBottle({ ...inputBottle, typeDrink: "alcoholFree" })
      : setInputBottle({ ...inputBottle, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    if (!menu && !inventory) {
      setError("Selecciona MENÚ o INVENTARIO o ambas opciones");
    }
    if (inventory) {
      schemaInventory
        .isValid({
          nameDrink: inputBottle.nameDrink,
          category: inputBottle.category,
          mlByBottle: inputBottle.mlByBottle,
        })
        .catch((error) => {
          console.log(error);
        });

      // if (!inputBottle.nameDrink) {
      //   setError("Falta el nombre de la botella");
      // } else if (!inputBottle.category) {
      //   setError("Falta Categoría");
      // } else if (!inputBottle.mlByBottle) {
      //   setError("Falta Mililitros");
      // } else {
      //   try {
      //     const response = await axios.post(
      //       `${process.env.REACT_APP_API}/shooza/bottle/add`,
      //       {
      //         brand: inputBottle.nameDrink.toLowerCase(),
      //         category: inputBottle.category.toLowerCase(),
      //         mlByBottle: inputBottle.mlByBottle,
      //       }
      //     );
      //     response.status === 200 &&
      //       setDonInventory("¡Listo! Se agregó correctamente al Inventario");
      //   } catch (error) {
      //     console.log(error);
      //     setError("Ocurrió un error al añadir al Inventario");
      //   }
      // }
    }
    if (menu) {
      if (!inputBottle.nameDrink) {
        setError("Falta el nombre de la botella");
      } else if (!inputBottle.category) {
        setError("Falta Categoría");
      } else if (!inputBottle.mlByBottle) {
        setError("Falta Mililitros");
      } else if (!inputBottle.typeDrink) {
        setError("Indica si contiene alcohol");
      } else if (image === addImage) {
        setError("Selecciona una imagen");
      } else {
        // try {
        //   const response = await axios.post(
        //     `${process.env.REACT_APP_API}/shooza/drink/add`,
        //     {
        //       imageDrink: image,
        //       typeDrink: inputBottle.typeDrink,
        //       nameDrink: inputBottle.nameDrink,
        //       activeDrink: false,
        //       totalMinOrder: 1,
        //       recipe: [
        //         {
        //           category: inputBottle.category,
        //           botella: inputBottle.nameDrink,
        //           cantidad: inputBottle.mlByBottle,
        //         },
        //       ],
        //       drinkMl: inputBottle.mlByBottle,
        //     }
        //   );
        //   response.status === 200 &&
        //     setDonMenu("¡Listo! Se agregó correctamente al Menú");
        // } catch (error) {
        //   console.log(error);
        //   setError("Ocurrió un error al añadir al Menú");
        // }
      }
    }
    setLoading(false);
  };
  const onCancel = () => {
    setOption(false);
    setInputBottle(initialStateBottle);
  };

  const upLoadImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file && file.type.substring(0, 5) === "image") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="form-card">
      <h3 className="form-card__title">Nueva botella</h3>
      <form className="form-card__form-container" onSubmit={handleSubmit}>
        <div className="form-card__row">
          <div className="form-card__inputs-wrapper">
            <Input
              label={"Nombre de la botella / Marca:"}
              inputPops={{
                type: "text",
                placeholder: "Absolut",
                name: "nameDrink",
                value: inputBottle.nameDrink,
              }}
              onChange={handleChange}
            />
            <Input
              label="Categoría"
              inputPops={{
                type: "text",
                placeholder: "Vodka",
                name: "category",
                value: inputBottle.category,
              }}
              onChange={handleChange}
            />
            <Input
              label="Mililitros"
              inputPops={{
                type: "number",
                placeholder: "750",
                name: "mlByBottle",
                value: inputBottle.mlByBottle,
              }}
              onChange={handleChange}
            />
            {menu && (
              <>
                <Select
                  placeholder="Elige una opción"
                  label="¿Contiene alcohol?"
                  options={["Si", "No"]}
                  onChange={handleChange}
                  icon
                  gradient
                />
              </>
            )}
          </div>
          <div className="form-card__right-container">
            {menu && (
              <button
                onClick={() => fileRef.current.click()}
                className="form-card__add-image"
                type="button"
              >
                <img
                  className="form-card__add-image--img"
                  src={image}
                  alt="agregar imagen"
                  loading="lazy"
                />
                <input
                  className="form-card__add-image--input"
                  accept="image/*"
                  type="file"
                  ref={fileRef}
                  onChange={upLoadImage}
                />
              </button>
            )}
            <Checkbox
              label="Menú"
              onChange={(e) => setMenu(e.target.checked)}
            />
            <Checkbox
              label="Inventario"
              onChange={(e) => setInventory(e.target.checked)}
            />
          </div>
        </div>
        {error && <p className="form-card__error">{error}</p>}
        {doneMenu && <p className="form-card__done">{doneMenu}</p>}
        {doneInventory && <p className="form-card__done">{doneInventory}</p>}

        <div className="form-card__buttons-wrapper">
          <button className="btn-primary btn-primary--s" type="submit">
            {loading ? <Loader /> : "Guardar"}
          </button>
          <button
            className="btn-secondary btn-secondary--s"
            onClick={onCancel}
            type="reset"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormBottle;
