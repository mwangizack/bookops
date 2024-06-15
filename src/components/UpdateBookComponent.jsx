import React, { useEffect, useState } from "react";

const UpdateBookComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data on component mount
    fetch("http://127.0.0.1:5500/db.json")
      .then((response) => response.json())
      .then((fetchedData) => {
        // Find the book with book_id: 4
        const book = fetchedData.find((book) => book.book_id === 4);
        if (book) {
          // Update the authors
          book.authors = ["Mike Matekeya"];

          // Proceed to update the book using a PUT request
          updateBook(fetchedData); // Send the entire data array for PUT request
        } else {
          console.error("Book not found");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        setError(err);
      });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const updateBook = (updatedData) => {
    fetch("http://127.0.0.1:5500/db.json", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((updatedData) => {
        console.log("Update Success:", updatedData);
        setData(updatedData); // Update the state with the new data
      })
      .catch((err) => {
        console.error("Update Error:", err);
        setError(err);
      });
  };

  return (
    <div>
      {error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>Book data updated successfully.</div>
      )}
    </div>
  );
};

export default UpdateBookComponent;
