// src/pages/OrderHistory.jsx
import React, { useEffect, useState } from "react";
import { fetchOrderHistory } from "../services/orderService";
import HistoryTimeline from "../components/User/HistoryTimeline";

const OrderHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchOrderHistory().then(setHistory);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Orders & Prescriptions</h1>
      <HistoryTimeline items={history} />
    </div>
  );
};

export default OrderHistory;
