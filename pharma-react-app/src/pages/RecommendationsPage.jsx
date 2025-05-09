// src/pages/RecommendationsPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../features/auth/useAuth";
import { useCart } from "../contexts/CartContext";
import useRecommendations from "../features/recommendations/useRecommendations";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RecommendationsPage = () => {
  const { user } = useAuth();
  const { addToCart } = useCart();
  const { recs, loading } = useRecommendations();

  // If you still need an in-page guard (optional if using PrivateRoute)
  if (!user) {
    return (
      <div className="content text-center">
        <p>
          Please{" "}
          <Link to="/login" className="link-secondary">
            login
          </Link>{" "}
          to see recommendations.
        </p>
      </div>
    );
  }

  const handleAdd = (product) => {
    addToCart(product);
  };

  return (
    <>
      <main className="content">
        <h2 className="section-title">Recommended for You</h2>

        {loading ? (
          <p className="text-center">Loading recommendations…</p>
        ) : recs.length > 0 ? (
          <div className="grid grid-4">
            {recs.map((prod) => (
              <div key={prod.id} className="card">
                <ProductCard product={prod} onAddToCart={handleAdd} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">
            Add items to your cart to get personalized recommendations!
          </p>
        )}
      </main>
    </>
  );
};

export default RecommendationsPage;
