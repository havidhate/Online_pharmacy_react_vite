import { useState } from "react";
import { debounce } from "lodash";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInput = debounce((value) => {
    onSearch(value);
  }, 400);

  const handleChange = (e) => {
    setQuery(e.target.value);
    handleInput(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search medicines..."
      className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
    />
  );
};

export default SearchBar;
