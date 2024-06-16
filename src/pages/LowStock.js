import React from "react";
import PageTitle from "../components/PageTitle";
import { useOutletContext } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

function LowStock() {
  const globalData = useOutletContext();
  const books = globalData.books;
  const booksToDisplay = books.filter(book => book.copies_available <= book.reorder_level)

  // Table variables
  const rows = booksToDisplay.map((book) => {
    return {
      id: book.id,
      title: book.title,
      cover_url: book.cover_image,
      authors: book.authors.toString(),
      stock: book.copies_available,
      reorder_level: book.reorder_level,
      buying_price: book.buying_price,
      supplier_name: book.supplier_name,
      supplier_phone_number: book.supplier_phone_number,
      supplier_email_address: book.supplier_email_address,
    };
  });

  const columns = [
    { field: "id", headerName: "ID", width: 30 },
    { field: "title", headerName: "Book Title", width: 160 },
    {
      field: "cover_url",
      headerName: "Cover",
      width: 90,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="Book cover"
          style={{ width: "40px", height: "40px" }}
        />
      ),
    },
    { field: "authors", headerName: "Author(s)", width: 130 },
    { field: "stock", headerName: "Stock", width: 90 },
    { field: "reorder_level", headerName: "Reorder level", width: 100 },
    { field: "buying_price", headerName: "Buying price (Ksh)", width: 90 },
    { field: "supplier_name", headerName: "Supplier name", width: 130 },
    { field: "supplier_phone_number", headerName: "Supplier phone number", width: 130 },
    { field: "supplier_email_address", headerName: "Supplier email address", width: 130 },
]
  

  return (
    <div className="reorders-section">
      <PageTitle title="Reorders" />
      <section className="reorders-content-section">
      <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
      </section>
    </div>
  );
}

export default LowStock;
