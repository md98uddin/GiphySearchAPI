import React from "react";

const SortOptions = ({ filterSelection, handleChange }) => {
  return (
    <div>
      <select value={filterSelection} onChange={handleChange}>
        <option value="relevant">Relevant</option>
        <option value="recent">Recent</option>
      </select>
    </div>
  );
};

export default SortOptions;
