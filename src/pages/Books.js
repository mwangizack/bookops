import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useOutletContext } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from "@mui/x-data-grid";
import AddBookForm from "../components/AddBookForm";
import UpdateBookForm from "../components/UpdateBookForm";

function Books() {
  const globalData = useOutletContext();
  const books = globalData.books;
  const setBooks = globalData.setBooks;

  // Table rows and columns to display books
  const rows = books.map((book) => {
    return {
      id: book.id,
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
    {
      field: "cover_url",
      headerName: "Cover",
      width: 100,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="Book cover"
          style={{ width: "40px", height: "40px" }}
        />
      ),
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
            onClick={() => {
              handleOpenUpdateBookForm();
              handleSelectedBookDetails(params.row.id);
            }}
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

  // Popup forms variables
  const [openAddBookForm, setOpenAddBookForm] = useState(false);
  const handleOpenAddBookForm = () => setOpenAddBookForm(true);
  const [openUpdateBookForm, setOpenUpdateBookForm] = useState(false);
  const handleOpenUpdateBookForm = () => setOpenUpdateBookForm(true);

  // Update book variables
  const [selectedBookData, setSelectedBookData] = useState({
    title: "",
    authors: [],
    cover_image: "",
    summary: "",
    publisher: "",
    publication_year: 1900,
    category: "",
    copies_available: 0,
    reorder_level: 0,
    retail_price: 0,
    buying_price: 0,
    supplier_name: "",
    supplier_phone_number: "",
    supplier_email_address: "",
  });

  // Handlers
  function handleSelectedBookDetails(id) {
    fetch(`https://bookops-backend.onrender.com/books/${id}`)
      .then((response) => response.json())
      .then((data) => setSelectedBookData(data))
      .catch((error) =>
        console.log(`Error getting selected book's details: ${error}`)
      );
  }

  function handleDelete(id) {
    fetch(`https://bookops-backend.onrender.com/books/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        setBooks(books.filter(book => book.id !== id))
        alert('Book deleted!')
      })
      .catch((error) =>
        console.log(`Error deleting book: ${error}`)
      );
  }

  return (
    <div className="books-section">
      <PageTitle title="Book Details" />
      <section className="books-table-section">
        <Button
          variant="contained"
          onClick={() => handleOpenAddBookForm()}
          sx={{
            fontFamily: "Poppins",
            textTransform: "capitalize",
            marginBottom: "1.5rem",
          }}
          startIcon={<AddIcon />}
        >
          Add New Book
        </Button>

        {/* Books Table */}
        <div style={{ height: 372, width: "100%" }}>
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

      {/* Modal forms for saving and updating*/}
      <AddBookForm
        openForm={openAddBookForm}
        setOpenForm={setOpenAddBookForm}
        books={books}
        setBooks={setBooks}
      />

      <UpdateBookForm
        openForm={openUpdateBookForm}
        setOpenForm={setOpenUpdateBookForm}
        selectedBookData={selectedBookData}
        setSelectedBookData={setSelectedBookData}
        books={books}
        setBooks={setBooks}
      />
    </div>
  );
}

export default Books;
