import "./SearchClub.scss";

import { useEffect, useState } from "react";

import ClubSelector from "../../../components/ClubSelector/ClubSelector";
import InputDiv from "../../../components/InputDiv/InputDiv";
import React from "react";
import { setClub } from "../../../redux/store/slices/club";
import { useDispatch } from "react-redux";

const { REACT_APP_API } = process.env;

export default function SearchClub() {
  const [search, setSearch] = useState("");
  const [clubs, setClubs] = useState([]);
  const [shownClubs, setShownClubs] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const rawResponse = await fetch(REACT_APP_API + "/fiestero/party/all");
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
    <div className="search-club">
      <h1>¿Dónde salís hoy?</h1>
      <ClubSelector />
    </div>
  );
}
