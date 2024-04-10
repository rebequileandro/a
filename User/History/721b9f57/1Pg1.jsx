import './Activities.scss';

export default function Activities({ activities }) {
  const thisWeekActivities = activities
    .filter((act) => {
      const date = new Date(act.created);
      const now = new Date();
      const timestamp = date.getTime();
      const nowTimestamp = now.getTime();
      return nowTimestamp - timestamp < 604800000;
    })
    .reverse();

  const previousActivities = activities
    .filter((act) => {
      const date = new Date(act.created);
      const now = new Date();
      const timestamp = date.getTime();
      const nowTimestamp = now.getTime();
      return nowTimestamp - timestamp > 604800000;
    })
    .reverse();

  return (
    <div className="activities">
      {previousActivities.length ? (
        <>
          <h3 className="activities__divider">Anteriores</h3>
          <div className="activities__container">
            {previousActivities.map((activity) => (
              <div className="activities__row" key={activity.idOrder}>
                <div className="activities__image">
                  <img src={activity.imageParty} alt="" />
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
        </>
      ) : null}
    </div>
  );
}
