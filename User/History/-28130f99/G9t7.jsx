import './SectionDetails.scss';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Header } from '../Header/Header';
import Select from '../Select/Select/Select';
import SearchBar from '../SearchBar/SearchBar';
import Tabbar from '../../partyUser/Tabbar/Tabbar';
import NoStock from '../../partyUser/NoStock/NoStock';
import { ProductCard } from '../Product_Card/Product_Card';
import { TabbarCashier } from '../../cashier/Tabbar/TabbarCashier';
import { GradientGreenBar } from '../../partyUser/Gradient-Green-Bar/GradientGreenBar';

import { getCurrentUser } from '../../../redux/slices/global/user';

export const SectionDetails = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState([]);
  const user = useSelector(getCurrentUser);
  const getDinks = useSelector((state) => state.partyUser.marketplace.drinks);
  const getBottles = useSelector(
    (state) => state.partyUser.marketplace.bottles
  );
  const getPacks = useSelector((state) => state.partyUser.marketplace.packs);
  const getalcoholFree = useSelector(
    (state) => state.partyUser.marketplace.alcoholFree
  );
  const getPromotions = useSelector(
    (state) => state.partyUser.marketplace.promotions
  );
  const cart = useSelector((state) => state.partyUser.marketplace.cart);
  const categoryType = useSelector((state) => state.global.category.type);

  const [type, setType] = useState(categoryType);
  const [order, setOrder] = useState(null);
  const [input, setInput] = useState('');

  const searchDrinks = (e) => {
    setInput(e.target.value);
    console.log(input);
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
    if (type === 'Botellas' || type === 'bottle') {
      setTitle('Botellas');
      detailCopy = [...getBottles];
    }
    if (type === 'Packs' || type === 'packs') {
      setTitle('Packs');
      detailCopy = [...getPacks];
    }
    if (type === 'Promociones' || type === 'promotions') {
      setTitle('Promociones');
      detailCopy = [...getPromotions];
    }
    if (type === 'sin alcohol' || type === 'alcoholFree') {
      setTitle('Sin alcohol');
      detailCopy = [...getalcoholFree];
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

  //checkSearchContent (as the name points) checks the content of the filtered details array so that we can render the no stock component. Filter doesnt modify in a direct way the array it creates a shallow copy so we need a way to se if the length reaches 0
  let checkSearchContent = details.filter((product) =>
    product.nameDrink.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <>
      <Header backbutton={() => navigate(-1)} title={title} />
      <div className="container-details-categories layout-primary">
        <div className="container-details-categories__searchBar-margins">
          <SearchBar handleChange={searchDrinks} input={input} />
        </div>

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
              options={[
                'Tragos',
                'Promociones',
                'Botellas',
                'sin alcohol',
                'Packs'
              ]}
              icon
            />
          </div>
        </div>

        <div className="container-details-categories__drinks">
          {checkSearchContent.length ? (
            details
              .filter((product) =>
                product.nameDrink.toLowerCase().includes(input.toLowerCase())
              )
              ?.map((e) => {
                if (JSON.parse(e.activeDrink) === true)
                  return (
                    <div
                      className="container-details-categories__layout-cards"
                      key={e._id}
                    >
                      <ProductCard
                        add={true}
                        image={e.imageDrink}
                        name={e.nameDrink}
                        oldPrice={
                          e.priceDrink.toString() ===
                          e.finalPriceDrink.toString()
                            ? false
                            : e.priceDrink
                        }
                        discount={e.discountDrink}
                        status={e.activeDrink}
                        price={e.finalPriceDrink}
                        type={e.typeDrink}
                        amount={e.amount}
                        id={e._id}
                      />
                    </div>
                  );
              })
          ) : (
            <NoStock />
          )}
        </div>
        {cart.length ? (
          <GradientGreenBar action={'cart'} isAmount={true} />
        ) : user.rol === 'cashier' ? (
          <TabbarCashier />
        ) : (
          <Tabbar />
        )}
      </div>
    </>
  );
};

export default SectionDetails;
