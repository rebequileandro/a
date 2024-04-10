import './Activities.scss';

export default function Activities({ activities }) {
  return (
    <div className="activities">
      {activities.length ? (
        <div className="activities__container">
          {activities.map((activity) => (
            <div className="activities__row" key={activity.idOrder}>
              <div className="activities__image">
                <img src={activity.imageParty} alt="club" />
              </div>
              <div className="activities__content">
                <h3 className="activities__title">
                  {activity.namePartyPayment}
                </h3>
                <p className="activities__description">
                  {activity.orderPayment
                    .map((prod) => `${prod.quantity} ${prod.title}`)
                    .join(', ')}
                </p>
              </div>
              <div className="activities__value">
                <span>${activity.total}</span>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
