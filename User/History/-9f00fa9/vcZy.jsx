import './ClubSelector.scss';
import { useEffect, useState } from 'react';
import InputDiv from '../../global/InputDiv/InputDiv';
import LoadingAnimation from '../../../assets/loading.json';
import Lottie from 'lottie-react';
import { getAllDrinks } from '../../../redux/slices/storeProducts';
import { setClub } from '../../../redux/slices/club';
import { useDispatch } from 'react-redux';

const { REACT_APP_API } = process.env;

export default function ClubSelector({ closePopup }) {
  const [search, setSearch] = useState('');
  const [clubs, setClubs] = useState([]);
  const [shownClubs, setShownClubs] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const rawResponse = await fetch(REACT_APP_API + '/fiestero/party/all');
      const content = await rawResponse.json();
      setClubs(content);
      setShownClubs(content);
      setLoading(false);
    })();
  }, []);

  const handleClubSelection = (club) => {
    dispatch(setClub(club));
    dispatch(getAllDrinks(club._id));

    if (closePopup) {
      closePopup();
    }
  };

  useEffect(() => {
    if (search) {
      setShownClubs(
        clubs.filter((club) => club.nameParty.toLowerCase().includes(search))
      );
    } else {
      setShownClubs(clubs);
    }
  }, [search]);

  return (
    <div className="club-selector">
      <InputDiv
        inputProps={{ placeholder: 'Buscar', name: 'search_club' }}
        setState={setSearch}
      />

      <div className="clubs-list">
        {loading ? (
          <Lottie
            animationData={LoadingAnimation}
            loop={true}
            autoplay={true}
            className="loading-animation"
          />
        ) : (
          shownClubs.map((club) => (
            <div
              key={club._id}
              className="club-card"
              onClick={() => handleClubSelection(club)}
            >
              <div className="image">
                <img src={club.imageParty} alt="" />
              </div>
              <div className="content">
                <h2>{club.nameParty}</h2>
                <p>{club.addressParty}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
