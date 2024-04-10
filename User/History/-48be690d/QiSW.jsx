import { useDispatch, useSelector } from 'react-redux';
import Popup_Options from '../Popup_Options/Popup_Options';
import { useEffect, useState } from 'react';
import { subscriptionNotification } from '../../../redux/slices/global/notifications';
import { urlBase64ToUint8Array } from '../../../utils/urlBase64';
import { getCurrentUser } from '../../../redux/slices/global/user';

const NotificationRequestPermission = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);

  const requestPermission = async () => {
    if (currentUser) {
      const registration = await navigator.serviceWorker?.ready;

      // const subscription = await registration.pushManager?.subscribe({
      //   userVisibleOnly: true,
      //   applicationServerKey: urlBase64ToUint8Array(
      //     process.env.REACT_APP_PUBLIC_VAPID_KEY
      //   )
      // });
      console.log('PREMISION', registration.pushManager);
      // dispatch(subscriptionNotification(currentUser._id, subscription));
      setIsOpen(false);
    }
  };
  const premissionStatus = async () => {
    const registration = await navigator.serviceWorker?.ready;
    console.log('permissionState:', registration.pushManager.permissionState());
  };
  useEffect(() => {
    if ('Notification' in window) {
      premissionStatus();
      // Notification.requestPermission().then((permission) => {
      //   if (permission === 'granted') {
      //     // El usuario ha concedido permiso para las notificaciones
      //     console.log('Notificaciones permitidas');
      //   } else if (permission === 'denied') {
      //     // El usuario ha bloqueado las notificaciones
      //     console.log('Notificaciones bloqueadas');
      //     setIsOpen(true);
      //   } else if (permission === 'default') {
      //     // El usuario aún no ha tomado una decisión
      //     console.log('Decisión pendiente');
      //     setIsOpen(true);
      //   }
      // });
    } else {
      // El navegador no admite la API de notificaciones
      console.log('API de notificaciones no compatible');
    }
  }, []);

  return (
    <Popup_Options
      isOpen={isOpen}
      text="¿Quieres activar las notificaciones?"
      description="Te recomendamos activar esta opción para poder avisarte cuando tu orden esté lista"
      option1="Cancelar"
      option2="Aceptar"
      action1={() => setIsOpen(false)}
      action2={requestPermission}
    />
  );
};

export default NotificationRequestPermission;
