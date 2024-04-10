import Popup_Options from '../Popup_Options/Popup_Options';
import { useEffect, useState } from 'react';

const Notification_Request_Permission = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          // El usuario ha concedido permiso para las notificaciones
          console.log('Notificaciones permitidas');
        } else if (permission === 'denied') {
          // El usuario ha bloqueado las notificaciones
          console.log('Notificaciones bloqueadas');
          setIsOpen(true);
        } else if (permission === 'default') {
          // El usuario aún no ha tomado una decisión
          console.log('Decisión pendiente');
          setIsOpen(true);
        }
      });
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
    />
  );
};

export default Notification_Request_Permission;
