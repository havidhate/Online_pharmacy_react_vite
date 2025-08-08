// src/features/repaymentCalendar/RepaymentCalendar.jsx
import React, { useEffect, useState } from "react";
import "./calendar.css";
import { formatDate, isOverdue, isToday } from "../../utils/dateUtils";

const RepaymentCalendar = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    // Mock data — replace with API call in production
    const today = new Date().toISOString().split("T")[0];
    setSchedule([
      { date: "2024-05-01", status: "paid", amount: 1500 },
      { date: "2024-06-01", status: "overdue", amount: 1500 },
      { date: today, status: "upcoming", amount: 1500 },
    ]);
  }, []);

  return (
    <div className="calendar-section">
      <h3>Repayment Calendar</h3>
      <div className="calendar-grid">
        {schedule.map((entry, idx) => (
          <div key={idx} className={`calendar-cell ${entry.status}`}>
            <strong>{formatDate(entry.date)}</strong>
            <p>₹{entry.amount}</p>
            <p className="status-label">{entry.status.toUpperCase()}</p>
            {entry.status === "upcoming" && <button>Make Payment</button>}
            {entry.status === "overdue" && <button>Request Extension</button>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepaymentCalendar;
