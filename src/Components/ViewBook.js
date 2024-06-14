// src/Components/ViewBook.js
import React, { useState, useEffect } from 'react';

function ViewBook() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Book List</h1>
            <ul>
                {books.map(book => (
                    <li key={book.book_id} style={{ marginBottom: '20px', listStyleType: 'none', border: '1px solid #ccc', padding: '10px' }}>
                        <img src={book.cover_image} alt={book.title} style={{ width: '100px', height: '150px', float: 'left', marginRight: '20px' }} />
                        <div style={{ overflow: 'hidden' }}>
                            <h2>{book.title}</h2>
                            <p><strong>Authors:</strong> {book.authors.join(', ')}</p>
                            <p><strong>Summary:</strong> {book.summary}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ViewBook;
