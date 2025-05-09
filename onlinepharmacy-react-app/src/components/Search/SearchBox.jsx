// src/components/Search/SearchBox.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <input
      type="search"
      value={query}
      onChange={handleChange}
      placeholder="Search medicines..."
      className="w-full p-2 border rounded"
    />
  );
};

SearchBox.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchBox;
