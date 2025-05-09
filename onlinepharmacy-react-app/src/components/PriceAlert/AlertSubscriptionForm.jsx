// src/components/PriceAlert/AlertSubscriptionForm.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";

const AlertSubscriptionForm = ({ onSubscribe }) => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubscribe(email);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="p-2 border rounded flex-1"
      />
      <button type="submit" className="px-4 bg-teal-600 text-white rounded">
        Subscribe
      </button>
    </form>
  );
};

AlertSubscriptionForm.propTypes = {
  onSubscribe: PropTypes.func.isRequired,
};

export default AlertSubscriptionForm;
