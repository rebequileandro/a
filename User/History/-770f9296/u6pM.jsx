import React, { useEffect, useState } from 'react';
import './NewBottle.scss';
import { AnimatePresence, motion } from 'framer-motion';

import { useDispatch, useSelector } from 'react-redux';
import { newBottle } from '../../../../redux/slices/organizer/organizer';
import { StatusPopUp } from '../../../../components/global/StatusPopUp/StatusPopUp';
import InputDiv from '../../../../components/global/InputDiv/InputDiv';
import axios from 'axios';
import SearchBar from '../../../../components/global/SearchBar/SearchBar';

const NewBottle = ({ setIsnewBottle, isNewBottle }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const getUser = useSelector((state) => state.global.user);
  const getParty = useSelector((state) => state.organizer.organizer.details[0]);
  const initialState = {
    category: '',
    brand: '',
    inventoryGeneral: '',
    mlBottle: '',
    type: 'bottle',
    idOrganizer: getUser.id,
    idParty: getParty._id,
    nameParty: getParty.nameParty
  };
  const [input, setInput] = useState(initialState);
  const [inputSearchCategory, setInputSearchCategory] = useState('');
  const [categorySelect, setCategorySelect] = useState('');
  const [category, setCategory] = useState([]);

  const handleChange = (type) => (value) => {
    if (type === 'inventoryGeneral') {
      setInput({
        ...input,
        inventoryGeneral: value,
        mlBottle: (parseInt(value) * 1000).toString()
      });
    } else {
      setInput({
        ...input,
        [type]: value.toLowerCase()
      });
    }
  };
  const handleSubmit = () => {
    dispatch(newBottle(input, { idParty: getParty._id })).then((response) => {
      setStatus(response.status);
      setIsOpen(true);
      setInput(initialState);
    });
  };
  const handleClick = () => {
    setIsOpen(false);
    setIsnewBottle(false);
  };
  const getCategory = async () => {
    const response = await axios(
      `${process.env.REACT_APP_API}/organizer/inventory/category/${getParty._id}`
    );
    setCategory(response.data.data);
  };
  useEffect(() => {
    getCategory();
  }, []);

  const handleCategoryChange = (e) => {
    setInputSearchCategory(e.target.value);
  };
  const hadleCategorySelect = (option) => {
    setInputSearchCategory(option);
    setCategorySelect(option);
  };
  return (
    <AnimatePresence>
      {isNewBottle && (
        <div className="new-bottle-overlay">
          <>
            <StatusPopUp
              isOpen={isOpen}
              status={status === 200 ? 'success' : false}
              title={
                status === 200
                  ? 'su botella se ha agregado con éxito'
                  : 'su botella no se ha agregado '
              }
              button={'volver'}
              redirect={handleClick}
              description={
                status !== 200
                  ? 'Inténtalo de nuevo, asegúrate de completar todos los campos'
                  : false
              }
            />
            {!isOpen && (
              <motion.div
                initial={{ transform: 'scale(0.5)' }}
                animate={{ transform: 'scale(1)' }}
                exit={{ transform: 'scale(0)' }}
                className="new-bottle-popup"
              >
                <h2 className="title">nueva botella</h2>
                <div className="new-bottle-popup__search-category">
                  <SearchBar
                    input={inputSearchCategory}
                    handleChange={handleCategoryChange}
                  />

                  {inputSearchCategory && !categorySelect ? (
                    <div className="new-bottle-popup__catogori-options">
                      {category
                        .filter((input) =>
                          input.category
                            .toLowerCase()
                            .includes(inputSearchCategory)
                        )
                        ?.map((option) => (
                          <div
                            className="new-bottle-popup__catogori-options__item"
                            onClick={() => hadleCategorySelect(option.category)}
                          >
                            <p className="heading-tertiary-main">
                              {option.category}
                            </p>
                            <div className="grey-gradient-line">&nbsp;</div>
                          </div>
                        ))}
                    </div>
                  ) : null}
                </div>

                <InputDiv
                  inputProps={{
                    placeholder: 'Marca',
                    value: input.brand
                  }}
                  setState={handleChange('brand')}
                />
                <InputDiv
                  inputProps={{
                    placeholder: 'Catidad',
                    value: input.inventoryGeneral
                  }}
                  setState={handleChange('inventoryGeneral')}
                />
                <button className="save-popup" onClick={() => handleSubmit()}>
                  Aceptar
                </button>
                <button
                  className="cancel-popup"
                  onClick={() => setIsnewBottle(false)}
                >
                  Cancelar
                </button>
              </motion.div>
            )}
          </>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NewBottle;
