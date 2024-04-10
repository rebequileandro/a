import './SectionDetails.scss';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header } from '../Header/Header';

import { GradientGreenBar } from '../../partyUser/Gradient-Green-Bar/GradientGreenBar';
import Tabbar from '../../partyUser/Tabbar/Tabbar';
import { Product_Card } from '../Product_Card/Product_Card';
import Select from '../Select/Select/Select';
import { Zoom } from 'swiper';
import NoStock from '../../partyUser/NoStock/NoStock';
import InputDiv from '../InputDiv/InputDiv';
import NotFound from '../NotFound/NotFound';

export const SectionDetails = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState([]);
  const getDinks = useSelector((state) => state.partyUser.marketplace.drinks);
  const getBottles = useSelector(
    (state) => state.partyUser.marketplace.bottles
  );
  const getPromotions = useSelector(
    (state) => state.partyUser.marketplace.promotions
  );
  const cart = useSelector((state) => state.partyUser.marketplace.cart);
  const categoryType = useSelector((state) => state.global.category.type);
  const [type, setType] = useState(categoryType);
  const [order, setOrder] = useState(null);
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState('');

  const searchDrinks = (e) => {
    setInput(e);
    console.log(input);
    if (typeof input === 'string') {
      const result = details?.filter((element) => {
        if (
          element.nameDrink.toLowerCase().includes(input.toLowerCase()) ||
          element.finalPriceDrink.toString().includes(input.toString())
        )
          return element;
      });
      if (setSearch) {
        result.length
          ? setSearch(input.length ? result : [])
          : setSearch(input.length ? 'no hay productos' : []);
      }
      return result;
    } else {
      return false;
    }
  };

  useEffect(() => {
    let detailCopy;
    let valueSort;
    if (order) valueSort = order;

    setTitle(type);

    if (type === 'Tragos' || type === 'drink') {
      setTitle('Tragos');
      detailCopy = [...getDinks];
    }
    if (type === 'Botellas' || type === 'bottles') {
      setTitle('Botellas');
      detailCopy = [...getBottles];
    }
    if (type === 'Promociones' || type === 'promotions') {
      setTitle('Promociones');
      detailCopy = [...getPromotions];
    }

    //Select Sort
    if (valueSort) {
      if (valueSort === 'Mayor precio') {
        detailCopy.sort((a, b) =>
          parseInt(a.finalPriceDrink) < parseInt(b.finalPriceDrink) ? 1 : -1
        );
      }
      if (valueSort === 'Menor precio') {
        detailCopy.sort((a, b) =>
          parseInt(a.finalPriceDrink) > parseInt(b.finalPriceDrink) ? 1 : -1
        );
      }
    }

    setDetails(detailCopy);
    setInput('');
  }, [type, order]);

  return (
    <>
      <Header
        notification={true}
        backbutton={() => navigate(-1)}
        title={title}
      />
      <div className="container-details-categories layout-primary">
        <InputDiv
          inputProps={{
            type: 'text',
            placeholder: 'Buscar',
            value: input
          }}
          setState={(e) => searchDrinks(e)}
          search
        />
        <div className="container-details-categories__select">
          <div className="container-details-categories__select__option">
            <Select
              placeholder={'Ordenar por'}
              options={['Menor precio', 'Mayor precio']}
              onChange={setOrder}
              icon
            />
          </div>
          <div className="container-details-categories__select__option">
            <Select
              placeholder={'Categoría'}
              onChange={setType}
              options={['Tragos', 'Promociones', 'Botellas']}
              icon
            />
          </div>
        </div>
        <div className="container-details-categories__drinks">
          {search?.length && input?.length ? (
            typeof search === 'string' ? (
              <div className="container-details-categories__error">
                <NotFound />
              </div>
            ) : (
              search.map((e) => {
                if (JSON.parse(e.activeDrink) === true)
                  return (
                    <Product_Card
                      key={e.nameDrink}
                      add={true}
                      image={e.imageDrink}
                      name={e.nameDrink}
                      oldPrice={
                        e.priceDrink.toString() === e.finalPriceDrink.toString()
                          ? false
                          : e.priceDrink
                      }
                      discount={e.discountDrink}
                      status={e.activeDrink}
                      price={e.finalPriceDrink}
                      type={e.typeDrink}
                      amount={e.amount}
                      id={e.nameDrink}
                    />
                  );
              })
            )
          ) : details?.length ? (
            details.map((e) => {
              if (JSON.parse(e.activeDrink) === true)
                return (
                  <Product_Card
                    key={e.nameDrink}
                    add={true}
                    image={e.imageDrink}
                    name={e.nameDrink}
                    oldPrice={
                      e.priceDrink.toString() === e.finalPriceDrink.toString()
                        ? false
                        : e.priceDrink
                    }
                    discount={e.discountDrink}
                    status={e.activeDrink}
                    price={e.finalPriceDrink}
                    type={e.typeDrink}
                    amount={e.amount}
                    id={e.nameDrink}
                  />
                );
            })
          ) : (
            <NoStock />
          )}
        </div>
        {cart.length ? (
          <GradientGreenBar action={'cart'} isAmount={true} />
        ) : (
          <Tabbar />
        )}
      </div>
    </>
  );
};

export default SectionDetails;
