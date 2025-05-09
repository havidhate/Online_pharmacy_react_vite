// src/components/Filters/CategoryFilter.jsx
import React from "react";
import PropTypes from "prop-types";

const CategoryFilter = ({ categories = [], onChange }) => {
  const toggle = (cat) => {
    const next = categories.includes(cat)
      ? categories.filter((c) => c !== cat)
      : [...categories, cat];
    onChange(next);
  };

  const allCats = ["Pain Relief", "Antibiotics", "Vitamins", "Daily Care"];
  return (
    <div>
      <h3 className="font-semibold mb-2">Category</h3>
      {allCats.map((cat) => (
        <label key={cat} className="flex items-center">
          <input
            type="checkbox"
            checked={categories.includes(cat)}
            onChange={() => toggle(cat)}
            className="mr-2"
          />
          {cat}
        </label>
      ))}
    </div>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
