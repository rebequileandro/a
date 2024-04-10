import React from "react";
import "./search-bar.scss";
const SearchBar = ({ value, onChange }) => {
  return (
    <form className="search-bar">
      <input
        className="input"
        type="text"
        required
        placeholder="YouTube Url..."
        value={value}
        onChange={onChange}
      />
      <button type="submit" className="btn">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
