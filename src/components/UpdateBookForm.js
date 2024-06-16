import React, { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";

function UpdateBookForm({ openForm, setOpenForm }) {
  const handleCloseForm = () => setOpenForm(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    borderRadius: "1em",
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
          Update Book
        </Typography>
        <hr></hr>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <form></form>
      </Box>
    </Modal>
  );
}

export default UpdateBookForm;
