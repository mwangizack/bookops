import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";


function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('https://bookops-backend.onrender.com/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      <Header />
      <Box sx={{display: 'flex'}}>
        <NavBar />
        <Outlet context={books}/>
      </Box>
    </>
  );
}

export default App;
