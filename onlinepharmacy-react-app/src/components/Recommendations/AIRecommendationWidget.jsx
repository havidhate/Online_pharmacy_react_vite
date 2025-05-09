// src/components/Recommendations/AIRecommendationWidget.jsx
import React, { useEffect, useState } from "react";
import { fetchAIRecommendations } from "../../services/catalogService";

const AIRecommendationWidget = () => {
  const [recs, setRecs] = useState([]);
  useEffect(() => {
    fetchAIRecommendations().then(setRecs);
  }, []);
  return <RecommendationCarousel items={recs} />;
};

export default AIRecommendationWidget;
