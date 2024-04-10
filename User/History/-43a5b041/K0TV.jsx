import React, { useEffect } from 'react';
import './notifications.scss';
import { Header } from '../../../components/global/Header/Header';
import { useNavigate } from 'react-router-dom';
import notificationsFake from './notification-fake.json';
import { useDispatch, useSelector } from 'react-redux';
import { setNotifications } from '../../../redux/slices/global/notifications';
import NotificationCard from '../../../components/global/Notification_Card/NotificationCard';
const Notifications = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getNotifications = useSelector(
    (state) => state.global.notifications.notifications
  );
  useEffect(() => {
    dispatch(setNotifications(notificationsFake));
  }, []);
  const thisWeekNotifications = getNotifications.filter((e) => {
    const timestamp = new Date(e.date).getTime();
    const nowTimestamp = new Date().getTime();
    return nowTimestamp - timestamp < 604800000;
  });
  const previousNotifications = getNotifications.filter((e) => {
    const timestamp = new Date(e.date).getTime();
    const nowTimestamp = new Date().getTime();
    return nowTimestamp - timestamp > 604800000;
  });
  return (
    <>
      <Header backbutton={() => navigate(-1)} />
      <div className="notifications-page layout-partyUser">
        <section className="notifications-page__select">
          <h2 className="heading-secondary--main notifications-page__sub-title">
            esta semana
          </h2>
          {thisWeekNotifications?.map((e) => (
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
        <section className="notifications-page__section-previous">
          <h2 className="heading-secondary--main notifications-page__sub-title">
            anteriores
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
      </div>
    </>
  );
};

export default Notifications;
