import './productsCategories.scss';
import { Product_Card } from '../Product_Card/Product_Card';
import { GradientText } from '../Gradient-Text-Redirect/GradientText';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../../redux/slices/global/category';
import routes from '../../../models/routes.models';
export const Products_Categories = ({ title, category, searchInput }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (title === 'promociones') {
      dispatch(setCategory('promotions'));
    } else {
      dispatch(setCategory(category[0].typeDrink));
    }

    navigate(routes.partyUser.marketplaceSection);
  };
  var checkContent = category.filter((product) =>
    product.nameDrink.toUpperCase().includes(searchInput)
  );

  return (
    <>
      <div className="categories-header">
        <h2 className="heading-secondary-sub--upper">{title}</h2>
        <div className="see-more">
          <GradientText text={'Ver Mas'} redirect={() => handleOnClick()} />
        </div>
      </div>

      <div className="products-container">
        {checkContent.length ? (
          category
            .filter((product) =>
              product.nameDrink.toUpperCase().includes(searchInput)
            )
            ?.map((product, i) => {
              if (JSON.parse(product.activeDrink) === true)
                return (
                  <Product_Card
                    key={i}
                    add={true}
                    image={product.imageDrink}
                    name={product.nameDrink}
                    oldPrice={
                      parseInt(product.priceDrink) ===
                      parseInt(product.finalPriceDrink)
                        ? false
                        : product.priceDrink
                    }
                    discount={product.discountDrink}
                    status={product.activeDrink}
                    price={product.finalPriceDrink}
                    type={product.typeDrink}
                    amount={product.amount}
                    id={product.nameDrink}
                  />
                );
            })
        ) : (
          <p>BUSCA BIEN SUBNORMAL DE MIERDA</p>
        )}
      </div>
    </>
  );
};
