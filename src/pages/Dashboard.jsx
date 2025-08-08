// src/pages/Dashboard.jsx
import React from "react";
import StatusDashboard from "../features/loanStatus/StatusDashboard";
import RepaymentCalendar from "../features/repaymentCalendar/RepaymentCalendar";

const Dashboard = () => {
  return (
    <div className="container">
      <h2>Loan Application Dashboard</h2>

      {/* Loan Status Tracker */}
      <StatusDashboard />

      {/* Repayment Calendar */}
      <RepaymentCalendar />
    </div>
  );
};

export default Dashboard;
