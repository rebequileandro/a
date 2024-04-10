import "./AddParty.scss";

import React, { useRef, useState } from "react";
import { fetchParty, postNewParty, teamParty} from "../../../redux/store/slices/Organizer";
import InputDiv from "../../../components/InputDiv/InputDiv";
import addImage from "../../../assets/icons/Organizer/add-image.svg";
import plus from "../../../assets/icons/Organizer/plus.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header } from "../../../components/Header/Header";
import { useSelector } from 'react-redux'
import loadingAnimation from '../../../assets/loading.json'
import Lottie from "lottie-react";

export const AddParty = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [preview, setPreview] = useState(addImage);
  const [newBarman, setNewBarman] = useState([new Date().getTime()]);
  const [newCashier, setNewCashier] = useState([new Date().getTime()]);
  const [isLoading, setIsLoading] = useState(false)
  const getUser = useSelector(state => state.user)
  const [inputRol, setInputRol] = useState({
    email: "",
    name: "",
    square:"",
    id: "",
  });
  const fileRef = useRef();
  const [input, setInput] = useState({
    idOrganizer: getUser?.id,
    file: "",
    nameParty: "",
    addressParty: "",
    unitManager: {
      name:'',
      email:'',
    },
    emailBarmans: [],
    cashier: [],
  });

  const addInput = (type) => {
    if(type === 'barman') {
      setNewBarman([...newBarman, new Date().getTime()]);
    }
    if(type === 'cashier') {
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
    if(subtype) {
      setInput({
        ...input,
        [type]: {
          ...input[type], 
          [subtype]: value
        }
      })
    } 
    else {
      setInput({
        ...input,
        [type]: value,
      });
    }
  };
  const generatePassword = (num) => {
    let length = num,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }
  const addRol = (type, subtype) => {
    if(type === 'barman') {
      let alreadyExists = input.emailBarmans.filter(
        (element) => element.id === inputRol.id
      );
        !alreadyExists.length
        ? input.emailBarmans.push(inputRol)
        : subtype === "email"
        ? input.emailBarmans.map(
            (e) => e.id === inputRol.id && (e.email = inputRol.email)
          )
        : subtype === "name" ?
          input.emailBarmans.map(
            (e) => e.id === inputRol.id && (e.name = inputRol.name)
          )
        : subtype === "square" &&
          input.emailBarmans.map(
          (e) => e.id === inputRol.id && (e.square = inputRol.square)
        )
    }
    if(type === 'cashier') {
      let alreadyExists = input.cashier.filter(
        (element) => element.id === inputRol.id
      );
      !alreadyExists.length
        ? input.cashier.push(inputRol)
        : subtype === "email"
        ? input.cashier.map(
            (e) => e.id === inputRol.id && (e.email = inputRol.email)
          )
        : subtype === "name" ?
          input.cashier.map(
            (e) => e.id === inputRol.id && (e.name = inputRol.name)
          )
        : subtype === "square" &&
        input.cashier.map(
        (e) => e.id === inputRol.id && (e.square = inputRol.square)
      )
    }
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true)
      dispatch(postNewParty({ 
        ...input, 
      }))
      .then(
        (response) => {
          if (response.status === 200) {
            dispatch(teamParty({
              name: response.data.unitManager.name,
              email: response.data.unitManager.email,
              password: generatePassword(6), 
              rol:"unitManager",
              idParty: response.data._id,
              idOrganizer: getUser?.id
            }))
            response.data.emailBarmans.forEach(e => {
              dispatch(teamParty({
                name: e.name,
                email: e.email,
                password: generatePassword(6),
                rol:"bartender",
                idParty: response.data._id,
                idOrganizer: getUser?.id,
                idBarra: `${response.data._id}-barra-${e.square}`, 
                square: e.square
              }))
            })
            response.data.cashier.forEach(e => {
              dispatch(teamParty({
                name: e.name,
                email: e.email,
                password: generatePassword(6),
                rol:"cashier",
                idParty: response.data._id,
                idOrganizer: getUser?.id,
                idBarra: `${response.data._id}-barra-${e.square}`, 
                square: e.square
              }))
            })
            dispatch(fetchParty());
            navigate(-1);
          } 
        }
      );
  };
  
  const cancel = () => {
    setInput({
      imageParty: preview,
      nameParty: "",
      addressParty: "",
      unitManager: {
        name:'',
        email:'',
      },
      emailBarmans: [],
    });
    navigate(-1);
  };
  let OrganizerParty = { 
    party: 'ajustes',
    path: 'agregar local'
  }

  const uploadFile = (e) => {
     e.preventDefault();
    const [ file ] = e.target.files
    const fileReader = new FormData();
    fileReader.append('file', file)
    setInput({...input, file: fileReader})





    if(file && file.type.substring(0, 5) === 'image'){
      const reader = new FileReader()
      reader.onloadend = () => {
      setPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }
  console.log(input.file)
  return (
    <div className='add-party-container'>
        <Header
            notification={true} 
            backbutton={() => navigate(-1)} 
            OrganizerParty={OrganizerParty}
            />
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className='container-form'>
                <h2>información del boliche</h2>
                <div className='add-image' 
                  onClick={(e)=> {
                      e.preventDefault();
                      fileRef.current.click()}}>
                    <div className='image-container'>
                        <img src={preview} alt="add"/>
                    </div>
                    <p>Añade una imagen del boliche</p>
                </div>
                <div className='form-in'>
                    <input 
                        accept='image/*'
                        type="file" ref={fileRef} 
                        style={{display: 'none'}}
                        onChange={(e) => uploadFile(e)}/>
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
                    }}/>
                  <InputDiv
                    style={{ marginBottom: -12 }}
                    setState={handleInputRol(e, "email")}
                    onBlur={() => addRol("barman", "email")}
                    inputProps={{
                      type: "email",
                      placeholder: "example@gmail.com",
                      minLength: 11,
                      maxLength: 50,
                    }}/>
                    <InputDiv
                      style={{ marginBottom: -12 }}
                      setState={handleInputRol(e, "square")}
                      onBlur={() => addRol("barman", "square")}
                      inputProps={{
                        type: "text",
                        placeholder: "Barra 1",
                      }}/>
                </div>
              ))}
            </div>
            <div className="buttons-plus">
              <img src={plus} alt="mas" onClick={() => addInput('barman')} />
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
              <img src={plus} alt="mas" onClick={() => addInput('cashier')} />
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
        {isLoading ?  
          <Lottie
              animationData={loadingAnimation}
              className="loading-animation"
              loop={true}/> : "Aceptar"}
        </button>
      </form>
      <button className="cancel" onClick={() => cancel()}>Cancelar</button>
    </div>
  );
};
