import { Fragment } from 'react';
import { formatDate } from '../../../utils/format-date';
import './Activities.scss';

export default function Activities({ activities }) {
  return (
    <div className="activities">
      {activities.length ? (
        <div className="activities__container">
          {activities.map((activity, index) => (
            <Fragment key={index}>
              <div className="activities__row">
                <div className="activities__club">
                  <div className="activities__image">
                    <img src={activity.imageParty} alt="club" />
                  </div>
                  <div className="activities__content">
                    <h3 className="heading-tertiary--main">
                      {activity.namePartyPayment}
                    </h3>
                    <p className="activities__date">
                      {formatDate(activity.created)}
                    </p>
                  </div>
                </div>
                <div className="activities__value-container">
                  <span className="activities__price">-${activity.total}</span>
                </div>
              </div>
              {index !== activities.length - 1 && (
                <hr className="activities__line" />
              )}
            </Fragment>
          ))}
        </div>
      ) : null}
    </div>
  );
}
