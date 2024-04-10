import "./NewClub.scss";
import React, { useRef, useState } from "react";
import Lottie from "lottie-react";
import addImage from "../../../assets/icons/Organizer/add-image.svg";
import loadingAnimation from "../../../assets/loading.json";
import plus from "../../../assets/icons/Organizer/plus.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllMyParty, postNewParty, teamParty } from "../../../redux/store/slices/Organizer";
import { StatusPopUp } from "../../../components/global/StatusPopUp/StatusPopUp";
import { Header } from "../../../components/global/Header/Header";
import InputDiv from "../../../components/global/InputDiv/InputDiv";
import SelectDiv from "../../../components/global/Select/SelectDiv/SelectDiv";

const NewClub = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [preview, setPreview] = useState(addImage);
  const [newBarman, setNewBarman] = useState([new Date().getTime()]);
  const [newCashier, setNewCashier] = useState([new Date().getTime()]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const getUser = useSelector((state) => state.user);
  const [inputRol, setInputRol] = useState({
    email: "",
    name: "",
    square: "",
    id: "",
  });
  const fileRef = useRef();
  const [input, setInput] = useState({
    idOrganizer: getUser?.id,
    file: "",
    category: "",
    nameParty: "",
    addressParty: "",
    unitManager: {
      name: "",
      email: "",
    },
    bartender: [],
    cashier: [],
    bars: [],
  });

  const addInput = (type) => {
    if (type === "barman") {
      setNewBarman([...newBarman, new Date().getTime()]);
    }
    if (type === "cashier") {
      setNewCashier([...newCashier, new Date().getTime()]);
    }
  };

  const handleInputRol = (e, type) => (value) => {
    setInputRol({
      ...inputRol,
      [type]: value,
      id: e,
    });
  };
  const handleInputChange = (type, subtype) => (value) => {
    if (subtype) {
      setInput({
        ...input,
        [type]: {
          ...input[type],
          [subtype]: value,
        },
      });
    } else {
      setInput({
        ...input,
        [type]: value,
      });
    }
  };

  const addRol = (type, subtype) => {
    if (type === "barman") {
      let alreadyExists = input.bartender.filter(
        (element) => element.id === inputRol.id
      );
      !alreadyExists.length
        ? input.bartender.push(inputRol)
        : subtype === "email"
        ? input.bartender.map(
            (e) => e.id === inputRol.id && (e.email = inputRol.email)
          )
        : subtype === "name"
        ? input.bartender.map(
            (e) => e.id === inputRol.id && (e.name = inputRol.name)
          )
        : subtype === "square" &&
          input.bartender.map(
            (e) => e.id === inputRol.id && (e.square = inputRol.square)
          );
    }
    if (type === "cashier") {
      let alreadyExists = input.cashier.filter(
        (element) => element.id === inputRol.id
      );
      !alreadyExists.length
        ? input.cashier.push(inputRol)
        : subtype === "email"
        ? input.cashier.map(
            (e) => e.id === inputRol.id && (e.email = inputRol.email)
          )
        : subtype === "name"
        ? input.cashier.map(
            (e) => e.id === inputRol.id && (e.name = inputRol.name)
          )
        : subtype === "square" &&
          input.cashier.map(
            (e) => e.id === inputRol.id && (e.square = inputRol.square)
          );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formAddParty = new FormData();
    formAddParty.append("idOrganizer", input.idOrganizer);
    formAddParty.append("file", input.file);
    formAddParty.append("nameParty", input.nameParty);
    formAddParty.append("addressParty", input.addressParty);
    formAddParty.append("unitManager", JSON.stringify(input.unitManager));
    formAddParty.append("bartender", JSON.stringify(input.bartender));
    formAddParty.append("cashier", JSON.stringify(input.cashier));
    dispatch(postNewParty(formAddParty)).then((response) => {
      if (
        response.status === 200 &&
        (response.data.cashier.length || response.data.bartender.length)
      ) {
        console.log();
        dispatch(
          teamParty({
            name: JSON.parse(response.data.unitManager)?.name,
            email: JSON.parse(response.data.unitManager)?.email,
            password: JSON.parse(response.data.unitManager)?.email,
            rol: "unitManager",
            idParty: response.data._id,
            idOrganizer: getUser?.id,
          })
        );
        JSON.parse(response.data.bartender)?.forEach((e) => {
          dispatch(
            teamParty({
              name: e?.name,
              email: e?.email,
              password: e?.email,
              rol: "bartender",
              idParty: response.data._id,
              idOrganizer: getUser?.id,
              idBarra: `${response.data._id}-barra-${e.square}`,
              square: e.square,
            })
          );
        });
        JSON.parse(response.data.cashier)?.forEach((e) => {
          dispatch(
            teamParty({
              name: e?.name,
              email: e?.email,
              password: e?.email,
              rol: "cashier",
              idParty: response.data._id,
              idOrganizer: getUser?.id,
              idBarra: `${response.data._id}-barra-${e.square}`,
              square: e.square,
            })
          );
        });
        dispatch(getAllMyParty({ idOrganizer: getUser?.id }));
        navigate(-1);
      } else if (response.status === 200) {
        navigate(-1);
      } else {
        setError(true);
      }
    });
  };

  const cancel = () => {
    setInput({
      imageParty: preview,
      nameParty: "",
      addressParty: "",
      unitManager: {
        name: "",
        email: "",
      },
      bartender: [],
    });
    navigate(-1);
  };
  let OrganizerParty = {
    party: "ajustes",
    path: "agregar local",
  };

  const uploadFile = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setInput({ ...input, file: file });
    const fileReader = new FormData();
    fileReader.append("file", file);
    if (file && file.type.substring(0, 5) === "image") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      {error && (
        <StatusPopUp
          redirect={() => {
            setError(false);
            setIsLoading(false);
          }}
          button={"volver"}
          title={"ocurrió un error"}
          description={
            "Intentalo de nuevo, asegurate de completar todos los campos"
          }
        />
      )}
      <div className="add-party-container">
        <Header
          notification={true}
          backbutton={() => navigate(-1)}
          OrganizerParty={OrganizerParty}
        />
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="container-form">
            <h2>Información del boliche</h2>
            <div
              className="add-image"
              onClick={(e) => {
                e.preventDefault();
                fileRef.current.click();
              }}
            >
              <div className="image-container">
                <img src={preview} alt="add" />
              </div>
              <p>Añade una imagen del boliche</p>
            </div>
            <div className="form-in">
              <input
                accept="image/*"
                type="file"
                ref={fileRef}
                style={{ display: "none" }}
                onChange={(e) => uploadFile(e)}
              />
              <InputDiv
                label={"Nombre del boliche:"}
                setState={handleInputChange("nameParty")}
                inputProps={{
                  type: "text",
                  placeholder: "Escriba aquí",
                  value: input.nameParty,
                  minLength: 3,
                  maxLength: 25,
                }}
              />
              <InputDiv
                label={"Ubicación:"}
                setState={handleInputChange("addressParty")}
                inputProps={{
                  type: "text",
                  placeholder: "Escriba aquí",
                  value: input.addressParty,
                  minLength: 5,
                  maxLength: 50,
                }}
              />
              <SelectDiv
                options={{
                  techno: "Techno",
                  pycho: "Psycho",
                  cachengue: "Cachengue",
                }}
                label="Categoria"
                setState={handleInputChange("category")}
                selectProps={{
                  value: input.category,
                }}
              />
              <div>
                <InputDiv
                  style={{ marginBottom: -12 }}
                  label={"Gerente de unidad:"}
                  setState={handleInputChange("unitManager", "name")}
                  inputProps={{
                    type: "text",
                    placeholder: "Nombre",
                    value: input.unitManager.name,
                    minLength: 3,
                    maxLength: 50,
                  }}
                />
                <InputDiv
                  setState={handleInputChange("unitManager", "email")}
                  inputProps={{
                    type: "text",
                    placeholder: "example@gmail.com",
                    value: input.unitManager.email,
                    minLength: 11,
                    maxLength: 50,
                  }}
                />
              </div>
              <div className="rol">
                <p>Bartenders:</p>
                {newBarman?.map((e) => (
                  <div key={e}>
                    <InputDiv
                      style={{ marginBottom: -12 }}
                      setState={handleInputRol(e, "name")}
                      onBlur={() => addRol("barman", "name")}
                      inputProps={{
                        type: "text",
                        placeholder: "Nombre",
                        minLength: 3,
                        maxLength: 40,
                      }}
                    />
                    <InputDiv
                      style={{ marginBottom: -12 }}
                      setState={handleInputRol(e, "email")}
                      onBlur={() => addRol("barman", "email")}
                      inputProps={{
                        type: "email",
                        placeholder: "example@gmail.com",
                        minLength: 11,
                        maxLength: 50,
                      }}
                    />
                    <InputDiv
                      style={{ marginBottom: -12 }}
                      setState={handleInputRol(e, "square")}
                      onBlur={() => addRol("barman", "square")}
                      inputProps={{
                        type: "text",
                        placeholder: "Barra 1",
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="buttons-plus">
                <img src={plus} alt="mas" onClick={() => addInput("barman")} />
              </div>
              <div className="rol">
                <p>Cajeros:</p>
                {newCashier?.map((e) => (
                  <div key={e}>
                    <InputDiv
                      style={{ marginBottom: -12 }}
                      setState={handleInputRol(e, "name")}
                      onBlur={() => addRol("cashier", "name")}
                      inputProps={{
                        type: "text",
                        placeholder: "Nombre",
                        minLength: 3,
                        maxLength: 40,
                      }}
                    />
                    <InputDiv
                      style={{ marginBottom: -12 }}
                      setState={handleInputRol(e, "email")}
                      onBlur={() => addRol("cashier", "email")}
                      inputProps={{
                        type: "email",
                        placeholder: "example@gmail.com",
                        minLength: 11,
                        maxLength: 50,
                      }}
                    />
                    <InputDiv
                      style={{ marginBottom: -12 }}
                      setState={handleInputRol(e, "square")}
                      onBlur={() => addRol("cashier", "square")}
                      inputProps={{
                        type: "text",
                        placeholder: "Caja 1",
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="buttons-plus">
                <img src={plus} alt="mas" onClick={() => addInput("cashier")} />
              </div>
              <div className="warning">
                <p className="red-asterisk">*</p>
                <p>
                  Tu boliche entrara en revision por 24 horas, pronto podras
                  empezar a agregar productors
                </p>
              </div>
            </div>
          </div>
          <button className="submit-button" type="submit">
            {isLoading ? (
              <Lottie
                animationData={loadingAnimation}
                className="loading-animation-organizer"
                loop={true}
              />
            ) : (
              "Aceptar"
            )}
          </button>
        </form>
        <button className="cancel" onClick={() => cancel()}>
          Cancelar
        </button>
      </div>
    </>
  );
};
export default NewClub;