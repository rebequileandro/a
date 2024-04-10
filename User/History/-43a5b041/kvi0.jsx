import React, { useEffect } from 'react';
import './notifications.scss';
import { Header } from '../../../components/global/Header/Header';
import { useNavigate } from 'react-router-dom';
import notificationsFake from './notification-fake.json';
import { useDispatch, useSelector } from 'react-redux';
import { getNotifications } from '../../../redux/slices/global/notifications';
import NotificationCard from '../../../components/global/Notification_Card/NotificationCard';
import { getCurrentUser } from '../../../redux/slices/global/user';
const Notifications = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);
  const notifications = useSelector(
    (state) => state.global.notifications.notifications
  );
  useEffect(() => {
    dispatch(getNotifications({ idUser: currentUser._id }));
  }, []);
  const thisWeekNotifications = notifications?.filter((e) => {
    const timestamp = new Date(e.date).getTime();
    const nowTimestamp = new Date().getTime();
    return nowTimestamp - timestamp < 604800000;
  });
  const previousNotifications = notifications?.filter((e) => {
    const timestamp = new Date(e.date).getTime();
    const nowTimestamp = new Date().getTime();
    return nowTimestamp - timestamp > 604800000;
  });
  return (
    <>
      <Header backbutton={() => navigate(-1)} />
      <div className="notifications-page layout-primary">
        {thisWeekNotifications?.length ? (
          <section className="notifications-page__section-this-week">
            <h2 className="heading-secondary-main notifications-page__sub-title">
              Esta semana
            </h2>
            {thisWeekNotifications?.map((e) => (
              <NotificationCard
                key={e.id}
                title={e.title}
                message={e.description}
                image={e.icon}
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
                key={e.id}
                title={e.title}
                message={e.message}
                image={e.icon}
                date={e.date}
                id={e.id}
              />
            ))}
          </section>
        ) : null}
      </div>
    </>
  );
};

export default Notifications;
