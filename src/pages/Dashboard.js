import React from "react";
import PageTitle from "../components/PageTitle";
import DashboardCard from "../components/DashboardCard";
import { useOutletContext } from "react-router-dom";

function Dashboard() {
  const globalData = useOutletContext()
  const books = globalData.books

  const bookCategories = books.map(book => book.category)
  const uniqueBookCategories = new Set(bookCategories)
  const bookCategoriesCount = uniqueBookCategories.size

  const booksToBeOrdered = books.filter(book => book.copies_available <= book.reorder_level)
  const booksToBeOrderedCount = booksToBeOrdered.length

  const reports = [
    {
      id: 1,
      cardTitle: "Listed Books",
      count: books.length,
      route: "/books",
    },
    {
      id: 2,
      cardTitle: "Book Categories",
      count: bookCategoriesCount,
      route: "/categories",
    },
    {
      id: 3,
      cardTitle: "Low Stock",
      count: booksToBeOrderedCount,
      route: "/reorder",
    },
  ];

  const cardsToDisplay = reports.map((report) => (
    <DashboardCard cardData={report} />
  ));
  
  return (
    <div className="dashboard-section">
      <PageTitle title='Dashboard'/>
      <section className="dashboard-cards-section">{cardsToDisplay}</section>
    </div>
  );
}

export default Dashboard;
