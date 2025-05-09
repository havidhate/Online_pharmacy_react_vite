// src/components/Checkout/StepIndicator.jsx
import React from "react";

const StepIndicator = () => (
  <div className="flex space-x-4 mb-4">
    {["Address", "Payment", "Review"].map((label, i) => (
      <div key={label} className="flex-1 text-center">
        <div className="w-6 h-6 mx-auto bg-gray-300 rounded-full">{i + 1}</div>
        <p className="text-sm mt-1">{label}</p>
      </div>
    ))}
  </div>
);

export default StepIndicator;
