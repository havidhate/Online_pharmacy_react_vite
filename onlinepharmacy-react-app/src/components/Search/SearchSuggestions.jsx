// src/components/Search/SearchSuggestions.jsx
import React from "react";
import PropTypes from "prop-types";

const SearchSuggestions = ({ suggestions, onSelect }) => (
  <ul className="border rounded bg-white mt-1">
    {suggestions.map((s) => (
      <li
        key={s.id}
        onClick={() => onSelect(s.name)}
        className="p-2 hover:bg-gray-100 cursor-pointer"
      >
        {s.name}
      </li>
    ))}
  </ul>
);

SearchSuggestions.propTypes = {
  suggestions: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default SearchSuggestions;
