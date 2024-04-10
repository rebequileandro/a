import "./SearchPage.scss";

import { Card } from "../../Card/Card";
import { useSelector } from "react-redux";

export default function SearchPage({ search }) {
  const products = useSelector((state) => state.store.products);

  const filteredProducts = products.filter((prod) =>
    prod.nameDrink.toLowerCase().includes(search.toLowerCase()) && prod.activeDrink === 'true'
  );

  return (
    <div className="search-page">
      {filteredProducts.map((prod) => (
        <div className="product-card">
          <Card
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
        </div>
      ))}
    </div>
  );
}
