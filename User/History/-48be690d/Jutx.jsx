import Popup_Options from '../Popup_Options/Popup_Options';

const Notification_Request_Permission = () => {
  return (
    <Popup_Options
      isOpen={true}
      text="¿Quieres activar las notificaciones?"
      description="Te recomendamos activar esta opción para saber cuando tu orden esté lista "
    />
  );
};

export default Notification_Request_Permission;
