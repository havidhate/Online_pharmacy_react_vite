// src/pages/Home.jsx
import React from "react";
import RecommendationCarousel from "../components/Recommendations/RecommendationCarousel";
import SearchBox from "../components/Search/SearchBox";

const Home = () => (
  <main className="container mx-auto p-4">
    <SearchBox />
    <h2 className="mt-8 text-2xl font-bold">Recommended for You</h2>
    <RecommendationCarousel />
  </main>
);

export default Home;
