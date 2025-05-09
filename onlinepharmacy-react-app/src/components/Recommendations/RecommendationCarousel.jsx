// src/components/Recommendations/RecommendationCarousel.jsx
import React from "react";
import PropTypes from "prop-types";

const RecommendationCarousel = ({ items = [] }) => (
  <div className="flex overflow-x-auto space-x-4">
    {items.map((i) => (
      <div key={i.id} className="min-w-[200px] border rounded p-2">
        <img src={i.image} alt={i.name} className="h-32 mx-auto" />
        <h5 className="mt-2">{i.name}</h5>
      </div>
    ))}
  </div>
);

RecommendationCarousel.propTypes = {
  items: PropTypes.array,
};

export default RecommendationCarousel;
