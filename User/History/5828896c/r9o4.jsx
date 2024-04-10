import React from "react";
import "./search-bar.scss";
import Loader from "../Loader/Loader";
const SearchBar = ({ value, onChange, onSubmit, searching }) => {
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <input
        className="input"
        type="text"
        required
        placeholder="YouTube Url..."
        value={value}
        onChange={onChange}
      />
      <button type="submit" className="btn btn--primary search-bar__btn">
        {searching ? <Loader /> : "Search"}
      </button>
    </form>
  );
};

export default SearchBar;
