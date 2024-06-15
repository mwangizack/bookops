import React from "react";
import { Link } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

function DashboardCard({ cardData }) {
  const { cardTitle, count, route } = cardData;

  return (
    <div className="dashboard-card">
      <p className="dashboard-card-title">{cardTitle}</p>
      <p className="dashboard-card-metric">{!count ? <CircularProgress />: count}</p>
      <Link to={route} className="dashboard-card-link">View Details</Link>
    </div>
  );
}

export default DashboardCard;
