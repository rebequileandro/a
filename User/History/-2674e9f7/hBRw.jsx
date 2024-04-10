import './MyActivities.scss';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Header } from '../../../components/global/Header/Header';
import Activities from '../../../components/partyUser/Activities/Activities';
import Tabbar from '../../../components/partyUser/Tabbar/Tabbar';
import axios from 'axios';
import InputDiv from '../../../components/global/InputDiv/InputDiv';
import { searchActivitie } from './activities';
import NotFound from '../../../components/global/NotFound/NotFound';
import fakeData from './fake-data.json';
import { Loading } from '../../../components/global/Loader/Loader';
import getCookie from '../../../utils/getCookie';
export default function MyActivities() {
  const currentUser = useSelector((state) => state.global.user);
  const [activities, setActivities] = useState([]);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);

  const getActivities = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/partyuser/activities/lastvisitedplaces/${currentUser._id}`,
        {
          headers: {
            'auth-token': getCookie('__token')
          }
        }
      );
      setActivities(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getActivities().then(() => setLoading(false));
  }, []);
  const thisWeekActivities = activities //fakeData
    .filter((act) => {
      const date = new Date(act.date);
      const now = new Date();
      const timestamp = date.getTime();
      const nowTimestamp = now.getTime();
      return nowTimestamp - timestamp < 604800000;
    })
    .reverse();
  const previousActivities = activities //fakeData
    .filter((act) => {
      const date = new Date(act.date);
      const now = new Date();
      const timestamp = date.getTime();
      const nowTimestamp = now.getTime();
      return nowTimestamp - timestamp > 604800000;
    })
    .reverse();
  console.log('ACTIVITIES', previousActivities);
  return (
    <>
      <Header notification />
      <div className="my-activities layout-primary">
        <>
          <InputDiv
            inputProps={{
              type: 'text',
              placeholder: 'Buscar'
            }}
            setState={(e) => searchActivitie(e, setSearch, activities)}
            search
          />
          {loading ? (
            <Loading />
          ) : (
            <>
              {search.length ? (
                typeof search === 'string' ? (
                  <NotFound />
                ) : (
                  <Activities activities={search} />
                )
              ) : (
                <>
                  {thisWeekActivities.length ? (
                    <div className="my-activities__container-activities">
                      <h2 className="heading-secondary-main">Esta Semana</h2>
                      <Activities activities={thisWeekActivities} />
                    </div>
                  ) : null}
                  {previousActivities.length ? (
                    <div className="my-activities__container-activities">
                      <h2 className="heading-secondary-main">Anteriores</h2>
                      <Activities activities={previousActivities} />
                    </div>
                  ) : null}
                </>
              )}
            </>
          )}
        </>
      </div>
      <Tabbar />
    </>
  );
}
