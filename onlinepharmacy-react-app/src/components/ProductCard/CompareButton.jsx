// src/components/ProductCard/CompareButton.jsx
import React from "react";
import PropTypes from "prop-types";

const CompareButton = ({ product, onCompare }) => (
  <button
    onClick={() => onCompare?.(product)}
    className="mt-2 px-3 py-1 border rounded hover:bg-gray-100"
  >
    Compare
  </button>
);

CompareButton.propTypes = {
  product: PropTypes.object.isRequired,
  onCompare: PropTypes.func,
};

export default CompareButton;
