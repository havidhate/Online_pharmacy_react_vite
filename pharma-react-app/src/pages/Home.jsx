import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <main className="home-hero">
    <div className="home-hero__content">
      <h1>Welcome to PharmaEase</h1>
      <p>Your trusted online pharmacy—fast delivery, authentic medicines.</p>
      <Link to="/shop" className="btn-primary">
        Shop Now
      </Link>
    </div>
  </main>
);

export default Home;
