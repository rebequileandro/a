import './activities.scss';
import { Header } from '../../../components/global/Header/Header';
import { TabbarOrganizer } from '../../../components/owner-manager/Tabbar/TabbarOrganizer';
import noActivities from '../../../assets/global/activities.svg';

const Activities = () => {
  return (
    <>
      <Header />
      <div className="organizer-activities-container layout-primary">
        <TabbarOrganizer />
      </div>
    </>
  );
};
export default Activities;
