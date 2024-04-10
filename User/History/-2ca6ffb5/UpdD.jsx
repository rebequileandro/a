import './activities.scss';
import { Header } from '../../../components/global/Header/Header';
import { TabbarOrganizer } from '../../../components/owner-manager/Tabbar/TabbarOrganizer';
import noActivities from '../../../assets/global/activities.svg';

const Activities = () => {
  return (
    <>
      <Header title={'Mis actividades'} />
      <div className="organizer-activities-container layout-primary">
        <img src={noActivities} alt="no hay actividades" />
        <h2 className="heading-secondary-main">
          Próximamente en esta sección vas a poder ver el detalle de todas las
          modificaciones y movimientos que hayas hecho en tus locales.
        </h2>
        <TabbarOrganizer />
      </div>
    </>
  );
};
export default Activities;
