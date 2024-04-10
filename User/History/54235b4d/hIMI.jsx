import React from 'react';
import './productsSectionAdmin.scss';

import NoStockImg from '../../../assets/Fiestero/svg/no-stock.svg';

import ProductsCardEdit from '../Products_card_edit/Products_card_edit';
import FoodCardEdit from '../FoodCardEdit/FoodCardEdit';

export default function ProductsSectionAdmin({
  products,
  searchInput,
  isAdmin
}) {
  const filteredProducts = Object.keys(products).reduce((acc, categoryName) => {
    const categoryProducts = products[categoryName];
    const filteredCategory = Object.keys(categoryProducts).reduce(
      (categoryAcc, subCategoryName) => {
        const subCategoryProducts = categoryProducts[subCategoryName];
        const filteredSubCategoryProducts = subCategoryProducts.filter(
          (product) =>
            product.nameDrink.toLowerCase().includes(searchInput.toLowerCase())
        );
        if (filteredSubCategoryProducts.length) {
          categoryAcc[subCategoryName] = filteredSubCategoryProducts;
        }
        return categoryAcc;
      },
      {}
    );

    if (Object.keys(filteredCategory).length) {
      acc[categoryName] = filteredCategory;
    }
    return acc;
  }, {});

  // Check if there are no filtered products and return the "not found" message if true
  if (Object.keys(filteredProducts).length === 0) {
    return (
      <div className="products-section__noStock-main">
        <img
          className="products-section__noStock-img"
          src={NoStockImg}
          alt=""
        />
        <h3 className="products-section__noStock-txt">
          No se encontraron coincidencias
        </h3>
      </div>
    );
  }

  // If there are products, render them as usual
  return (
    <div className="products-section">
      {Object.entries(filteredProducts).map(
        ([categoryName, categoryProducts]) => (
          <div key={categoryName} className="category-section">
            <h3 id={categoryName} className="products-section__title">
              {categoryName}
            </h3>
            <div className="products-list">
              {Object.entries(categoryProducts).map(
                ([subCategoryName, subCategoryProducts]) => (
                  <div key={subCategoryName} className="subcategory-section">
                    <h4 className="heading-secondary-sub heading-secondary-sub--upper">
                      {subCategoryName}
                    </h4>
                    {categoryName === 'comida' ? (
                      <div className="subcategory-products subcategory-products--foods">
                        {subCategoryProducts.map((product, index) => (
                          <FoodCardEdit
                            key={index}
                            add={true}
                            image={product.imageDrink}
                            name={product.nameDrink}
                            drinkMl={product.drinkMl}
                            price={product.priceDrink}
                            amount={product.amount}
                            descripcion={product.description}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="subcategory-products subcategory-products--drinks">
                        {subCategoryProducts.map((product, index) => (
                          <ProductsCardEdit
                            key={product._id}
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
                            price={product.finalPriceDrink}
                            type={product.typeDrink}
                            amount={product.amount}
                            id={product._id}
                            edit={isAdmin}
                            statusDrink={product.activeDrink}
                            recipe={product.recipe}
                            glassMl={product.drinkMl}
                            timeOrder={product.totalMinOrder}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}
