import { useEffect } from 'react';
import './notifications.scss';
import { Header } from '../../../components/global/Header/Header';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getNotifications } from '../../../redux/slices/global/notifications';
import NotificationCard from '../../../components/global/Notification_Card/NotificationCard';
import { getCurrentUser } from '../../../redux/slices/global/user';
import notificationsIcons from '../../../assets/icons/notification.svg';
const Notifications = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);
  const notifications = useSelector(
    (state) => state.global.notifications.notifications
  );
  useEffect(() => {
    dispatch(getNotifications(currentUser._id));
  }, []);
  const thisWeekNotifications = notifications
    ?.filter((e) => {
      const timestamp = new Date(e.date).getTime();
      const nowTimestamp = new Date().getTime();
      return nowTimestamp - timestamp < 604800000;
    })
    .reverse();
  const previousNotifications = notifications
    ?.filter((e) => {
      const timestamp = new Date(e.date).getTime();
      const nowTimestamp = new Date().getTime();
      return nowTimestamp - timestamp > 604800000;
    })
    .reverse();
  return (
    <>
      <Header backbutton={() => navigate(-1)} />
      <div className="notifications-page layout-primary">
        {notifications.length ? (
          <>
            {thisWeekNotifications?.length ? (
              <section className="notifications-page__section-this-week">
                <h2 className="heading-secondary-main notifications-page__sub-title">
                  Esta semana
                </h2>
                {thisWeekNotifications?.map((e) => (
                  <NotificationCard
                    key={e.idNotification}
                    title={e.title}
                    message={e.description}
                    image={e.image}
                    date={e.date}
                    id={e.idNotification}
                  />
                ))}
              </section>
            ) : null}
            {previousNotifications.length ? (
              <section className="notifications-page__section-previous">
                <h2 className="heading-secondary-main notifications-page__sub-title">
                  Anteriores
                </h2>
                {previousNotifications?.map((e) => (
                  <NotificationCard
                    key={e.idNotification}
                    title={e.title}
                    message={e.message}
                    image={e.icon}
                    date={e.date}
                    id={e.idNotification}
                  />
                ))}
              </section>
            ) : null}
          </>
        ) : (
          <div className="notifications-page__no-notifications">
            <img
              className="notifications-page__no-notifications__icon"
              src={notificationsIcons}
              alt="no-notification"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Notifications;
