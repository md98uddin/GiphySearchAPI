import React from "react";

const SelectOptions = ({filterSelection, handleChange}) => {
  return (
    <select
    value={filterSelection}
    onChange={handleChange}
    >
    <option value="relevance">Relevance</option>
    <option value="recent">Most Recent</option>
    <option value="oldest">Oldest</option>
  </select>
  );
};

export default SelectOptions;
