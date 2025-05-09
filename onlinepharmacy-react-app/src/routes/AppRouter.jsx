import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

import Home from "../pages/Home";
import Login from "../pages/Login"; // create this file
import RecommendationsPage from "../pages/RecommendationsPage";
import Catalog from "../pages/Catalog";
import ProductDetail from "../pages/ProductDetail";
import UploadPrescription from "../pages/UploadPrescription";
import OrderHistory from "../pages/OrderHistory";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import ProfilePage from "../pages/ProfilePage";
import LiveChatPage from "../pages/LiveChatPage";

const AppRouter = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;

  return (
    <BrowserRouter>
      <nav className="p-4 bg-gray-100 space-x-4">
        <Link to="/">Home</Link>
        {user ? (
          <Link to="/profile">Profile</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/recommendations">Recommendations</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />
        <Route path="/recommendations" element={<RecommendationsPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/upload-prescription" element={<UploadPrescription />} />
        <Route
          path="/orders"
          element={user ? <OrderHistory /> : <Navigate to="/login" replace />}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="/checkout"
          element={user ? <CheckoutPage /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/profile"
          element={user ? <ProfilePage /> : <Navigate to="/login" replace />}
        />
        <Route path="/chat" element={<LiveChatPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
