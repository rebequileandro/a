import './small_product_card.scss';

const SmallProductCard = ({
  image,
  name,
  price,
  oldPrice,
  id,
  edit,
  add,
  setIsEdit,
  type
}) => {
  return (
    <div className="small-product-card">
      <div className="small-product-card__bg" />
      <div className="small-product-card__information">
        <img className="small-product-card__image" src={image} alt="bebida" />
        <h3 className="small-product-card__name">{name}</h3>
      </div>
      <button className="small-product-card__add">Añadir</button>
    </div>
  );
};

export default SmallProductCard;
