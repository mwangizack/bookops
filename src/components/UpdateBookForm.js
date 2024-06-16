import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

function UpdateBookForm({
  openForm,
  setOpenForm,
  selectedBookData,
  setSelectedBookData,
  books,
  setBooks,
}) {
  const handleCloseForm = () => setOpenForm(false);
  const [loading, setLoading] = useState(false);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    maxHeight: "90vh",
    overflowY: "scroll",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  function handleChange(e) {
    setSelectedBookData({
      ...selectedBookData,
      [e.target.name]: e.target.value,
    });
  }

  function handleUpdateBook(e) {
    e.preventDefault();
    setLoading(true);
    fetch(`https://bookops-backend.onrender.com/books/${selectedBookData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedBookData),
    })
      .then((response) => response.json())
      .then((data) => {
        setBooks(
          books.map((book) => (book.id === selectedBookData.id ? data : book))
        );
        e.target.reset();
        setLoading(false)
        handleCloseForm();
      })
      .catch((error) => console.log(`Error updating book's details: ${error}`));
  }

  return (
    <Modal
      open={openForm}
      onClose={handleCloseForm}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {!selectedBookData ? "Loading..." : "Update Book"}
        </Typography>
        <hr></hr>
        <form onSubmit={(event) => handleUpdateBook(event)}>
          <TextField
            type="text"
            fullWidth
            required
            id="title"
            name="title"
            label="Book Title"
            variant="filled"
            size="small"
            sx={{ mt: 1 }}
            value={selectedBookData.title}
            onChange={(event) => handleChange(event)}
          />
          <TextField
            type="text"
            fullWidth
            required
            id="authors"
            name="authors"
            label="Author(s) seperated by commas"
            variant="filled"
            size="small"
            sx={{ mt: 2 }}
            value={selectedBookData.authors}
            onChange={(event) => handleChange(event)}
          />
          <TextField
            type="text"
            fullWidth
            required
            id="cover_image"
            name="cover_image"
            label="Book cover URL"
            variant="filled"
            size="small"
            sx={{ mt: 2 }}
            value={selectedBookData.cover_image}
            onChange={(event) => handleChange(event)}
          />
          <TextField
            multiline
            fullWidth
            id="summary"
            name="summary"
            label="Book summary"
            variant="filled"
            size="small"
            sx={{ mt: 2 }}
            value={selectedBookData.summary}
            onChange={(event) => handleChange(event)}
          />
          <TextField
            type="text"
            fullWidth
            required
            id="publisher"
            name="publisher"
            label="Publisher..."
            variant="filled"
            size="small"
            sx={{ mt: 2 }}
            value={selectedBookData.publisher}
            onChange={(event) => handleChange(event)}
          />
          <TextField
            type="number"
            fullWidth
            required
            id="publication_year"
            name="publication_year"
            label="Publication year"
            variant="filled"
            size="small"
            sx={{ mt: 2 }}
            value={selectedBookData.publication_year}
            onChange={(event) => handleChange(event)}
          />
          <TextField
            type="text"
            fullWidth
            required
            id="category"
            name="category"
            label="Book genre e.g., Non-Fiction, Romance..."
            variant="filled"
            size="small"
            sx={{ mt: 2 }}
            value={selectedBookData.category}
            onChange={(event) => handleChange(event)}
          />
          <TextField
            type="number"
            fullWidth
            required
            id="copies_available"
            name="copies_available"
            label="Number of copies"
            variant="filled"
            size="small"
            sx={{ mt: 2 }}
            value={selectedBookData.copies_available}
            onChange={(event) => handleChange(event)}
          />
          <TextField
            type="number"
            fullWidth
            required
            id="reorder_level"
            name="reorder_level"
            label="Reorder level"
            variant="filled"
            size="small"
            sx={{ mt: 2 }}
            value={selectedBookData.reorder_level}
            onChange={(event) => handleChange(event)}
          />
          <TextField
            type="number"
            fullWidth
            required
            id="retail_price"
            name="retail_price"
            label="Selling price"
            variant="filled"
            size="small"
            sx={{ mt: 2 }}
            value={selectedBookData.retail_price}
            onChange={(event) => handleChange(event)}
          />
          <TextField
            type="number"
            fullWidth
            required
            id="buying_price"
            name="buying_price"
            label="Buying price"
            variant="filled"
            size="small"
            sx={{ mt: 2 }}
            value={selectedBookData.buying_price}
            onChange={(event) => handleChange(event)}
          />
          <TextField
            type="text"
            fullWidth
            required
            id="supplier_name"
            name="supplier_name"
            label="Supplier's name"
            variant="filled"
            size="small"
            sx={{ mt: 2 }}
            value={selectedBookData.supplier_name}
            onChange={(event) => handleChange(event)}
          />
          <TextField
            type="text"
            fullWidth
            required
            id="supplier_phone_number"
            name="supplier_phone_number"
            label="Supplier's mobile number"
            variant="filled"
            size="small"
            sx={{ mt: 2 }}
            value={selectedBookData.supplier_phone_number}
            onChange={(event) => handleChange(event)}
          />
          <TextField
            type="text"
            fullWidth
            id="supplier_email_address"
            name="supplier_email_address"
            label="Supplier's email address"
            variant="filled"
            size="small"
            sx={{ mt: 2 }}
            value={selectedBookData.supplier_email_address}
            onChange={(event) => handleChange(event)}
          />
          <Button
            type="submit"
            startIcon={<CheckCircleOutlineOutlinedIcon />}
            sx={{ mt: 2 }}
            variant="contained"
          >
            {loading ? "Updating..." : "Update"}
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default UpdateBookForm;
