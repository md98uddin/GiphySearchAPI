import React from "react";

const FilterOptions = () => {
  return (
    <select>
      <option value="none">FILTER</option>
      <option value="recent">TOP 20</option>
      <option value="oldest">TOP 100</option>
    </select>
  );
};

export default FilterOptions;
