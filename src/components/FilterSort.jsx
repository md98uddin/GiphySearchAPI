import React from "react";
import SelectOptions from "./SortOptions";
import FilterOptions from "./FilterOptions";

const FilterSort = () => {
  return (
    <div id="select-filter">
      <SelectOptions />
      <FilterOptions />
    </div>
  );
};

export default FilterSort;
