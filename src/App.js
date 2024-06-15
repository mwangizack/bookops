import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    fetch("https://bookops-backend.onrender.com/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error(error));
  }, []);

  const globalData = {
    books: books,
    login: login,
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Header logout={logout} />
          <Box sx={{ display: "flex" }}>
            <NavBar />
            <Outlet context={globalData} />
          </Box>
        </>
      ) : (
        <>
          <Navigate to="/login" />
          <Outlet context={globalData} />
        </>
      )}
    </>
  );
}

export default App;
