import './small_product_card.scss';

const SmallProductCard = ({ image, name, price, oldPrice, id, add, type }) => {
  return (
    <div className="small-product-card">
      <div className="small-product-card__bg" />
      <div className="small-product-card__information">
        <img className="small-product-card__image" src={image} alt="bebida" />
        <h3 className="small-product-card__name">{name}</h3>
        <div>
          <h3>{oldPrice}</h3>
          <h3>{price}</h3>
        </div>
      </div>
      <button className="small-product-card__add">Añadir</button>
    </div>
  );
};

export default SmallProductCard;
