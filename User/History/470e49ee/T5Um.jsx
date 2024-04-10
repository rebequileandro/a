import { INITIAL_LABELS } from '../../../../redux/slices/partyUser/checkout';
import { formatNumber } from '../../../../utils/formatNumber';
import './OrderSummary.scss';

export default function OrderSummary({ total, floorBar }) {
  return (
    <div className="order-summary">
      <h2 className="heading-secondary-main">Detalle de tu orden:</h2>

      {/* Order details */}
      <div className="order-details">
        {/* Subtotal */}
        <div className="detail">
          <h3 className="heading-tertiary-main details--title">Subtotal:</h3>
          <h3 className="heading-tertiary-main details">
            €{formatNumber(total)}
          </h3>
        </div>

        {/* Fee */}
        <div className="detail">
          <h3 className="heading-tertiary-main details--title">
            Fee servicio:
          </h3>
          <div className="fee-price-container">
            <h3 className="heading-tertiary-main fee-old-price">
              €{formatNumber(Math.round((4 * parseInt(total)) / 100))}
            </h3>
            <h3 className="heading-tertiary-main details">€0</h3>
          </div>
        </div>

        {/* Bar */}
        {floorBar?.bar === INITIAL_LABELS.bar ? null : (
          <div className="detail detail--bar-selected">
            <h3 className="heading-tertiary-main details--title">
              Retira por:
            </h3>
            <h3 className="heading-tertiary-main details margin">
              {floorBar?.bar}
            </h3>
          </div>
        )}
      </div>

      {/*  */}
      <div className="total-price">
        <h3 className="heading-tertiary-sub details">Total:</h3>
        <h3 className="heading-tertiary-sub details">€{formatNumber(total)}</h3>
      </div>
    </div>
  );
}
