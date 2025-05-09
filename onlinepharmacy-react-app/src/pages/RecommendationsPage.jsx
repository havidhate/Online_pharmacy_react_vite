// src/pages/RecommendationsPage.jsx
import React from "react";
import AIRecommendationWidget from "../components/Recommendations/AIRecommendationWidget";

const RecommendationsPage = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Personalized Recommendations</h1>
    <AIRecommendationWidget />
  </div>
);

export default RecommendationsPage;
