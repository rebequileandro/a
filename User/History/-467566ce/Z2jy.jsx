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
    </div>
  );
};

export default SmallProductCard;
