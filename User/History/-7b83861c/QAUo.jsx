import React from "react";
import "./search-bar.scss";
const SearchBar = () => {
  return (
    <form>
      <input type="text" required placeholder="YouTube Url..." />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
