import React from 'react';
import { Link } from 'react-router-dom';

function Books() {
  return (
    <div>
      <h1>List of Books</h1>
      <ul>
        {/* Display list of books */}
      </ul>
      <Link to="/books/add">Add a new book</Link>
    </div>
  );
}

export default Books;
