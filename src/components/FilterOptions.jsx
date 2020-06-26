import React from "react";

const FilterOptions = () => {
  return (
    <select id="select-numbers">
      <option value="none">FILTER</option>
      <option value="recent">TOP 20</option>
      <option value="oldest">TOP 100</option>
    </select>
  );
};

export default FilterOptions;
