import React from "react";

const SearchBar = ({ setSearchTerm, onSearchTermSubmit, searchTerm }) => {
  return (
    <div
      className="searchbar"
      style={{ marginTop: "1vh", textAlign: "center" }}
    >
      <input
        placeholder="Search by keywords "
        id="searchTerm"
        onChange={setSearchTerm}
        style={{ width: 300 }}
      />
      {searchTerm && (
        <button
          className="btn-primary"
          onClick={() => onSearchTermSubmit()}
          style={{ width: 50, marginLeft: 5 }}
        >
          🔍
        </button>
      )}
    </div>
  );
};

export default SearchBar;
