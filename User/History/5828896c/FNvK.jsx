import React from "react";
import "./search-bar.scss";
import Loader from "../Loader/Loader";
const SearchBar = ({ value, onChange, onSubmit, searching }) => {
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <div className="search-bar__input-wrapper">
        <input
          className="input"
          type="text"
          required
          placeholder="YouTube Url..."
          value={value}
          onChange={onChange}
        />
        {value && (
          <button
            className="search-bar__reset-btn"
            type="reset"
            onClick={() =>
              onChange({
                target: {
                  value: "",
                },
              })
            }
          >
            <svg
              width="100%"
              height="100%"
              viewBox="-3.5 0 19 19"
              xmlns="http://www.w3.org/2000/svg"
              class="cf-icon-svg"
            >
              <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
            </svg>
          </button>
        )}
      </div>
      <button type="submit" className="btn btn--primary search-bar__btn">
        {true ? (
          <Loader />
        ) : (
          <svg
            fill="#fff"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
          </svg>
        )}
      </button>
    </form>
  );
};

export default SearchBar;
