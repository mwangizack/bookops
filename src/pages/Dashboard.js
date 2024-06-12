import React from "react";
import PageTitle from "../components/PageTitle";
import DashboardCard from "../components/DashboardCard";
import cards from "../data/cards";

function Dashboard() {
  const cardsToDisplay = cards.map((card) => (
    <DashboardCard cardObject={card} />
  ));

  return (
    <div>
      <PageTitle />
      <section className="dashboard-cards-section">{cardsToDisplay}</section>
    </div>
  );
}

export default Dashboard;
