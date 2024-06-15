import React from "react";
import PageTitle from "../components/PageTitle";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useOutletContext } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from "@mui/x-data-grid";

function Books() {
  const globalData = useOutletContext();
  const books = globalData.books;
  const setBooks = globalData.setBooks

  // Table to display books
  const rows = books.map((book) => {
    return {
      id: book.book_id,
      title: book.title,
      cover_url: book.cover_image,
      authors: book.authors.toString(),
      pub_year: book.publication_year,
      publisher: book.publisher,
      category: book.category,
      price: book.retail_price,
      stock: book.copies_available,
    };
  });
  const columns = [
    { field: "id", headerName: "ID", width: 30 },
    { field: "title", headerName: "Book Title", width: 160 },
    { field: "cover_url", 
    headerName: "Cover", 
    width: 100, 
    renderCell: (params) => (
        <img
          src={params.value}
          alt="Book cover"
          style={{ width: '40px', height: '40px' }}
        />
      ) 
    },
    { field: "authors", headerName: "Author(s)", width: 130 },
    { field: "pub_year", headerName: "Pub Year", width: 90 },
    { field: "publisher", headerName: "Publisher", width: 130 },
    { field: "category", headerName: "Genre", width: 100 },
    { field: "price", headerName: "Price (Ksh)", type: "number", width: 90 },
    { field: "stock", headerName: "Stock", type: "number", width: 70 },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <>
          <IconButton
            aria-label="update"
            onClick={() => handleUpdate(params.row.id)}
            color="success"
            size="small"
            style={{ marginRight: "0.5rem" }}
          >
            <EditIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => handleDelete(params.row.id)}
            color="error"
            size="small"
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </>
      ),
    },
  ];

  // Handlers
  function handleUpdate(id){

  }

  function handleDelete(id){

  }

  return (
    <div className="books-section">
      <PageTitle title="Book Details" />
      <section className="books-table-section">
        <Button
          variant="contained"
          sx={{
            fontFamily: "Poppins",
            textTransform: "capitalize",
            marginBottom: "1rem",
          }}
          startIcon={<AddIcon />}
        >
          Add New Book
        </Button>

        <div style={{ height: 430, width: "100%" }}>
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

export default Books;
