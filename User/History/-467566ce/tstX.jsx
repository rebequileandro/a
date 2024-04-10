import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../redux/slices/partyUser/marketplace';
import './small_product_card.scss';

const SmallProductCard = ({ image, name, price, oldPrice, id, type }) => {
  const dispatch = useDispatch();
  return (
    <div className="small-product-card">
      <div className="small-product-card__bg" />
      <div className="small-product-card__information">
        {type === 'packs' ? (
          <div className="small-product-card__pack-image-wrapper">
            {image
              .map((img, i) => (
                <img key={i} className="pack-image" src={img} alt="combo" />
              ))
              .reverse()}
          </div>
        ) : (
          <img className="small-product-card__image" src={image} alt="bebida" />
        )}
        <h3 className="small-product-card__name">
          {type === 'packs' ? 'combo' : name.split(' ')[0]}
        </h3>
        <div className="small-product-card__prices">
          {oldPrice && (
            <h3 className="small-product-card__old-price">{oldPrice}</h3>
          )}
          <h3 className="small-product-card__current-price">{price}</h3>
        </div>
      </div>
      <button
        className="small-product-card__add"
        onClick={() => dispatch(addToCart({ id }))}
      >
        Añadir
      </button>
    </div>
  );
};

export default SmallProductCard;
