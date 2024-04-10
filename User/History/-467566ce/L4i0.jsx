import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../../redux/slices/partyUser/marketplace';
import { formatNumber, formatPrice } from '../../../../utils/formatNumber';
import './small_product_card.scss';
import { getCurrentClub } from '../../../../redux/slices/partyUser/club';

const SmallProductCard = ({ image, name, price, oldPrice, id, type }) => {
  const dispatch = useDispatch();
  const club = useSelector(getCurrentClub);

  return (
    <div className="small-product-card">
      <div className="small-product-card__bg" />

      <div className="small-product-card__information">
        {type === 'packs' ? (
          <div className="small-product-card__pack-image-wrapper">
            {image
              .map((img, i) => (
                <img
                  key={i}
                  className="pack-image"
                  src={img}
                  alt="combo"
                  loading="lazy"
                />
              ))
              .reverse()}
          </div>
        ) : (
          <img
            className="small-product-card__image"
            src={image}
            alt="bebida"
            loading="lazy"
          />
        )}
        <h3 className="small-product-card__name">
          {type === 'packs' ? 'combo' : name.split(' ')[0]}
        </h3>
        <div className="small-product-card__prices">
          {oldPrice && (
            <h3 className="small-product-card__old-price">
              {formatPrice(oldPrice, club.currency)}
            </h3>
          )}
          <h3 className="small-product-card__current-price">
            {formatPrice(price, club.currency)}
          </h3>
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
