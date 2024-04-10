import React from "react";
import "./search-bar.scss";
const SearchBar = ({ value, onChange, onSubmit }) => {
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
        Search
      </button>
    </form>
  );
};

export default SearchBar;
