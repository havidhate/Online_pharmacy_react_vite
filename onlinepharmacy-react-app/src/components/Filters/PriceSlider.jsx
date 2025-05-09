// src/components/Filters/PriceSlider.jsx
import React from "react";
import PropTypes from "prop-types";

const PriceSlider = ({ range = [0, 1000], onChange }) => {
  const [min, max] = range;
  return (
    <div>
      <h3 className="font-semibold mb-2">Price Range</h3>
      <input
        type="range"
        min="0"
        max="2000"
        value={min}
        onChange={(e) => onChange([+e.target.value, max])}
      />
      <input
        type="range"
        min="0"
        max="2000"
        value={max}
        onChange={(e) => onChange([min, +e.target.value])}
      />
      <div>{`$${min} – $${max}`}</div>
    </div>
  );
};

PriceSlider.propTypes = {
  range: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};

export default PriceSlider;
