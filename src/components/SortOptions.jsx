import React from "react";

const SelectOptions = () => {
  return (
    <select>
      <option value="none">SORT BY</option>
      <option value="recent">Most Recent</option>
      <option value="oldest">Oldest</option>
    </select>
  );
};

export default SelectOptions;
