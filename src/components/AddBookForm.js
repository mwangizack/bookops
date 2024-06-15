import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";

function AddBookForm({ openForm, setOpenForm, books, setBooks }) {
  const handleCloseForm = () => setOpenForm(false);
  const [formData, setFormData] = useState({
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleAddBook(e) {
    e.preventDefault();
    fetch("https://bookops-backend.onrender.com/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.title,
        authors: formData.authors.split(","),
        cover_image: formData.cover_image,
        summary: formData.summary,
        publisher: formData.publisher,
        publication_year: parseInt(formData.publication_year),
        category: formData.category,
        copies_available: parseInt(formData.copies_available),
        reorder_level: parseInt(formData.reorder_level),
        retail_price: parseInt(formData.retail_price),
        buying_price: parseInt(formData.buying_price),
        supplier: {
          supplier_name: formData.supplier_name,
          contacts: {
            phone_number: formData.supplier_phone_number,
            email_address: formData.supplier_email_address,
          },
        },
      }),
    })
    .then(response => response.json())
    .then(data => {
      setBooks([...books, data])
      e.target.reset()
      handleCloseForm()
    })
    .catch(error => console.log(`Error adding book: ${error}`))    
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
          Add New Book
        </Typography>
        <hr></hr>
        <form onSubmit={(event) => handleAddBook(event)}>
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
            value={formData.title}
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
            value={formData.authors}
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
            value={formData.cover_image}
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
            value={formData.summary}
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
            value={formData.publisher}
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
            value={formData.publication_year}
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
            value={formData.category}
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
            value={formData.copies_available}
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
            value={formData.reorder_level}
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
            value={formData.retail_price}
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
            value={formData.buying_price}
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
            value={formData.supplier_name}
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
            value={formData.supplier_phone_number}
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
            value={formData.supplier_email_address}
            onChange={(event) => handleChange(event)}
          />
          <Button
            type="submit"
            startIcon={<LibraryAddOutlinedIcon />}
            sx={{ mt: 2 }}
            variant="contained"
          >
            Add Book
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default AddBookForm;
