import { Fragment } from 'react';
import { formatDate } from '../../../utils/format-date';
import { formatNumber, formatPrice } from '../../../utils/formatNumber';
import './Activities.scss';
import { useSelector } from 'react-redux';
import { getCurrentClub } from '../../../redux/slices/partyUser/club';

export default function Activities({ activities, search }) {
  const club = useSelector(getCurrentClub);
  return (
    <div className="activities">
      {activities.length ? (
        <div className="activities__container">
          {activities
            .filter(
              (activity) =>
                activity.nameParty
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                activity.total.toLowerCase().includes(search.toLowerCase()) ||
                formatDate(activity.date)
                  .toLowerCase()
                  .includes(search.toLowerCase())
            )
            ?.map((activity, index) => (
              <Fragment key={index}>
                <div className="activities__row">
                  <div className="activities__club">
                    <div className="activities__image">
                      <img
                        src={activity.imageParty}
                        alt="club"
                        loading="lazy"
                      />
                    </div>
                    <div className="activities__content">
                      <h3 className="heading-tertiary-main">
                        {activity.title}
                      </h3>
                      <p className="activities__date">
                        {formatDate(activity.date)}
                      </p>
                    </div>
                  </div>
                  <div className="activities__value-container">
                    <span className="activities__price">
                      -{formatPrice(activity.total, '$')}
                    </span>
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
