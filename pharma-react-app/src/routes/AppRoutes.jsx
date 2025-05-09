import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../features/auth/useAuth";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Upload from "../pages/Upload";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";
import CartPage from "../pages/CartPage";
import OrderStatus from "../components/OrderStatus";
import CheckoutPage from "../pages/CheckoutPage";
import RecommendationsPage from "../pages/RecommendationsPage";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="shop"
        element={
          <PrivateRoute>
            <Shop />
          </PrivateRoute>
        }
      />
      <Route
        path="upload"
        element={
          <PrivateRoute>
            <Upload />
          </PrivateRoute>
        }
      />
      <Route path="cart" element={<CartPage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="recommendations" element={<RecommendationsPage />} />
      <Route path="order/:id" element={<OrderStatus />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default AppRoutes;
