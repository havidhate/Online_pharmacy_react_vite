import { useState, useEffect, useReducer, useRef } from "react";
import api from "../api";

const reducer = (state, action) => {
  if (action.type === "TOGGLE_COMPLETED") return !state;
  return state;
};

export default function SprintOverview() {
  const [sprints, setSprints] = useState([]);
  const [page, setPage] = useState(1);
  const [completedOnly, toggleCompleted] = useReducer(reducer, false);
  const topRef = useRef(null);

  const fetchSprints = async () => {
    const res = await api.get(`/api/sprints?completed=${completedOnly}`);
    setSprints(res.data);
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    fetchSprints();
  }, [completedOnly]);

  const paginatedSprints = sprints.slice((page - 1) * 5, page * 5);

  return (
    <div className="container" ref={topRef}>
      <h2>Sprint Overview</h2>
      <button onClick={() => toggleCompleted({ type: "TOGGLE_COMPLETED" })}>
        {completedOnly ? "Show All" : "Show Completed Only"}
      </button>

      {paginatedSprints.map((sprint) => (
        <div key={sprint._id}>
          <h4>{sprint.title}</h4>
          <p>
            {sprint.startDate} - {sprint.endDate}
          </p>
          <p>Status: {sprint.completed ? "Completed" : "Pending"}</p>
          <p>Points: {sprint.points}</p>
        </div>
      ))}

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <button
        disabled={page * 5 >= sprints.length}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
