import './productsCategories.scss';
import { ProductCard } from '../Product_Card/Product_Card';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../../redux/slices/global/category';
import routes from '../../../models/routes.models';
import SmallProductCard from '../Product_Card/Small_Product_Card/Small_Product_Card';
import Products_card_edit from '../../owner-manager/Products_card_edit/Products_card_edit';
export const Products_Categories = ({
  title,
  category,
  searchInput,
  smallCard,
  edit,
  organizerCards
}) => {
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
    product.nameDrink.toLowerCase().includes(searchInput.toLowerCase())
  );
  const Product_Card = smallCard ? SmallProductCard : ProductCard;
  return (
    <div className="products-categories-container">
      <div className="categories-header">
        <h2 className="heading-secondary-sub heading-secondary-sub--upper">
          {title}
        </h2>
        <div className="see-more">
          <div className="anchor-primary" onClick={() => handleOnClick()}>
            <Link to="">Ver más</Link>
          </div>
        </div>
      </div>
      <div className="products-container">
        {organizerCards
          ? category
              .filter((product) =>
                product.nameDrink
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              )
              ?.map((product, i) => {
                return (
                  <Products_card_edit
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
                    edit={edit}
                    statusDrink={product.activeDrink}
                  />
                );
              })
          : checkContent.length
          ? category
              .filter((product) =>
                product.nameDrink
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
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
                      edit={edit}
                    />
                  );
              })
          : null}
      </div>
    </div>
  );
};
