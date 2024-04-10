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
        <TabbarOrganizer />
      </div>
    </>
  );
};
export default Activities;
