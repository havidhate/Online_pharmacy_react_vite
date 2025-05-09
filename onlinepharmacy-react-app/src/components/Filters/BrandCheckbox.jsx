// src/components/Filters/BrandCheckbox.jsx
import React from "react";
import PropTypes from "prop-types";

const BrandCheckbox = ({ brands = [], onChange }) => {
  const toggle = (b) => {
    const next = brands.includes(b)
      ? brands.filter((x) => x !== b)
      : [...brands, b];
    onChange(next);
  };

  const allBrands = ["Pfizer", "Moderna", "GSK", "Johnson & Johnson"];
  return (
    <div>
      <h3 className="font-semibold mb-2">Brand</h3>
      {allBrands.map((b) => (
        <label key={b} className="flex items-center">
          <input
            type="checkbox"
            checked={brands.includes(b)}
            onChange={() => toggle(b)}
            className="mr-2"
          />
          {b}
        </label>
      ))}
    </div>
  );
};

BrandCheckbox.propTypes = {
  brands: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};

export default BrandCheckbox;
