import React from "react";

const SearchForm = () => {
  return (
    <div>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form">
        <input className="search-input" type="text" />
        <button type="button" className="btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
