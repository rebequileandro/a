import { formatDate } from '../../../utils/format-date';
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
                <div className="activities__top">
                  <h3 className="heading-tertiary">
                    {activity.namePartyPayment}
                  </h3>
                  <span>${activity.total}</span>
                </div>
                <p className="activities__date">
                  {formatDate(activity.created)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
