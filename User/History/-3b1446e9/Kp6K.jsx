import './SearchPage.scss';

import { ProductCard } from '../../global/Product_Card/Product_Card';
import { useSelector } from 'react-redux';
import NotFound from '../../global/NotFound/NotFound';

export default function SearchPage({ search }) {
  const products = useSelector((state) => state.partyUser.marketplace.products);

  const filteredProducts = products.filter(
    (prod) =>
      prod.nameDrink.toLowerCase().includes(search.toLowerCase()) &&
      prod.activeDrink === 'true'
  );

  return (
    <div className="search-page">
      {filteredProducts.length ? (
        filteredProducts.map((prod) => (
          <ProductCard
            add
            image={prod.imageDrink}
            name={prod.nameDrink}
            oldPrice={
              prod.priceDrink.toString() === prod.finalPriceDrink.toString()
                ? false
                : prod.priceDrink
            }
            discount={prod.discountDrink}
            status={prod.activeDrink}
            price={prod.finalPriceDrink}
            type={prod.typeDrink}
            amount={prod.amount}
            id={prod.nameDrink}
          />
        ))
      ) : (
        <div className="search-page__error">
          <NotFound />
        </div>
      )}
    </div>
  );
}
