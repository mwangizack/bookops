import React from "react";
import { Link } from "react-router-dom";

function DashboardCard({ cardObject }) {
  const { cardTitle, count, route } = cardObject;

  return (
    <div className="dashboard-card">
      <p>{cardTitle}</p>
      <p>{count}</p>
      <Link to={route}>View Books</Link>
    </div>
  );
}

export default DashboardCard;
