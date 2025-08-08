// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ApplyLoan from "./pages/ApplyLoan";
import Dashboard from "./pages/Dashboard";
import Comparison from "./pages/Comparison";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<ApplyLoan />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/compare" element={<Comparison />} />
      </Routes>
    </>
  );
};

export default App;
