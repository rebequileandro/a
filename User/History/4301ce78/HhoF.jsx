import './notification_card.scss';
import { useEffect, useRef, useState } from 'react';
import { formatDate } from '../../../utils/format-date';
import { formatHour } from '../../../utils/format-hour';
import trash from '../../../assets/global/icon_trash.svg';
import { useDispatch } from 'react-redux';
import { removeNotification } from '../../../redux/slices/global/notifications';
const NotificationCard = ({ image, title, message, date, id }) => {
  const notificationRef = useRef();
  const [slide, setSlide] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    let start;
    const halfWidth = notificationRef.current?.clientWidth / 2;
    notificationRef.current.addEventListener('touchstart', (e) => {
      start = e.targetTouches[0].pageX;
    });
    notificationRef.current.addEventListener('touchmove', (e) => {
      if (e.targetTouches[0].pageX - start < -10) {
        window.ontouchmove = e.preventDefault();
      }
      if (e.targetTouches[0].pageX - start < 0) {
        setSlide(e.targetTouches[0].pageX - start);
      }
      if (
        parseInt(e.changedTouches[0].pageX - start) === parseInt(-halfWidth)
      ) {
        console.log('touch move', e);
        navigator.vibrate(200);
      }
    });
    notificationRef.current.addEventListener('touchend', (e) => {
      if (e.changedTouches[0].pageX - start < `-${halfWidth}`) {
        setSlide(`-${notificationRef.current?.clientWidth}`);
        navigator.vibrate(100);
        setTimeout(() => {
          dispatch(removeNotification(id));
        }, 200);
      } else {
        setSlide(0);
      }
    });
  }, []);
  return (
    <div className="notification-wrapper">
      <div
        ref={notificationRef}
        className="notification_card"
        style={{ transform: `translateX(${slide}px)` }}
      >
        <div className="notification_card__image-wrapper">
          <img className="notification_card__image" src={image} alt="club" />
        </div>
        <div className="notification_card__content">
          <h2 className="heading-tertiary--main">{title}</h2>
          <p className="notification_card__message">{message}</p>
          <p className="notification_card__date">
            {formatDate(date)}, {formatHour(date)}
          </p>
        </div>
      </div>
      <div className="notification_remove">
        <img
          className={`notification_remove__trash-icon ${
            slide < -40 ? 'show' : null
          }`}
          src={trash}
          alt="trash"
        />
      </div>
    </div>
  );
};

export default NotificationCard;
