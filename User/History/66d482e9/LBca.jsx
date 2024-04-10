import './SearchClub.scss';

import { useEffect, useState } from 'react';

import React from 'react';
import { setClub } from '../../../redux/slices/partyUser/club';
import { useDispatch } from 'react-redux';
import ClubSelector from '../../../components/partyUser/ClubSelector/ClubSelector';

const { REACT_APP_API } = process.env;

export default function SearchClub() {
  const [search, setSearch] = useState('');
  const [clubs, setClubs] = useState([]);
  const [shownClubs, setShownClubs] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const rawResponse = await fetch(REACT_APP_API + '/fiestero/party/all');
      const content = await rawResponse.json();
      setClubs(content);
      setShownClubs(content);
    })();
  }, []);

  const handleClubSelection = (club) => {
    dispatch(setClub(club));
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
    <div className="search-club layout-primary">
      <h1>¿Dónde salís hoy?</h1>
      <ClubSelector />
    </div>
  );
}
