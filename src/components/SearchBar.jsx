import React from "react";

const SearchBar = ({
  setSearchTerm,
  onSearchTermSubmit,
  refreshTrending,
  searchTerm,
  gifSize,
}) => {
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
          onClick={() => onSearchTermSubmit(searchTerm, 24)}
          style={{
            width: 50,
            marginLeft: 5,
            boxShadow: "none",
            outline: "none",
          }}
        >
          🔍
        </button>
      )}
      <button
        className="btn-success"
        style={{
          width: 50,
          fontSize: 16,
          marginLeft: 2,
          boxShadow: "none",
          outline: "none",
        }}
        onClick={refreshTrending}
      >
        ⟳
      </button>
    </div>
  );
};

export default SearchBar;
