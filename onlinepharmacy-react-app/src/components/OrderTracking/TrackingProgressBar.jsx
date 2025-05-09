// src/components/OrderTracking/TrackingProgressBar.jsx
import React from "react";
import PropTypes from "prop-types";

const TrackingProgressBar = ({ status }) => {
  const steps = ["Processing", "Shipped", "Out for Delivery", "Delivered"];
  const idx = steps.indexOf(status);
  return (
    <div className="flex items-center space-x-2">
      {steps.map((step, i) => (
        <div key={step} className="flex-1 text-center">
          <div
            className={`mx-auto w-4 h-4 rounded-full ${
              i <= idx ? "bg-teal-600" : "bg-gray-300"
            }`}
          />
          <p className="text-sm">{step}</p>
        </div>
      ))}
    </div>
  );
};

TrackingProgressBar.propTypes = {
  status: PropTypes.string.isRequired,
};

export default TrackingProgressBar;
