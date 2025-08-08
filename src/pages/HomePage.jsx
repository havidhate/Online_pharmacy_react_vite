// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to the Loan Application System</h1>
      <p>Select what you’d like to do:</p>
      <div style={{ display: "flex", gap: "1rem", marginTop: "20px" }}>
        <Link to="/apply">
          <button>Apply for Loan</button>
        </Link>
        <Link to="/dashboard">
          <button>View Dashboard</button>
        </Link>
        <Link to="/compare">
          <button>Compare Loans</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
