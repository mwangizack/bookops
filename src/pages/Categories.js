import React from "react";
import PageTitle from "../components/PageTitle";
import { useOutletContext } from "react-router-dom";

function Categories() {
  const globalData = useOutletContext();
  const books = globalData.books;

  return (
    <div className="categories-section">
      <PageTitle title="Categories" />
      <section className="categories-content-section"></section>
    </div>
  );
}

export default Categories;
