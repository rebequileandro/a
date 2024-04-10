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
import AddImage from "../../../components/AddImage/AddImage";
const FormBottle = ({ setOption }) => {
  const initialStateBottle = {
    imageDrink: "",
    typeDrink: "",
    nameDrink: "",
    category: "",
    mlByBottle: "",
  };

  const [inputBottle, setInputBottle] = useState(initialStateBottle);
  const [menu, setMenu] = useState(false);
  const [inventory, setInventory] = useState(false);
  const [image, setImage] = useState(null);
  const [error, setError] = useState(false);
  const [doneMenu, setDonMenu] = useState(false);
  const [doneInventory, setDonInventory] = useState(false);
  const [loading, setLoading] = useState(false);

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
      if (!inputBottle.nameDrink) {
        setError("Falta el nombre de la botella");
      } else if (!inputBottle.category) {
        setError("Falta Categoría");
      } else if (!inputBottle.mlByBottle) {
        setError("Falta Mililitros");
      } else {
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_API}/shooza/bottle/add`,
            {
              brand: inputBottle.nameDrink.toLowerCase(),
              category: inputBottle.category.toLowerCase(),
              mlByBottle: inputBottle.mlByBottle,
            }
          );
          response.status === 200 &&
            setDonInventory("¡Listo! Se agregó correctamente al Inventario");
        } catch (error) {
          console.log(error);
          setError("Ocurrió un error al añadir al Inventario");
        }
      }
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
      } else if (!image) {
        setError("Selecciona una imagen");
      } else {
        try {
          const formData = new FormData();
          formData.append("file", image);
          formData.append("typeDrink", inputBottle.typeDrink.toLowerCase());
          formData.append("nameDrink", inputBottle.nameDrink.toLowerCase());
          formData.append("activeDrink", false);
          formData.append("totalMinOrder", 1);
          formData.append(
            "recipe",
            JSON.stringify([
              {
                category: inputBottle.category.toLowerCase(),
                botella: inputBottle.nameDrink.toLowerCase(),
                cantidad: inputBottle.mlByBottle.toLowerCase(),
              },
            ])
          );
          formData.append("drinkMl", inputBottle.mlByBottle);

          const response = await axios({
            method: "post",
            url: `${process.env.REACT_APP_API}/shooza/drink/add`,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          });
          response.status === 200 &&
            setDonMenu("¡Listo! Se agregó correctamente al Menú");
          setInputBottle(initialStateBottle);
        } catch (error) {
          console.log(error);
          setError("Ocurrió un error al añadir al Menú");
        }
      }
    }
    setLoading(false);
  };
  const onCancel = () => {
    setOption(false);
    setInputBottle(initialStateBottle);
  };

  return (
    <div className="form-card">
      <h3 className="form-card__title">Nueva botella</h3>
      <form className="form-card__form-container" onSubmit={handleSubmit}>
        <div className="form-card__row">
          <div className="form-card__inputs-wrapper">
            <Input
              label={"Nombre de la botella:"}
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
            {menu && <AddImage setState={setImage} />}
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
bartender: [ { square: 'barra 1', name: 'bar tender', email: 'nopefiw373@wiemei.com' }, { square: 'barra 2', name: 'bar tende21r', email: 'nopefiw37321@wiemei.com' } ],
cashier: [ { square: 'barra 1', name: 'ca shier', email: 'nopefiw374@wiemei.com' },  { square: 'barra 2', name: 'ca shswaier', email: 'nopefiw374awa@wiemei.com' }],
barras: [
  {
    barra: 1,
    pista: 'planta hermana',
    nombre: 'barra 1',
    puntoVenta: '001',
    image: 'https://s3.amazonaws.com/shooza.app.imagenes/discotecas+argentinas/groove/Planta+alta/barra+4.png'
  },
  {
    barra: 2,
    pista: 'planta ',
    nombre: 'barra 2',
    puntoVenta: '002',
    image: 'https://s3.amazonaws.com/shooza.app.imagenes/discotecas+argentinas/groove/Planta+alta/barra+4.png'
  }
]