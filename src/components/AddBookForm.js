import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';

function AddBookForm({ openForm, setOpenForm }) {
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
    supplier: {
      supplier_name: "",
      contacts: {
        phone_number: "",
        email_address: "",
      },
    },
  });

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    maxHeight: '90vh',
    overflowY:'scroll',
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
        <form>
          <TextField
            type="text"
            fullWidth
            required
            id="title"
            name="title"
            label="Book Title"
            variant="outlined"
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
            variant="outlined"
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
            variant="outlined"
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
            variant="outlined"
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
            variant="outlined"
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
            variant="outlined"
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
            variant="outlined"
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
            variant="outlined"
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
            variant="outlined"
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
            variant="outlined"
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
            variant="outlined"
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
            label="Buying price"
            variant="outlined"
            size="small"
            sx={{ mt: 2 }}
            value={formData.supplier.supplier_name}
            onChange={(event) => handleChange(event)}
          />
          <TextField
            type="text"
            fullWidth
            required
            id="phone_number"
            name="phone_number"
            label="Buying price"
            variant="outlined"
            size="small"
            sx={{ mt: 2 }}
            value={formData.supplier.contacts.phone_number}
            onChange={(event) => handleChange(event)}
          />
          <TextField
            type="text"
            fullWidth
            id="phone_number"
            name="phone_number"
            label="Buying price"
            variant="outlined"
            size="small"
            sx={{ mt: 2 }}
            value={formData.supplier.contacts.email_address}
            onChange={(event) => handleChange(event)}
          />
          <Button
            startIcon={<LibraryAddOutlinedIcon />}
            sx={{mt: 2}}
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
