import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // dodajte ovu liniju

import Book from './Book';
import Form from './Form';

function Books() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv4() }]); // dodajte id koristeći uuid
  };

  return (
    <div>
      <h1>List of Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Book title={book.title} author={book.author} />
          </li>
        ))}
      </ul>
      <Form handleAddBook={handleAddBook} />
    </div>
  );
}

export default Books;
