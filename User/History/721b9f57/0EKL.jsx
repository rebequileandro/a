import { formatDate } from '../../../utils/format-date';
import './Activities.scss';

export default function Activities({ activities }) {
  return (
    <div className="activities">
      {activities.length ? (
        <div className="activities__container">
          {activities.map((activity) => (
            <div className="activities__row" key={activity.idOrder}>
              <div className="activities__club">
                <div className="activities__image">
                  <img src={activity.imageParty} alt="club" />
                </div>
                <div className="activities__content">
                  <h3 className="heading-tertiary">
                    {activity.namePartyPayment}
                  </h3>
                  <p className="activities__date">
                    {formatDate(activity.created)}
                  </p>
                </div>
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
