// src/components/User/HistoryTimeline.jsx
import React from "react";
import PropTypes from "prop-types";

const HistoryTimeline = ({ items }) => (
  <ul className="border-l-2 pl-4">
    {items.map((i) => (
      <li key={i.id} className="mb-4">
        <span className="font-semibold">{i.date}</span>
        <p>{i.description}</p>
      </li>
    ))}
  </ul>
);

HistoryTimeline.propTypes = {
  items: PropTypes.array.isRequired,
};

export default HistoryTimeline;
