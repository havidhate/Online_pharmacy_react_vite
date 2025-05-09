// src/pages/CheckoutPage.jsx
import React from "react";
import MultiStepForm from "../components/Checkout/MultiStepForm";
import StepIndicator from "../components/Checkout/StepIndicator";

const CheckoutPage = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Checkout</h1>
    <StepIndicator />
    <MultiStepForm />
  </div>
);

export default CheckoutPage;
