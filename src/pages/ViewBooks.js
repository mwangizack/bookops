import React, { useState, useEffect } from 'react';
import './ViewBooks.css'; // Import CSS file for styling

const ViewBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://bookops-backend.onrender.com/books');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        setError('Error fetching book list');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="dashboard">
      <h1 className="title">Book Inventory</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <table className="book-table">
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Authors</th>
            <th>Summary</th>
            <th>Publisher</th>
            <th>Publication Year</th>
            <th>Category</th>
            <th>Copies Available</th>
            <th>Retail Price</th>
            <th>Buying Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book.book_id}>
              <td>{book.book_id}</td>
              <td>{book.title}</td>
              <td>{book.authors.join(', ')}</td>
              <td>{book.summary}</td>
              <td>{book.publisher}</td>
              <td>{book.publication_year}</td>
              <td>{book.category}</td>
              <td>{book.copies_available}</td>
              <td>${(book.retail_price / 100).toFixed(2)}</td>
              <td>${(book.buying_price / 100).toFixed(2)}</td>
              <td> {/* Actions column */}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBooks;
