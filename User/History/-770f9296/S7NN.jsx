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
  const [brandsOptions, setBrandsOptions] = useState([]);
  const [inputSearchBrand, setInputSearchBrand] = useState('');
  const [brandSelect, setBrandSelect] = useState('');
  const [mlAmount, setMlAmount] = useState('');

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
    setInputSearchCategory('');
    setCategorySelect('');
    setInputSearchBrand('');
    setBrandsOptions([]);
    setMlAmount('');
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
  const handleBrandChange = (e) => {
    setInputSearchBrand(e.target.value);
  };
  const handleMlChange = (e) => {
    setMlAmount(e.target.value);
  };

  const hadleCategorySelect = async (option) => {
    let brands;
    setCategorySelect(option);
    setInputSearchCategory(option);
    const response = await axios.post(
      `${process.env.REACT_APP_API}/organizer/inventory/category/bottle`,
      { idParty: getParty._id, category: option }
    );

    brands = response.data.data.map((e) => e.brand);

    setBrandsOptions(brands);
  };
  const handleBrandSelect = (option) => {
    setBrandSelect(option);
    setInputSearchBrand(option);
  };
  const handleErase = (e) => {
    setInputSearchCategory('');
    setCategorySelect('');
    setBrandsOptions([]);
  };
  const handleEraseBrand = () => {
    setBrandSelect('');
    setInputSearchBrand('');
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
                    notIcons={true}
                    disableInput={categorySelect ? 'disabled' : ''}
                    eraseIcon={categorySelect ? true : false}
                    eraseFunction={handleErase}
                    placeholder={'Categoria'}
                  />

                  {inputSearchCategory && !categorySelect ? (
                    <div className="new-bottle-popup__catogori-options">
                      {category
                        .filter((input) =>
                          input.category
                            .toLowerCase()
                            .includes(inputSearchCategory.toLowerCase())
                        )
                        ?.map((option) => (
                          <div
                            key={option.category}
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

                {inputSearchCategory && categorySelect ? (
                  <div className="new-bottle-popup__search-category">
                    <SearchBar
                      input={inputSearchBrand}
                      handleChange={handleBrandChange}
                      notIcons={true}
                      disableInput={brandSelect ? 'disabled' : ''}
                      eraseIcon={brandSelect ? true : false}
                      eraseFunction={handleEraseBrand}
                      placeholder={'Marca'}
                    />

                    {inputSearchBrand && !brandSelect ? (
                      <div className="new-bottle-popup__catogori-options">
                        {brandsOptions
                          .filter((input) =>
                            input
                              .toLowerCase()
                              .includes(inputSearchBrand.toLowerCase())
                          )
                          ?.map((option) => (
                            <div
                              key={option}
                              className="new-bottle-popup__catogori-options__item"
                              onClick={() => handleBrandSelect(option)}
                            >
                              <p className="heading-tertiary-main">{option}</p>
                              <div className="grey-gradient-line">&nbsp;</div>
                            </div>
                          ))}
                      </div>
                    ) : null}
                  </div>
                ) : null}

                {categorySelect && brandSelect ? (
                  <div className="new-bottle-popup__search-category">
                    <SearchBar
                      input={mlAmount}
                      handleChange={handleMlChange}
                      notIcons={true}
                      placeholder={'Ml'}
                      inputNumber={true}
                    />
                  </div>
                ) : null}
                {categorySelect && mlAmount ? (
                  <div className="new-bottle-popup__search-category">
                    <SearchBar
                      input={mlAmount}
                      handleChange={handleMlChange}
                      notIcons={true}
                      placeholder={'ano'}
                      inputNumber={true}
                    />
                  </div>
                ) : null}
                {categorySelect && brandSelect && mlAmount ? (
                  <button className="save-popup" onClick={() => handleSubmit()}>
                    Aceptar
                  </button>
                ) : null}
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
